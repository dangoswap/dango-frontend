import React from 'react'
import {
  Heading,
  useMatchBreakpoints,
} from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/Layout/Page'
import PageHeader from 'components/PageHeader'
import marketItems from 'config/constants/market/index'
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
