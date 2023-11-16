// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sendgrid from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';
import { SENDGRID_MAIN_EMAIL, verifyRecaptcha } from './api-utils';

type Body = {
  email: string;
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

    if (!data.email) {
      return res.status(400).json({ message: 'Invalid data' });
    }

    const { email, token } = data as Body;

    const recaptchaResponse = await verifyRecaptcha(token);

    if (!recaptchaResponse?.success || recaptchaResponse?.score < 0.5) {
      return res.status(400).json({ message: 'Invalid token' });
    }

    const apiKey = process.env.SENDGRID_API_KEY as string;

    sendgrid.setApiKey(apiKey);
    await sendgrid.send({
      to: SENDGRID_MAIN_EMAIL,
      from: SENDGRID_MAIN_EMAIL,
      subject: 'Nueva suscripción desde frontodock.com',
      text: 'Se ha registrado una suscripción a través de frontodock.com',
      html: `
      <p>Se ha registrado una suscripción a través de frontodock.com</p>
      <table>
      <thead>
        <tr>
          <th>E-mail</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${email}</td>
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
