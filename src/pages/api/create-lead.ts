// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
};
export const config = {
  api: {
    bodyParser: true,
  },
};
const token = process.env.TINYBIRD_AUTH as string;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { email } = req.body;
    if (!email) {
      return res.status(200).json({ success: false });
    }
    await fetch("https://api.us-east.tinybird.co/v0/events?name=leads", {
      method: "POST",
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        email,
      }),
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    return res.status(200).json({ success: true });
  }
}
