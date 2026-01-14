export default async function handler() {
  const res = await fetch("https://zenquotes.io/api/random");
  const data = await res.json();

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  });
}
