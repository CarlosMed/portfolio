import { NextResponse } from 'next/server'
import Data from '../../../../public/portfolio.json'

export const GET = async () => {
  return NextResponse.json(Data)
}
