import { MarketItem} from './types'

const marketItems: MarketItem[] = [
    {
        itemId: 0,
        name: 'Tomato',
        contractAddress: {
            96: '0xed1ABbAb02049c4B14336dbf0c3080D626DdaAFB',
            25925: '0x5C615c47edd415D6d71800D94d3d3F370B2F304c',
        },
        tokenIn: { // Tomato
            96: '0x9Ea7E0435B5E50e1DCBB8Eacd63F0dbD3003BdAA',
            25925: '0xed1ABbAb02049c4B14336dbf0c3080D626DdaAFB',
        },
        price: '0.12',
        imageUrl: 'https://dangoswap.finance/images/tokens/0x9Ea7E0435B5E50e1DCBB8Eacd63F0dbD3003BdAA.png',
        isFinished: false
    },
    {
        itemId: 1,
        name: 'Cabbage',
        contractAddress: {
            96: '0xed1ABbAb02049c4B14336dbf0c3080D626DdaAFB',
            25925: '0x5C615c47edd415D6d71800D94d3d3F370B2F304c',
        },
        tokenIn: { // Tomato
            96: '0x9Ea7E0435B5E50e1DCBB8Eacd63F0dbD3003BdAA',
            25925: '0xed1ABbAb02049c4B14336dbf0c3080D626DdaAFB',
        },
        price: '0.12',
        imageUrl: 'https://dangoswap.finance/images/tokens/0xE3bee928D481b40BB6D0F0EDbfD888a7845CF622.png',
        isFinished: false
    },
    {
        itemId: 2,
        name: 'Corn',
        contractAddress: {
            96: '0xed1ABbAb02049c4B14336dbf0c3080D626DdaAFB',
            25925: '0x5C615c47edd415D6d71800D94d3d3F370B2F304c',
        },
        tokenIn: { // Tomato
            96: '0x9Ea7E0435B5E50e1DCBB8Eacd63F0dbD3003BdAA',
            25925: '0xed1ABbAb02049c4B14336dbf0c3080D626DdaAFB',
        },
        price: '0.12',
        imageUrl: 'https://dangoswap.finance/images/tokens/0x4fA393FC50BcDF367145163b920bB37C21e596ec.png',
        isFinished: false
    },
]

export default marketItems
