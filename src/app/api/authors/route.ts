import { getAuthors, getPosts } from '@/lib/api/api';
import { NextRequest } from 'next/server';

export async function GET(request: Request | NextRequest) {
  const url = new URL(request.url.toString());

  const page = Number(url.searchParams.get('page')) || 1;
  const limit = Number(url.searchParams.get('limit')) || 7;
  const filter = url.searchParams.get('filter') || '';

  return getAuthors(page, limit, filter);
}
