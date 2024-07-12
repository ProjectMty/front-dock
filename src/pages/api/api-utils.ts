import { Resend } from 'resend';

export type CaptchaValidation = {
  success: boolean;
  score: number;
  challenge_ts: string;
  hostname: string;
};

export type MailOptions = {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
};

const resend = new Resend(process.env.RESEND_KEY!);

export const emails = {
  from: 'sales@frontdock.com',
  to: 'sales@frontdock.com',
};

export const verifyRecaptcha = async (token: string): Promise<CaptchaValidation> => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY as string;

  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  const response = await fetch(verificationUrl, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    },
    method: 'POST',
  });

  const captchaValidation = await response.json();

  return captchaValidation satisfies CaptchaValidation;
};

export async function sendEmail({ to, from, subject, text, html }: MailOptions) {
  /* const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_FROM!,
      pass: process.env.EMAIL_FROM_PASSWORD!,
    },
  }); */

  const mailOptions: MailOptions = {
    to,
    from,
    subject,
    text,
    html,
  };

  const { data, error } = await resend.emails.send(mailOptions);

  if (error) {
    console.error({ error });
    throw new Error(error.message);
  }

  return data;
}
