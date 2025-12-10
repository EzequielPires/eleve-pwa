export async function http<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${baseUrl}${url}`, {
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
      ...(options.headers || {})
    },
    cache: "no-store",
    ...options,
  });

  if (!res.ok) {
    throw new Error(`Erro na requisição: ${res.statusText}`);
  }

  return await res.json();
}
