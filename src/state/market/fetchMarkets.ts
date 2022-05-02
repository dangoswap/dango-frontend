import BigNumber from 'bignumber.js'
import multicall from 'utils/multicall'
import erc20ABI from 'config/abi/erc20.json'
import { getAddress } from 'utils/addressHelpers'
import marketItems from 'config/constants/market/index'
import tokens from 'config/constants/tokens'

const marketLumiBalanceOf = marketItems.map((item) => {
  return {
    address: tokens.lumi.address,
    name: 'balanceOf',
    params: [getAddress(item.contractAddress)],
  }
})

export const fetchMarketLumiTotalBalance = async () => {
  const poolsTotalBalance= await multicall(erc20ABI, marketLumiBalanceOf)
  return marketItems.map((item, index) => {
    // eslint-disable-next-line no-param-reassign
    item.totalLumiBalance = new BigNumber(poolsTotalBalance[index]).toJSON() ?? "0"
    return { ...item }
  })
}
