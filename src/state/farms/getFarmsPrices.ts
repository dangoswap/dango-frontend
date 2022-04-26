import BigNumber from 'bignumber.js'
import { BIG_ONE, BIG_ZERO } from 'utils/bigNumber'
import { filterFarmsByQuoteToken } from 'utils/farmsPriceHelpers'
import { SerializedFarm } from 'state/types'
import tokens from 'config/constants/tokens'

const getFarmFromTokenSymbol = (
  farms: SerializedFarm[],
  tokenSymbol: string,
  preferredQuoteTokens?: string[],
): SerializedFarm => {
  const farmsWithTokenSymbol = farms.filter((farm) => farm.token.symbol === tokenSymbol)
  const filteredFarm = filterFarmsByQuoteToken(farmsWithTokenSymbol, preferredQuoteTokens)
  return filteredFarm
}

const getFarmBaseTokenPrice = (
  farm: SerializedFarm,
  quoteTokenFarm: SerializedFarm,
  kubPriceBaht: BigNumber,
): BigNumber => {
  const hasTokenPriceVsQuote = Boolean(farm.tokenPriceVsQuote)

  // if (farm.quoteToken.symbol === tokens.busd.symbol) {
  //   return hasTokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : BIG_ZERO
  // }

  if (farm.quoteToken.symbol === tokens.wbnb.symbol) {
    return hasTokenPriceVsQuote ? kubPriceBaht.times(farm.tokenPriceVsQuote) : BIG_ZERO
  }

  // We can only calculate profits without a quoteTokenFarm for BUSD/BNB farms
  if (!quoteTokenFarm) {
    return BIG_ZERO
  }

  // Possible alternative farm quoteTokens:
  // UST (i.e. MIR-UST), pBTC (i.e. PNT-pBTC), BTCB (i.e. bBADGER-BTCB), ETH (i.e. SUSHI-ETH)
  // If the farm's quote token isn't BUSD or WBNB, we then use the quote token, of the original farm's quote token
  // i.e. for farm PNT - pBTC we use the pBTC farm's quote token - BNB, (pBTC - BNB)
  // from the BNB - pBTC price, we can calculate the PNT - BUSD price
  if (quoteTokenFarm.quoteToken.symbol === tokens.wbnb.symbol) {
    const quoteTokenInBusd = kubPriceBaht.times(quoteTokenFarm.tokenPriceVsQuote)
    return hasTokenPriceVsQuote && quoteTokenInBusd
      ? new BigNumber(farm.tokenPriceVsQuote).times(quoteTokenInBusd)
      : BIG_ZERO
  }

  // if (quoteTokenFarm.quoteToken.symbol === tokens.busd.symbol) {
  //   const quoteTokenInBusd = quoteTokenFarm.tokenPriceVsQuote
  //   return hasTokenPriceVsQuote && quoteTokenInBusd
  //     ? new BigNumber(farm.tokenPriceVsQuote).times(quoteTokenInBusd)
  //     : BIG_ZERO
  // }

  // Catch in case token does not have immediate or once-removed BUSD/WBNB quoteToken
  return BIG_ZERO
}

const getFarmQuoteTokenPrice = (
  farm: SerializedFarm,
  quoteTokenFarm: SerializedFarm,
  kubPriceBaht: BigNumber,
): BigNumber => {
  if (farm.quoteToken.symbol === 'BUSD') {
    return BIG_ONE
  }

  if (farm.quoteToken.symbol === 'WKUB') {
    return kubPriceBaht
  }

  if (!quoteTokenFarm) {
    return BIG_ZERO
  }

  if (quoteTokenFarm.quoteToken.symbol === 'WKUB') {
    return quoteTokenFarm.tokenPriceVsQuote ? kubPriceBaht.times(quoteTokenFarm.tokenPriceVsQuote) : BIG_ZERO
  }

  if (quoteTokenFarm.quoteToken.symbol === 'BUSD') {
    return quoteTokenFarm.tokenPriceVsQuote ? new BigNumber(quoteTokenFarm.tokenPriceVsQuote) : BIG_ZERO
  }

  return BIG_ZERO
}

const getFarmsPrices = (farms: SerializedFarm[], kubPrice: number) => {
  // const bnbBusdFarm = farms.find((farm) => farm.token.symbol === 'BUSD' && farm.quoteToken.symbol === 'WKUB')
  // const bnbPriceBusd = bnbBusdFarm.tokenPriceVsQuote ? BIG_ONE.div(bnbBusdFarm.tokenPriceVsQuote) : BIG_ZERO
  const cakeKubFarm = farms.find((farm) => farm.pid === 1)
  const kubPriceBaht = BIG_ONE.times(kubPrice)
  const farmsWithPrices = farms.map((farm) => {
    const quoteTokenFarm = getFarmFromTokenSymbol(farms, farm.quoteToken.symbol)
    const tokenPriceBusd = getFarmBaseTokenPrice(farm, quoteTokenFarm, kubPriceBaht)
    const quoteTokenPriceBusd = getFarmQuoteTokenPrice(farm, quoteTokenFarm, kubPriceBaht)

    return {
      ...farm,
      tokenPriceBusd: tokenPriceBusd.toJSON(),
      quoteTokenPriceBusd: quoteTokenPriceBusd.toJSON(),
    }
  })

  return farmsWithPrices
}

export default getFarmsPrices
