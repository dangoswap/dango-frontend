import React, { useEffect, useState, useMemo, useCallback } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { DEFAULT_TOKEN_DECIMAL, DEFAULT_GAS_LIMIT } from 'config'
import { BIG_TEN, BIG_ZERO, ethersToBigNumber } from 'utils/bigNumber'
import { requiresApproval } from 'utils/requiresApproval'
import { MaxUint256 } from '@ethersproject/constants'
import { ethers } from 'ethers'
import {
  Modal,
  Text,
  Flex,
  HelpIcon,
  BalanceInput,
  useTooltip,
  Skeleton,
  Button,
  ArrowForwardIcon,
} from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useWeb3React } from '@web3-react/core'
import tokens from 'config/constants/tokens'
import { getFullDisplayBalance, getDecimalAmount } from 'utils/formatBalance'
import { useAppDispatch } from 'state'
import { usePriceCakeBusd } from 'state/farms/hooks'
import useTheme from 'hooks/useTheme'
import useTokenBalance, { FetchStatus } from 'hooks/useTokenBalance'
import useApproveConfirmTransaction from 'hooks/useApproveConfirmTransaction'
import { useCake, useERC20, useTokenVendor } from 'hooks/useContract'
import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice'
import useToast from 'hooks/useToast'
import useSwap from 'views/Market/hooks/useSwap'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { ToastDescriptionWithTx } from 'components/Toast'
import ApproveConfirmButtons, { ButtonArrangement } from 'components/ApproveConfirmButtons'
import { MarketItem } from 'config/constants/market/types'
import { getAddress } from 'utils/addressHelpers'
import LogoLoader from '../CurrencyLogo/LogoLoader'

const StyledModal = styled(Modal)`
  min-width: 280px;
  max-width: 320px;
`

const StyledLogo = styled(LogoLoader)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`
export const CurrencyLogo: React.FC<{
  imageUrl?: string
  size?: string
}> = ({ imageUrl, size = '24px', ...rest }) => {
  const src = useMemo(() => {
    if (imageUrl) {
      return imageUrl
    }
    return null
  }, [imageUrl])

  return <StyledLogo size={size} src={src} alt="token logo" {...rest} />
}

interface SellItemsModalProps {
  item?: MarketItem
  onDismiss?: () => void
}

enum SellingStage {
  Sell = 'Sell',
  EDIT = 'Edit',
}

const SellItemsModal: React.FC<SellItemsModalProps> = ({ item, onDismiss}) => {
  const { account } = useWeb3React()
  const { callWithGasPrice } = useCallWithGasPrice()
  const { t } = useTranslation()
  const { theme } = useTheme()
  const [itemsToSell, setItemsToSell] = useState('')
  const [totalCost, setTotalCost] = useState('')
  const tokenVendorContract = useTokenVendor(item.itemId)
  
  const tokenInContract = useERC20(getAddress(item.tokenIn))
  
  const { toastSuccess } = useToast()
  const { balance: userCake, fetchStatus } = useTokenBalance(getAddress(item.tokenIn))

  // const cakePriceBusd = usePriceCakeBusd()
  const dispatch = useAppDispatch()
  const userCakeDisplayBalance = getFullDisplayBalance(userCake, 18, 3)

  useEffect(() => {
    const numberOfItemsToSell= new BigNumber(itemsToSell)
    const total = getDecimalAmount(new BigNumber(item.price)).times(numberOfItemsToSell)
    setTotalCost(total.gt(0) ? getFullDisplayBalance(total) : '0')
  }, [itemsToSell, item.price])

  const handleInputChange = (input: string) => {
    // Force input to integer
    const inputAsInt = parseInt(input, 10)
    setItemsToSell(inputAsInt ? inputAsInt.toString() : '')
  }
  const { isApproving, isApproved, isConfirmed, isConfirming, handleApprove, handleConfirm } =
  useApproveConfirmTransaction({
    onRequiresApproval: async () => {
      return requiresApproval(tokenInContract, account, tokenVendorContract.address)
    },
    onApprove: () => {
      return callWithGasPrice(tokenInContract, 'approve', [tokenVendorContract.address, MaxUint256])
    },
    onApproveSuccess: async ({ receipt }) => {
      toastSuccess(
        t('Contract enabled - you can now sell'),
        <ToastDescriptionWithTx txHash={receipt.transactionHash} />,
      )
    },
    onConfirm: () => {
      return callWithGasPrice(tokenVendorContract, 'swapTokens', [(new BigNumber(itemsToSell).times(DEFAULT_TOKEN_DECIMAL)).toString()])
    },
    onSuccess: async ({ receipt }) => {
      onDismiss?.()
      toastSuccess(t('Success!'), <ToastDescriptionWithTx txHash={receipt.transactionHash} />)
    },
  })

  const disableBuying = false

  return (
    <StyledModal title={t('Sell ')+item.name} onDismiss={onDismiss} headerBackground={theme.colors.gradients.cardHeader}>
      <Flex alignItems="center" justifyContent="space-between" mb="8px">
        <Text color="textSubtle">{t('Sell')}:</Text>
        <Flex alignItems="center" minWidth="70px">
          <Text mr="4px" bold>
            {item.name}
          </Text>
          <CurrencyLogo size="24px" imageUrl={item.imageUrl} />
        </Flex>
      </Flex>
      <BalanceInput
        isWarning={false}
        placeholder="0"
        value={itemsToSell}
        onUserInput={handleInputChange}
        currencyValue={
          `~${itemsToSell ? new BigNumber(item.price).times(new BigNumber(itemsToSell)) : '0.00'} LUMI`
        }
      />
      <Flex alignItems="center" justifyContent="flex-end" mt="4px" mb="12px">
        <Flex justifyContent="flex-end" flexDirection="column">
          {account && (
            <Flex justifyContent="flex-end">
              <Text fontSize="12px" color="textSubtle" mr="4px">
                {item.name} {t('Balance')}:
              </Text>
              <Text fontSize="12px" color="textSubtle">
                  {userCakeDisplayBalance}
                </Text>
            </Flex>
          )}
        </Flex>
      </Flex>
      <Flex flexDirection="column">
        <Flex mb="8px" justifyContent="space-between">
          <Text color="textSubtle" fontSize="14px">
            {t('Price')} (LUMI)
          </Text>
          <Text color="textSubtle" fontSize="14px">
          
          {item.price && getFullDisplayBalance(getDecimalAmount(new BigNumber(item.price)).times(itemsToSell || 0))}  LUMI
          </Text>
        </Flex>
        <Flex borderTop={`1px solid ${theme.colors.cardBorder}`} pt="8px" mb="24px" justifyContent="space-between">
          <Text color="textSubtle" fontSize="16px">
            {t('You receive')}
          </Text>
          <Text fontSize="16px" bold>
            ~{totalCost} LUMI
          </Text>
        </Flex>

        {account ? (
          <>
            <ApproveConfirmButtons
              isApproveDisabled={isApproved}
              isApproving={isApproving}
              isConfirmDisabled={disableBuying}
              isConfirming={isConfirming}
              onApprove={handleApprove}
              onConfirm={handleConfirm}
              buttonArrangement={ButtonArrangement.SEQUENTIAL}
            />
          </>
        ) : (
          <ConnectWalletButton />
        )}

        <Text mt="24px" fontSize="12px" color="textSubtle">
          {t(
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          )}
        </Text>
      </Flex>
    </StyledModal>
  )
}

export default SellItemsModal
