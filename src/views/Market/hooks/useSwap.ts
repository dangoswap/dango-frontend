import { useCallback } from 'react'
import BigNumber from 'bignumber.js'
import { DEFAULT_TOKEN_DECIMAL, DEFAULT_GAS_LIMIT } from 'config'
import { BIG_TEN } from 'utils/bigNumber'
import { useTokenVendor } from 'hooks/useContract'
import { useWeb3React } from '@web3-react/core'
import getGasPrice from 'utils/getGasPrice'

const options = {
  gasLimit: DEFAULT_GAS_LIMIT,
}

const swap = async (tokenVendorContract, amount, from, to, decimals = 18) => {
    const gasPrice = getGasPrice()
    return tokenVendorContract.swapTokens(new BigNumber(amount).times(BIG_TEN.pow(decimals)).toString(), from, to, {
      ...options,
      gasPrice,
    })
  } 

const useSwap = (itemId: number) => {
  const tokenVendorContract = useTokenVendor(itemId)
  const { account } = useWeb3React()

  const handleSwap = useCallback(
    async (amount: string, decimals: number) => {
        return swap(tokenVendorContract, amount, account, account)
    },
    [account, tokenVendorContract],
  )

  return { onStake: handleSwap }
}

export default useSwap
