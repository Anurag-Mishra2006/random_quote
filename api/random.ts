import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  const response = await fetch("https://zenquotes.io/api/random");
  const data = await response.json();
  res.status(200).json(data);
}
