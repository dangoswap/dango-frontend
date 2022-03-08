import axios from 'axios'
import { KUB_PRICE_API } from 'config/constants/endpoints'
// import { useEffect, useState } from 'react'

export const getKubPrice = async() => {
    const body = {
        module: "stats",
        action: "ethprice"
      }
      const kubPriceAPI = KUB_PRICE_API
      const response = await axios.post(`${kubPriceAPI}`, body)
      
      if (response.data.message === "OK") {
        return Number(response.data.result.ethusd)
      }
      return 0
}