import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {
  Table,
  Th,
  Td,
  Card,
  Flex,
  BnbUsdtPairTokenIcon,
  Heading,
  useMatchBreakpoints,
  ProfileAvatar,
  ArrowBackIcon,
  Text,
  ArrowForwardIcon,
  useModal,
  Button,
} from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/Layout/Page'
import PageHeader from 'components/PageHeader'
import marketItems from 'config/constants/market/index'
import { AutoRow } from 'components/Layout/Row'
import { marketBaseUrl } from './constants'
import SellButton from './components/SellButton'
import ItemTable from './components/Tables/ItemTable'

const Market = () => {
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()

  return (
    <>
      <PageHeader>
        <Heading as="h1" scale="xxl" color="secondary">
          {t('Market')}
        </Heading>
      </PageHeader>
      <Page>
        <Heading scale="lg" mt="40px" mb="16px" ml="15px">
          {t('Morning Moon Village')}
        </Heading>
        <ItemTable itemDatas={marketItems} />
      </Page>
    </>
  )
}

export default Market
