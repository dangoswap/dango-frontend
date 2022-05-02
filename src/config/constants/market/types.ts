import { Address } from '../types'

export type MarketItem = {
  itemId: number
  name: string
  description?: string
  contractAddress: Address
  tokenIn: Address
  price: string
  totalLumiBalance?: string
  isFinished?: boolean
  imageUrl: string
}
