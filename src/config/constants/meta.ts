import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'DangoSwap',
  description:
    '',
  image: '',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/market')) {
    basePath = '/market'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('DangoSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('DangoSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('DangoSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('DangoSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('DangoSwap')}`,
      }
      case '/market':
      return {
        title: `${t('Market')} | ${t('DangoSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('DangoSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('DangoSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('DangoSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('DangoSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('DangoSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('DangoSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('DangoSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('DangoSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('DangoSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('DangoSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('DangoSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('DangoSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('DangoSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('DangoSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('DangoSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('DangoSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('DangoSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('DangoSwap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('DangoSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('DangoSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('DangoSwap')}`,
      }
    default:
      return null
  }
}
