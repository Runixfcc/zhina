import type { NextApiRequest, NextApiResponse } from 'next'

type Coin = {
  id: number
  position: {
    x: number
    y: number
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Coin[]>
) {
  const coins: Coin[] = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    position: {
      x: Math.random() * 800,
      y: Math.random() * 600,
    },
  }))

  res.status(200).json(coins)
}