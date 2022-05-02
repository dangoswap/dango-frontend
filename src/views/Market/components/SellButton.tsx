import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Flex, IconButton, useModal, Button } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { MarketItem } from 'config/constants/market/types'
import SellItemsModal from './SellItemsModal/SellItemsModal'

export interface SellButtonProps {
    item: MarketItem
}

const SellButton: React.FC<SellButtonProps> = ({item}) => {
  const { t } = useTranslation()
  const [onPresentSellItemsModal] = useModal(<SellItemsModal item={item}/>)

  const handleClickButton = (event): void => {
    event.stopPropagation()
    onPresentSellItemsModal()
  }

  return (
    <Button disabled={item.totalLumiBalance === "0"} type="button" onClick={handleClickButton}>
        {t('Sell')}
      </Button>
  )
}

export default SellButton
