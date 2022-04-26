import { Currency, ETHER, Token } from '@dangoswap/sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'KUB'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
