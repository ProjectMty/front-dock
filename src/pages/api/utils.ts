export type CaptchaValidation = {
  success: boolean;
  score: number;
  challenge_ts: string;
  hostname: string;
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
