import { searchPosts } from '@/lib/api/api';

export async function GET() {
  return searchPosts();
}
