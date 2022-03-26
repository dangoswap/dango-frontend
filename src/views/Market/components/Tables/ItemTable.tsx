import { useState, useMemo, useCallback, useEffect, Fragment } from 'react'
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
} from '@pancakeswap/uikit'
import { MarketItem } from 'config/constants/market/types'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { CurrencyLogo } from 'views/Info/components/CurrencyLogo'
import { formatAmount } from 'utils/formatInfoNumbers'
import Percent from 'views/Info/components/Percent'
import { useTranslation } from 'contexts/Localization'
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

  grid-template-columns: repeat(2, 1fr) 65px;
`

const LinkWrapper = styled(NextLinkFromReactRouter)`
  text-decoration: none;
  :hover {
    cursor: pointer;
    opacity: 0.7;
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
  return (
    <ResponsiveGrid>
      <Flex alignItems="center">
        <ProfileAvatar src={item.imageUrl} width={48} height={48} />
        <Text ml="10px">{item.name}</Text>
      </Flex>
      <Text textAlign="center"> {item.price}</Text>
      <SellButton item={item}>Sell</SellButton>
    </ResponsiveGrid>
  )
}

const ItemTable: React.FC<{
  itemDatas: MarketItem[] | undefined
}> = ({ itemDatas }) => {
  const { t } = useTranslation()

  if (!itemDatas) {
    return <Skeleton />
  }

  return (
    <TableWrapper>
      <ResponsiveGrid>
        <Text color="secondary" fontSize="12px" bold>
        MorningMoon Vilage Item
        </Text>

        <Text textAlign="center" color="secondary" fontSize="12px" bold>
          Cost (LUMI)
        </Text>
      </ResponsiveGrid>

      <Break />
      {itemDatas.length > 0 ? (
        <>
          {itemDatas.map((data, i) => {
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
