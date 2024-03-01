import { getVisitorCount } from '@/lib/metrics'

export async function GET() {
  const count = await getVisitorCount()

  const res = new Response(JSON.stringify({ count }), {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://kasban.info',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })

  return res
}
