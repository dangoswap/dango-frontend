import { useState, useMemo, useCallback, useEffect, Fragment } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import {
  Text,
  Flex,
  Box,
  Skeleton,
  useMatchBreakpoints,
  ArrowBackIcon,
  ArrowForwardIcon,
  ProfileAvatar,
  LinkExternal,
} from '@pancakeswap/uikit'
import { MarketItem } from 'config/constants/market/types'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { CurrencyLogo } from 'views/Info/components/CurrencyLogo'
import { formatAmount } from 'utils/formatInfoNumbers'
import Percent from 'views/Info/components/Percent'
import { useTranslation } from 'contexts/Localization'
import { getBkcScanLink } from 'utils'
import { getAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import useGetTotalLumiBalance from '../../hooks/useGetTotalLumiBalance'
import { ClickableColumnHeader, TableWrapper, PageButtons, Arrow, Break } from './shared'
import SellButton from '../SellButton'

/**
 *  Columns on different layouts
 *  6 = | # | Name | Price | Price Change | Volume 24H | TVL |
 *  5 = | # | Name | Price |              | Volume 24H | TVL |
 *  4 = | # | Name | Price |              | Volume 24H |     |
 *  2 = |   | Name |       |              | Volume 24H |     |
 *  On smallest screen Name is reduced to just symbol
 */
const ResponsiveGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  align-items: center;

  padding: 0 24px;

  grid-template-columns: repeat(3, 1fr) 65px;
`

const ResponsiveLogo = styled(ProfileAvatar)`
  @media screen and (max-width: 670px) {
    width: 26px;
    height: 26px;
  }
`

const TableLoader: React.FC = () => {
  const loadingRow = (
    <ResponsiveGrid>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </ResponsiveGrid>
  )
  return (
    <>
      {loadingRow}
      {loadingRow}
      {loadingRow}
    </>
  )
}

const DataRow: React.FC<{ item: MarketItem }> = ({ item }) => {
  const { isXs, isSm } = useMatchBreakpoints()
  const contractLink = getBkcScanLink(getAddress(item.contractAddress), 'address')
  const tokenLink = getBkcScanLink(getAddress(item.tokenIn), 'address')
  const totalLumiBalance = new BigNumber(item.totalLumiBalance)
  return (
    <ResponsiveGrid>
      <Box>
        <Flex alignItems="center">
          <ResponsiveLogo src={item.imageUrl} width={48} height={48} />
          <Text ml="10px">{item.name}</Text>
        </Flex>

        {/* <Flex> */}
        <LinkExternal href={tokenLink} fontSize="12px" bold={false} mt="10px">
          Token Contract
        </LinkExternal>

        <LinkExternal href={contractLink} fontSize="12px" bold={false} mt="10px">
          Vendor Contract
        </LinkExternal>
        {/* </Flex> */}

        
      </Box>

      <Text textAlign="center"> {item.price}</Text>
      <Text textAlign="center"> {getBalanceNumber(totalLumiBalance)}</Text>
      <SellButton item={item}>Sell</SellButton>
    </ResponsiveGrid>
  )
}

const ItemTable: React.FC<{
  itemDatas: MarketItem[] | undefined
}> = ({ itemDatas }) => {
  const { t } = useTranslation()
  const { items, fetchStatus } = useGetTotalLumiBalance()

  if (!fetchStatus) {
    return <Skeleton />
  }

  return (
    <TableWrapper>
      <ResponsiveGrid>
        <Text color="secondary" fontSize="16px" bold>
        Tokens
        </Text>

        <Text textAlign="center" color="secondary" fontSize="16px" bold>
          Price (LUMI)
        </Text>

        <Text textAlign="center" color="secondary" fontSize="16px" bold>
          Balance (LUMI)
        </Text>
      </ResponsiveGrid>

      <Break />
      {items.length > 0 ? (
        <>
          {items.map((data, i) => {
            if (data) {
              return (
                <Fragment key={data.name}>
                  <DataRow item={data} />
                  <Break />
                </Fragment>
              )
            }
            return null
          })}
        </>
      ) : (
        <>
          <TableLoader />
          <Box />
        </>
      )}
    </TableWrapper>
  )
}

export default ItemTable
