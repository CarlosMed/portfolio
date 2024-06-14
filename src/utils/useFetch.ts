export default async function useFetch(url: string) {

  const res = await fetch(url);
  const data = await res.json();

  return data;
}
