//import { cookies } from 'next/headers';
export async function User() {

  const resp = await fetch('http://localhost:3712/api');
  const user = await resp.json();
  return <pre>{JSON.stringify(user, null, 2)}</pre>;
}
