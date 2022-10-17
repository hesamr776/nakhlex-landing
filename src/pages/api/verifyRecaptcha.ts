// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

type Data = {
  success: boolean;
};

export default async function verifyRecaptcha(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { recaptchaResponse, phone } = req.body;
  console.log(phone);

  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${recaptchaResponse}`;

  try {
    const recaptchaRes = await fetch(verifyUrl, { method: 'POST' });

    const recaptchaJson = await recaptchaRes.json();
    console.log(recaptchaJson);

    res.status(200).json({ ...recaptchaJson });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
