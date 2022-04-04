import { MarketItem} from './types'

const marketItems: MarketItem[] = [
    {
        itemId: 0,
        name: 'Tomato',
        contractAddress: {
            56: '0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07',
            25925: '0x5C615c47edd415D6d71800D94d3d3F370B2F304c',
        },
        price: '0.12',
        imageUrl: 'https://exchange.diamon.finance/images/coins/0x9Ea7E0435B5E50e1DCBB8Eacd63F0dbD3003BdAA.png',
        isFinished: false
    },
    {
        itemId: 1,
        name: 'Cabbage',
        contractAddress: {
            56: '0x0a8901b0E25DEb55A87524f0cC164E9644020EBA',
            25925: '0x5C615c47edd415D6d71800D94d3d3F370B2F304c',
        },
        price: '0.12',
        imageUrl: 'https://exchange.diamon.finance/images/coins/0xE3bee928D481b40BB6D0F0EDbfD888a7845CF622.png',
        isFinished: false
    },
    {
        itemId: 2,
        name: 'Corn',
        contractAddress: {
            56: '0x4fA393FC50BcDF367145163b920bB37C21e596ec',
            25925: '0x5C615c47edd415D6d71800D94d3d3F370B2F304c',
        },
        price: '0.12',
        imageUrl: 'https://exchange.diamon.finance/images/coins/0x4fA393FC50BcDF367145163b920bB37C21e596ec.png',
        isFinished: false
    },
]

export default marketItems
