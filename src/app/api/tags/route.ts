import { getTags } from '@/lib/api/api'

export async function GET() {
  return getTags()
}
