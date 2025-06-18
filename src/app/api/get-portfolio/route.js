import fs from 'fs'
import path from 'path'

export async function GET() {
  // Create data directory if it doesn't exist
  const dataDir = path.join(process.cwd(), 'data')
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir)
  }

  const filePath = path.join(dataDir, 'portfolio.json')
  
  try {
    // Create file with empty array if it doesn't exist
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '[]', 'utf8')
      return new Response('[]', {
        headers: { 'Content-Type': 'application/json' }
      })
    }
    
    const data = fs.readFileSync(filePath, 'utf8')
    return new Response(data, {
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error('Error in GET /api/get-portfolio:', error)
    return new Response(JSON.stringify({ 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}