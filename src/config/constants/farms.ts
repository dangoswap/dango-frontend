import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'
import { CHAIN_ID } from './networks'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  // {
  //   pid: 0,
  //   lpSymbol: 'CAKE',
  //   lpAddresses: {
  //     25925: '0x2f0cA9bFB72b60d9641b8Dd801490a9232596E75',
  //     96: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
  //   },
  //   token: serializedTokens.syrup,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 1,
  //   lpSymbol: 'CAKE-KUB LP',
  //   lpAddresses: {
  //     25925: '0x50a3637f32ca3c4a70af38634edd8b3909728674',
  //     96: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
  //   },
  //   token: serializedTokens.cake,
  //   quoteToken: serializedTokens.wbnb,
  // },
].filter((f) => !!f.lpAddresses[CHAIN_ID])

export default farms
