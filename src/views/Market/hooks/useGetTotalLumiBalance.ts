import { useState, useEffect } from 'react'
import { useAppDispatch } from 'state'
import { fetchMarketLumiTotalBalance } from 'state/market/fetchMarkets'
import { MarketItem } from 'config/constants/market/types'
import { useWeb3React } from '@web3-react/core'

enum FetchStatus {
    NOT_FETCHED = 'not-fetched',
    FETCHING = 'fetching',
    SUCCESS = 'success',
    FAILED = 'failed',
  }
  
  const useGetTotalLumiBalance = () => {
    const { account } = useWeb3React()
    const dispatch = useAppDispatch()
    const [fetchStatus, setFetchStatus] = useState(FetchStatus.NOT_FETCHED)
    const [items, setItems] = useState<MarketItem[]>([])
    
    useEffect(() => {
        setFetchStatus(FetchStatus.NOT_FETCHED)
      }, [account])

    useEffect(() => {
      const fetchMarketsData = async () => {
        setFetchStatus(FetchStatus.FETCHING)
        try {
            const data = await fetchMarketLumiTotalBalance()
            setItems(data)
          setFetchStatus(FetchStatus.SUCCESS)
        } catch (e) {
          console.error(e)
          setFetchStatus(FetchStatus.FAILED)
        }
      }
  
      if (fetchStatus === FetchStatus.NOT_FETCHED) {
        fetchMarketsData()
      }
    }, [dispatch, setFetchStatus, fetchStatus, items])
  
    return { items, fetchStatus }
  }
  

export default useGetTotalLumiBalance
