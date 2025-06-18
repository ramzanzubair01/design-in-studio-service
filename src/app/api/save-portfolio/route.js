import fs from 'fs'
import path from 'path'

export async function POST(request) {
  const filePath = path.join(process.cwd(), 'data', 'portfolio.json')
  
  try {
    const data = await request.json()
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8')
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false,
      error: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}