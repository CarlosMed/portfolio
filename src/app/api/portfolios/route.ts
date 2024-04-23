import { NextResponse } from 'next/server'
import Data from './portfolio.json'

export const GET = async () => {
  return NextResponse.json(Data)
}
