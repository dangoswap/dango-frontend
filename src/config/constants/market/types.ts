import { Address } from '../types'

export type MarketItem = {
  itemId: number
  name: string
  description?: string
  contractAddress: Address
  price: string
  isFinished?: boolean
  imageUrl: string
}
