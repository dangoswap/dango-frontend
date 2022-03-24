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
  Button
} from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/Layout/Page'
import PageHeader from 'components/PageHeader'
import marketItems from 'config/constants/market/index'
import { AutoRow } from 'components/Layout/Row'
import { marketBaseUrl } from './constants'
import SellButton from './components/SellButton'

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
        <Card>
          <Table>
            <thead>
              <tr>
                <Th textAlign="left">{t('ITEM')}</Th>
                <Th textAlign="left">
                      {t('Cost (LUMI)')}
                    </Th>
                    <Th textAlign="left"/>
                     
              </tr>
            </thead>
            <tbody>
            {marketItems.map((item) => {
                return (
                  <tr key={item.name}>
                    <Td>
                       <Flex alignItems="center">
                       <ProfileAvatar src={item.imageUrl} width={48} height={48} mr="16px" />
                          {item.name}
                        </Flex>
                    </Td>
                    <Td>
                      <Flex alignItems="center">
                        {item.price}
                      </Flex>
                    </Td>
                    <Td>
                    <SellButton item={item}>
                        {t('Sell')}
                    </SellButton>
                    </Td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </Card>
      </Page>
    </>
  )
}

export default Market
