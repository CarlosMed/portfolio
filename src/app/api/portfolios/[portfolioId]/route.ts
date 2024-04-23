import { NextResponse } from 'next/server'

const fetchPortfolio = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/portfolios')
    return await response.json()
  } catch (error) {
    throw new Error('Error fetching portfolios')
  }
}

export async function GET(_: Request, context: any) {
  const allPortfolios = await fetchPortfolio()
  const { portfolioId } = context.params
  const portfolio = allPortfolios.filter((portfolio) => portfolio.id === portfolioId.toString())

  if (portfolio.length === 0) return NextResponse.json(
    { message: `Portfolio with id ${portfolioId} not found` },
  )

  return NextResponse.json(portfolio)
}
