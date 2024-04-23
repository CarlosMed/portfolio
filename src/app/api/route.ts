import {NextResponse} from 'next/server'

export const GET = async () => {
 return NextResponse.json({message: 'Hello World'})
}

export const POST = async (req: Request) => {
  const data = await req.json()
 return NextResponse.json(data)
}

