import { checkError, client } from './client';

export async function getBlogs() {
  const res = await client.from('blogs').select('*');
  return checkError(res);
}
