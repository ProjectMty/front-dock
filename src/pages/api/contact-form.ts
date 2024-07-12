// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { type ContactFormFields } from '@/types';
import { NextApiRequest, NextApiResponse } from 'next';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { emails, sendEmail, verifyRecaptcha } from './api-utils';

type Body = ContactFormFields & {
  token: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(400).json({ message: 'Invalid method' });
    }

    if (!req.body) {
      return res.status(400).json({ message: 'Invalid body' });
    }

    const data = JSON.parse(req.body);

    if (
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.phone ||
      !data.company ||
      !data.service ||
      !data.subject
    ) {
      return res.status(400).json({ message: 'Invalid data' });
    }

    const { firstName, lastName, email, phone, company, service, subject, token } = data as Body;

    const recaptchaResponse = await verifyRecaptcha(token);

    if (!recaptchaResponse?.success || recaptchaResponse?.score < 0.5) {
      return res.status(400).json({ message: 'Invalid token' });
    }

    const filePath = path.join(process.cwd(), 'public', 'contact-email.html');
    const html = await readFile(filePath, 'utf8');

    // Client email
    await sendEmail({
      from: emails.from,
      to: email,
      subject: 'Thank you for contacting | FrontDock',
      text: 'Thank you for contacting | FrontDock',
      html,
    });

    // Internal email
    await sendEmail({
      from: emails.from,
      to: emails.to,
      subject: 'Nuevo prospecto desde frontodock.com',
      text: 'Se ha registrado un prospecto a través de frontodock.com',
      html: `
      <p>Se ha registrado un prospecto a través de frontodock.com</p>
      <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>E-mail</th>
          <th>Phone</th>
          <th>Company</th>
          <th>Service</th>
          <th>Subject</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${firstName}</td>
          <td>${lastName}</td>
          <td>${email}</td>
          <td>${phone}</td>
          <td>${company}</td>
          <td>${service}</td>
          <td>${subject}</td>
        </tr>
      </tbody>
      </table>`,
    });

    return res.status(200).json({ message: 'Ok' });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`API ERROR: ${(error as Error).message}`);

    return res.status(500).json({
      message: 'Something went wrong, please try again.',
      error: { message: (error as Error)?.message || 'No message', details: JSON.stringify(error) },
    });
  }
}
