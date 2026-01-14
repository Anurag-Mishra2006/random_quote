export default async function handler(
  _req: Request
) {
  const response = await fetch("https://zenquotes.io/api/quotes");
  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
