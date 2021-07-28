// import { ChainId, Token } from '@zeroexchange/sdk';

export type TokenConfig = {
  chainId?: string
  address: string
  decimals: number
  name?: string
  symbol?: string
  imageUri?: string
  resourceId: string
  isNativeWrappedToken?: boolean
  assetBase: string
  disableTransfer?: boolean;
}

export type BridgeConfig = {
  chainId: number
  networkId: number
  name: string
  bridgeAddress: string
  erc20HandlerAddress: string
  rpcUrl: string
  gasLimit?: number
  type: 'Ethereum' | 'Substrate'
  tokens: TokenConfig[]
  nativeTokenSymbol: string
  //This should be the full path to display a tx hash, without the trailing slash, ie. https://etherscan.io/tx
  blockExplorer?: string
  defaultGasPrice?: number
}

export type ChainbridgeConfig = {
  chains: BridgeConfig[]
}

export const crosschainConfig: ChainbridgeConfig = {
  chains: [
    {
      chainId: 1,
      networkId: 1,
      name: 'Ethereum',
      bridgeAddress: '0x278cDd6847ef830c23cac61C17Eab837fEa1C29A',
      erc20HandlerAddress: '0xB8B493600A5b200Ca2c58fFA9dced00694fB3E38',
      rpcUrl: 'https://mainnet.infura.io/v3/8ea75892f7044dd59127696bd2d3b114',
      type: 'Ethereum',
      blockExplorer: 'https://etherscan.io/tx',
      nativeTokenSymbol: 'ETH',
      tokens: [
        {
          address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
          name: 'WETH',
          symbol: 'WETH',
          assetBase: 'ETH',
          decimals: 18,
          resourceId: '0x0000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200'
        },
        {
          address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          name: "USDT",
          symbol: "USDT",
          assetBase: 'USDT',
          decimals: 6,
          resourceId: "0x0000000000000000000000dAC17F958D2ee523a2206206994597C13D831ec700",
        },
        {
          address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
          name: 'USDC',
          symbol: 'USDC',
          assetBase: 'USDC',
          decimals: 6,
          resourceId: '0x0000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4801'
        },
        {
          address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
          name: 'wBTC',
          symbol: 'wBTC',
          assetBase: 'BTC',
          decimals: 8,
          resourceId: '0x00000000000000000000002260fac5e5542a773aa44fbcfedf7c193bc2c59901'
        },
        {
          address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
          name: 'DAI',
          symbol: 'DAI',
          assetBase: 'DAI',
          decimals: 18,
          resourceId: '0x00000000000000000000006b175474e89094c44da98b954eedeac495271d0f01'
        },
        {
          address: '0xF0939011a9bb95c3B791f0cb546377Ed2693a574',
          name: 'ZERO(ETH)',
          symbol: 'ZERO',
          assetBase: 'ZERO',
          decimals: 18,
          resourceId: '0x0000000000000000000000F0939011a9bb95c3B791f0cb546377Ed2693a57401'
        },
        {
          address: '0x743864B0562754F47f91CD400Ac8d4356a8fc720',
          name: 'eAVAX',
          symbol: 'eAVAX',
          assetBase: 'C-AVAX',
          decimals: 18,
          resourceId: '0x0000000000000000000000743864B0562754F47f91CD400Ac8d4356a8fc72001'
        },
        {
          address: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
          name: 'LINK',
          symbol: 'LINK',
          assetBase: 'LINK',
          decimals: 18,
          resourceId: '0x0000000000000000000000514910771AF9Ca656af840dff83E8264EcF986CA01'
        },
        {
          address: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
          name: 'AAVE',
          symbol: 'AAVE',
          assetBase: 'AAVE',
          decimals: 18,
          resourceId: '0x00000000000000000000007Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE901'
        },
        {
          address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
          name: 'UNI',
          symbol: 'UNI',
          assetBase: 'UNI',
          decimals: 18,
          resourceId: '0x00000000000000000000001f9840a85d5aF5bf1D1762F925BDADdC4201F98401'
        },
        {
          address: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
          name: 'SUSHI',
          symbol: 'SUSHI',
          assetBase: 'SUSHI',
          decimals: 18,
          resourceId: '0x00000000000000000000006B3595068778DD592e39A122f4f5a5cF09C90fE201'
        },
        {
          address: '0x111111111117dC0aa78b770fA6A738034120C302',
          name: '1INCH',
          symbol: '1INCH',
          assetBase: '1INCH',
          decimals: 18,
          resourceId: '0x0000000000000000000000011111111117dC0aa78b770fA6A738034120C30201'
        },
        {
          address: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
          name: 'YFI',
          symbol: 'YFI',
          assetBase: 'YFI',
          decimals: 18,
          resourceId: '0x00000000000000000000000bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e01'
        },
        {
          address: '0x823cE9cca0b9eE2BC4C2d764d304691d770DbBe9',
          name: 'Gondola',
          symbol: 'GDL',
          assetBase: 'GDL',
          decimals: 18,
          resourceId: '0x0000000000000000000000823cE9cca0b9eE2BC4C2d764d304691d770DbBe901'
        },
        {
          address: '0x433d86336dB759855A66cCAbe4338313a8A7fc77',
          name: 'INDA',
          symbol: 'INDA',
          assetBase: 'INDA',
          decimals: 2,
          resourceId: '0x0000000000000000000000433d86336dB759855A66cCAbe4338313a8A7fc7701'
        },
        {
          address: '0x0c572544a4Ee47904d54aaA6A970AF96B6f00E1b',
          name: 'Wasder Token',
          symbol: 'WAS',
          assetBase: 'WAS',
          decimals: 18,
          resourceId: '0x00000000000000000000000c572544a4Ee47904d54aaA6A970AF96B6f00E1b01'
        },
        {
          address: '0x1d37986F252d0e349522EA6C3B98Cb935495E63E',
          name: 'ChartEx',
          symbol: 'CHART',
          assetBase: 'CHART',
          decimals: 18,
          resourceId: '0x00000000000000000000001d37986F252d0e349522EA6C3B98Cb935495E63E01'
        },
        {
          address: '0xF268fE3d6909508ddA90DccF2bf69050D19f4CdD',
          name: 'Grow Token',
          symbol: 'GROW',
          assetBase: 'GROW',
          decimals: 18,
          resourceId: '0x0000000000000000000000F268fE3d6909508ddA90DccF2bf69050D19f4CdD01'
        },
        {
          address: '0x0c572544a4Ee47904d54aaA6A970AF96B6f00E1b',
          name: 'Wasder Token',
          symbol: 'WAS',
          assetBase: 'WAS',
          decimals: 18,
          resourceId: '0x00000000000000000000000c572544a4Ee47904d54aaA6A970AF96B6f00E1b01'
        },
      ]
    },
    // {
    //   chainId: 2,
    //   networkId: 43114,
    //   name: 'Avalanche',
    //   bridgeAddress: '0xee8aE1088D02CCDA2CDd0FdA2381DB679d0b122E',
    //   erc20HandlerAddress: '0x40a07f36655A0724557cA53A9E5D1b5018e9Df32',
    //   rpcUrl: 'https://api.avax.network/ext/bc/C/rpc',
    //   type: 'Ethereum',
    //   blockExplorer: 'https://blockscout.com/etc/kotti/tx',
    //   nativeTokenSymbol: 'AVAX',
    //   defaultGasPrice: 225,
    //   tokens: [
    //     {
    //       address: '0xf6F3EEa905ac1da6F6DD37d06810C6Fcb0EF5183',
    //       name: 'zETH',
    //       symbol: 'zETH',
    //       assetBase: 'ETH',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000f6F3EEa905ac1da6F6DD37d06810C6Fcb0EF518301'
    //     },
    //     {
    //       address: "0x650CECaFE61f3f65Edd21eFacCa18Cc905EeF0B7",
    //       name: "zUSDT",
    //       symbol: "zUSDT",
    //       assetBase: 'USDT',
    //       decimals: 6,
    //       resourceId: "0x0000000000000000000000a14d2e53e7578cD69A6B97Bff054F56280A8d2C801",
    //     },
    //     {
    //       address: '0x474Bb79C3e8E65DcC6dF30F9dE68592ed48BBFDb',
    //       name: 'zUSDC',
    //       symbol: 'zUSDC',
    //       assetBase: 'USDC',
    //       decimals: 6,
    //       resourceId: '0x000000000000000000000023729144FEf299FA056BBBe29e2f01e79d7A634b02'
    //     },
    //     {
    //       address: '0xc4f4Ff34A2e2cF5e4c892476BB2D056871125452',
    //       name: 'zBTC',
    //       symbol: 'zBTC',
    //       assetBase: 'BTC',
    //       decimals: 8,
    //       resourceId: '0x00000000000000000000003B8eCf240b4Ea45BD9C02e60cddA1225a49BC6DA02'
    //     },
    //     {
    //       address: '0x12f108E6138d4A9c58511e042399cF8f90D5673f',
    //       name: 'zDAI',
    //       symbol: 'zDAI',
    //       assetBase: 'DAI',
    //       decimals: 18,
    //       resourceId: '0x000000000000000000000012f108E6138d4A9c58511e042399cF8f90D5673f02'
    //     },
    //     {
    //       address: '0x008E26068B3EB40B443d3Ea88c1fF99B789c10F7',
    //       name: 'ZERO',
    //       symbol: 'ZERO',
    //       assetBase: 'ZERO',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000008E26068B3EB40B443d3Ea88c1fF99B789c10F702'
    //     },
    //     {
    //       address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    //       name: 'WAVAX',
    //       symbol: 'WAVAX',
    //       assetBase: 'C-AVAX',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000B31f66AA3C1e785363F0875A1B74E27b85FD66c702'
    //     },
    //     {
    //       address: '0xc770701264aD059DD5700Ff68e85ea7A2CaaeF0B',
    //       name: 'zLINK',
    //       symbol: 'zLINK',
    //       assetBase: 'LINK',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000c770701264aD059DD5700Ff68e85ea7A2CaaeF0B02'
    //     },
    //     {
    //       address: '0xbf5a94cFe186FC22aFd6637243b9822586960825',
    //       name: 'zAAVE',
    //       symbol: 'zAAVE',
    //       assetBase: 'AAVE',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000bf5a94cFe186FC22aFd6637243b982258696082502'
    //     },
    //     {
    //       address: '0xBa9aF11661520129Af69d233E92d69BD40CD90AF',
    //       name: 'zUNI',
    //       symbol: 'zUNI',
    //       assetBase: 'UNI',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000Ba9aF11661520129Af69d233E92d69BD40CD90AF02'
    //     },
    //     {
    //       address: '0xD4feE2e3F88B9138B74a323B40bC63bcc1A1B9eC',
    //       name: 'zSUSHI',
    //       symbol: 'zSUSHI',
    //       assetBase: 'SUSHI',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000D4feE2e3F88B9138B74a323B40bC63bcc1A1B9eC02'
    //     },
    //     {
    //       address: '0x5a0dDfA245c02d1256AfDcDa38aDFE89F34367Ce',
    //       name: 'z1INCH',
    //       symbol: 'z1INCH',
    //       assetBase: '1INCH',
    //       decimals: 18,
    //       resourceId: '0x00000000000000000000005a0dDfA245c02d1256AfDcDa38aDFE89F34367Ce02'
    //     },
    //     {
    //       address: '0xD94f76f8DD5c3832dd798621c0d673bBae9D946b',
    //       name: 'zYFI',
    //       symbol: 'zYFI',
    //       assetBase: 'YFI',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000D94f76f8DD5c3832dd798621c0d673bBae9D946b02'
    //     },
    //     {
    //       address: '0xd606199557c8ab6f4cc70bd03facc96ca576f142',
    //       name: 'Gondola',
    //       symbol: 'GDL',
    //       assetBase: 'GDL',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000D606199557c8Ab6F4Cc70bD03FaCc96ca576f14202'
    //     },
    //     {
    //       address: '0x791FD27ef5ea8deE4746A1b2A1b95b6247f67b7D',
    //       name: 'INDA',
    //       symbol: 'INDA',
    //       assetBase: 'INDA',
    //       decimals: 2,
    //       resourceId: '0x0000000000000000000000791FD27ef5ea8deE4746A1b2A1b95b6247f67b7D02'
    //     },
    //     {
    //       address: '0xD769bDFc0CaEe933dc0a047C7dBad2Ec42CFb3E2',
    //       name: 'ChartEx',
    //       symbol: 'CHART',
    //       assetBase: 'CHART',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000D769bDFc0CaEe933dc0a047C7dBad2Ec42CFb3E202'
    //     },
    //     {
    //       address: '0x5506bD8C8F5D6733E2738496d5C51Ed62934C9f8',
    //       name: 'Grow Token',
    //       symbol: 'GROW',
    //       assetBase: 'GROW',
    //       decimals: 18,
    //       resourceId: '0x00000000000000000000005506bD8C8F5D6733E2738496d5C51Ed62934C9f802'
    //     },
    //     {
    //       address: '0xDE03bB9EFf0804516Be4Bdac5761b7526798aF0F',
    //       name: 'Wasder Token',
    //       symbol: 'WAS',
    //       assetBase: 'WAS',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000DE03bB9EFf0804516Be4Bdac5761b7526798aF0F02'
    //     },
    //   ]
    // },
    // {
    //   chainId: 3,
    //   networkId: 56,
    //   name: 'Smart Chain',
    //   bridgeAddress: '0xF82B6C89A1D3340733eA4f74F9D111b5D7127876',
    //   erc20HandlerAddress: '0xD02408A62ED3708429ccFb04d9dEA302884ab6a7',
    //   rpcUrl: 'https://bsc-dataseed2.binance.org',
    //   type: 'Ethereum',
    //   gasLimit: 6721975,
    //   defaultGasPrice: 12.5,
    //   blockExplorer: 'https://bscscan.com/',
    //   nativeTokenSymbol: 'BNB',
    //   tokens: [
    //     {
    //       address: '0xBF7e0761417F49b3FAFae564C842823f5f79DB15',
    //       name: 'zUSDT',
    //       symbol: 'zUSDT',
    //       assetBase: 'USDT',
    //       decimals: 6,
    //       resourceId: '0x0000000000000000000000BF7e0761417F49b3FAFae564C842823f5f79DB1503'
    //     },
    //     {
    //       address: '0x4022AfEB287052e6e587d39bA99f79cAFC47B570',
    //       name: 'zUSDC',
    //       symbol: 'zUSDC',
    //       assetBase: 'USDC',
    //       decimals: 6,
    //       resourceId: '0x00000000000000000000004022AfEB287052e6e587d39bA99f79cAFC47B57003'
    //     },
    //     {
    //       address: '0x7c815BBc21FED2B97CA163552991A5C30d6a2336',
    //       name: 'zETH',
    //       symbol: 'zETH',
    //       assetBase: 'ETH',
    //       decimals: 18,
    //       resourceId: '0x00000000000000000000007c815BBc21FED2B97CA163552991A5C30d6a233603',
    //     },
    //     {
    //       address: '0xB6D5487b00e53e7009E6560189EB8B8c22e11Bf3',
    //       name: 'zBTC',
    //       symbol: 'zBTC',
    //       assetBase: 'BTC',
    //       decimals: 8,
    //       resourceId: '0x0000000000000000000000B6D5487b00e53e7009E6560189EB8B8c22e11Bf303',
    //     },
    //     {
    //       address: '0x7e7bAFF135c42ed90C0EdAb16eAe48ecEa417018',
    //       name: 'zDAI',
    //       symbol: 'zDAI',
    //       assetBase: 'DAI',
    //       decimals: 18,
    //       resourceId: '0x00000000000000000000007e7bAFF135c42ed90C0EdAb16eAe48ecEa41701803',
    //     },
    //     {
    //       address: '0x1f534d2B1ee2933f1fdF8e4b63A44b2249d77EAf',
    //       name: 'ZERO(BSC)',
    //       symbol: 'ZERO',
    //       assetBase: 'ZERO',
    //       decimals: 18,
    //       resourceId: '0x00000000000000000000001f534d2B1ee2933f1fdF8e4b63A44b2249d77EAf03',
    //     },
    //     {
    //       address: '0xaC532d2FC81a077C9F93Be7ea698E2f1d224Ec04',
    //       name: 'zAVAX',
    //       symbol: 'zAVAX',
    //       assetBase: 'AVAX',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000aC532d2FC81a077C9F93Be7ea698E2f1d224Ec0403',
    //     },
    //     {
    //       address: '0xE1D075E79d17fBE745f575634Fb055c62c39CaF4',
    //       name: 'zLINK',
    //       symbol: 'zLINK',
    //       assetBase: 'LINK',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000E1D075E79d17fBE745f575634Fb055c62c39CaF403',
    //     },
    //     {
    //       address: '0xc69CF0e0d00adbF1ab447340C31E39fcf9Ef6cb5',
    //       name: 'zAAVE',
    //       symbol: 'zAAVE',
    //       assetBase: 'AAVE',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000c69CF0e0d00adbF1ab447340C31E39fcf9Ef6cb503',
    //     },
    //     {
    //       address: '0xA6b4a72a6f8116dab486fB88192450CF3ed4150C',
    //       name: 'zUNI',
    //       symbol: 'zUNI',
    //       assetBase: 'UNI',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000A6b4a72a6f8116dab486fB88192450CF3ed4150C03',
    //     },
    //     {
    //       address: '0x2D6d5bc58adEDa28f62B0aBc3f53F5EAef497FCc',
    //       name: 'zSUSHI',
    //       symbol: 'zSUSHI',
    //       assetBase: 'SUSHI',
    //       decimals: 18,
    //       resourceId: '0x00000000000000000000002D6d5bc58adEDa28f62B0aBc3f53F5EAef497FCc03',
    //     },
    //     {
    //       address: '0xD83FEaB895bDebF9D3E1BE50b7d4d81cf4a0211c',
    //       name: 'z1INCH',
    //       symbol: 'z1INCH',
    //       assetBase: '1INCH',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000D83FEaB895bDebF9D3E1BE50b7d4d81cf4a0211c03',
    //     },
    //     {
    //       address: '0xaaa777E372788F498462B7ed0fAaad7BA264586D',
    //       name: 'zYFI',
    //       symbol: 'zYFI',
    //       assetBase: 'YFI',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000aaa777E372788F498462B7ed0fAaad7BA264586D03',
    //     },
    //     {
    //       address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    //       name: 'BUSD',
    //       symbol: 'BUSD',
    //       assetBase: 'BUSD',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000aaa777E372788F498462B7ed0fAaad7BA264586D03'
    //     },
    //     {
    //       address: '0xd705223747C7AF3386a70abbE586d390A6877687',
    //       name: 'Gondola (GDL)',
    //       symbol: 'GDL',
    //       assetBase: 'GDL',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000d705223747C7AF3386a70abbE586d390A687768703'
    //     },
    //     {
    //       address: '0xC878A79B63A41a831E469AE1A830A765eFd9d468',
    //       name: 'INDA',
    //       symbol: 'INDA',
    //       assetBase: 'INDA',
    //       decimals: 2,
    //       resourceId: '0x0000000000000000000000C878A79B63A41a831E469AE1A830A765eFd9d46803'
    //     },
    //     {
    //       address: '0xc33A42C9D19f944FA12ff46f27B3B85e18a13778',
    //       name: 'ChartEx',
    //       symbol: 'CHART',
    //       assetBase: 'CHART',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000c33A42C9D19f944FA12ff46f27B3B85e18a1377803'
    //     },
    //     {
    //       address: '0x4f491d389A5bF7C56bd1e4d8aF2280fD217C8543',
    //       name: 'Wise Token',
    //       symbol: 'WISB',
    //       assetBase: 'WISB',
    //       decimals: 18,
    //       // resourceId: '0x00000000000000000000004f491d389A5bF7C56bd1e4d8aF2280fD217C854303'
    //       resourceId: "",
    //       disableTransfer: true,
    //     },
    //     {
    //       address: '0x081A4D4e4A0cC74D6a7A61578f86b8C93CC950a0',
    //       name: 'Grow Token',
    //       symbol: 'GROW',
    //       assetBase: 'GROW',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000081A4D4e4A0cC74D6a7A61578f86b8C93CC950a003'
    //     },
    //     {
    //       address: '0x0f236c7EDda9c1e87036dD258bd9D1bcC37EA66C',
    //       name: 'Wasder Token',
    //       symbol: 'WAS',
    //       assetBase: 'WAS',
    //       decimals: 18,
    //       resourceId: '0x00000000000000000000000f236c7EDda9c1e87036dD258bd9D1bcC37EA66C03'
    //     },
    //   ]
    // },
    // {
    //   chainId: 4,
    //   networkId: 128,
    //   name: 'HECO',
    //   bridgeAddress: "0x651A4FD3550426788bA73B68655ad40627226e30",
    //   erc20HandlerAddress: "0x55B2952a406514cB1b1279D42Aa9be9CC8d4ECfd",
    //   rpcUrl: 'https://http-mainnet-node.huobichain.com',
    //   type: 'Ethereum',
    //   gasLimit: 60000,
    //   defaultGasPrice: 2,
    //   blockExplorer: 'https://hecoinfo.com/',
    //   nativeTokenSymbol: 'HT',
    //   tokens: [
    //     {
    //       address: '0xaC021dF3FF6939CFdCA4ce5a3D1b6048CA5aaBF4',
    //       name: 'zUSDC',
    //       symbol: 'zUSDC',
    //       assetBase: 'USDC',
    //       decimals: 6,
    //       resourceId: '0x0000000000000000000000aC021dF3FF6939CFdCA4ce5a3D1b6048CA5aaBF404'
    //     },
    //     {
    //       address: '0x9A9D4653820D079218007d8Ec0a4AEe1e1E1D394',
    //       name: 'zETH',
    //       symbol: 'zETH',
    //       assetBase: 'ETH',
    //       decimals: 18,
    //       resourceId: '0x00000000000000000000009A9D4653820D079218007d8Ec0a4AEe1e1E1D39404'
    //     },
    //     {
    //       address: '0x683844fE2ec704f80bD032D0d94089315Ec58D5b',
    //       name: 'zBTC',
    //       symbol: 'zBTC',
    //       assetBase: 'BTC',
    //       decimals: 8,
    //       resourceId: '0x00000000000000000000008aeb905Eed42Dce79e6e2357AAA0d51FA128800a04'
    //     },
    //     {
    //       address: '0x8aeb905Eed42Dce79e6e2357AAA0d51FA128800a',
    //       name: 'zDAI',
    //       symbol: 'zDAI',
    //       assetBase: 'DAI',
    //       decimals: 18,
    //       resourceId: '0x00000000000000000000008aeb905Eed42Dce79e6e2357AAA0d51FA128800a04'
    //     },
    //     {
    //       address: '0x0E4564692B15Af6526b6910CFd9E1F4B6671CA1A',
    //       name: 'ZERO',
    //       symbol: 'ZERO',
    //       assetBase: 'ZERO',
    //       decimals: 18,
    //       resourceId: '0x00000000000000000000000E4564692B15Af6526b6910CFd9E1F4B6671CA1A04'
    //     },
    //     {
    //       address: '0x96b59499D6067B94ee2D1C558A31fA8dC4E3640d',
    //       name: 'zAVAX',
    //       symbol: 'zAVAX',
    //       assetBase: 'AVAX',
    //       decimals: 18,
    //       resourceId: '0x000000000000000000000096b59499D6067B94ee2D1C558A31fA8dC4E3640d04'
    //     },
    //     {
    //       address: '0x72157E63Bd6F546901C6121CA478061F8756271a',
    //       name: 'zLINK',
    //       symbol: 'zLINK',
    //       assetBase: 'LINK',
    //       decimals: 18,
    //       resourceId: '0x000000000000000000000072157E63Bd6F546901C6121CA478061F8756271a04'
    //     },
    //     {
    //       address: '0xA0F347628657051e28eafCb2713Beb85c44D931F',
    //       name: 'zAAVE',
    //       symbol: 'zAAVE',
    //       assetBase: 'AAVE',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000A0F347628657051e28eafCb2713Beb85c44D931F04'
    //     },
    //     {
    //       address: '0x75286d76389613960d3466399DB15201e037116f',
    //       name: 'zUNI',
    //       symbol: 'zUNI',
    //       assetBase: 'zUNI',
    //       decimals: 18,
    //       resourceId: '0x000000000000000000000075286d76389613960d3466399DB15201e037116f04'
    //     },
    //     {
    //       address: '0x98659e9A7ddc51eE3A2FB386d20B481c77E8C8bf',
    //       name: 'zSUSHI',
    //       symbol: 'zSUSHI',
    //       assetBase: 'SUSHI',
    //       decimals: 18,
    //       resourceId: '0x000000000000000000000098659e9A7ddc51eE3A2FB386d20B481c77E8C8bf04'
    //     },
    //     {
    //       address: '0x5a32a14EF0c756dc016c0EcaA68f65258504B851',
    //       name: 'z1INCH',
    //       symbol: 'z1INCH',
    //       assetBase: '1INCH',
    //       decimals: 18,
    //       resourceId: '0x00000000000000000000005a32a14EF0c756dc016c0EcaA68f65258504B85104'
    //     },
    //     {
    //       address: '0xD4Cc96d31f4a272B34804B121b871a0432b38911',
    //       name: 'zYFI',
    //       symbol: 'zYFI',
    //       assetBase: 'YFI',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000D4Cc96d31f4a272B34804B121b871a0432b3891104'
    //     },
    //     {
    //       address: '0x3D1f2C168F4b6028f422e43755a60F0384b63568',
    //       name: 'zUSDT',
    //       symbol: 'zUSDT',
    //       assetBase: 'USDT',
    //       decimals: 18,
    //       resourceId: '0x00000000000000000000003D1f2C168F4b6028f422e43755a60F0384b6356804'
    //     },
    //     {
    //       address: '0x4E76805F76c13BfaA1D6558596A12086e4bE3E2C',
    //       name: 'INDA',
    //       symbol: 'INDA',
    //       assetBase: 'INDA',
    //       decimals: 2,
    //       resourceId: '0x00000000000000000000004E76805F76c13BfaA1D6558596A12086e4bE3E2C04'
    //     },
    //     {
    //       address: '0x8C2f0dBa074f120Eef8530da5F8a825796c505a4',
    //       name: 'ChartEx',
    //       symbol: 'ChartEx',
    //       assetBase: 'Chart',
    //       decimals: 18,
    //       resourceId: '0x00000000000000000000008C2f0dBa074f120Eef8530da5F8a825796c505a404'
    //     },
    //     {
    //       address: '0x87F86C5870e96a55A29e37f0c11C7620edb7B203',
    //       name: 'GROW',
    //       symbol: 'GROW',
    //       assetBase: 'GROW',
    //       decimals: 18,
    //       resourceId: '0x000000000000000000000087F86C5870e96a55A29e37f0c11C7620edb7B20304'
    //     },
    //     {
    //       address: '0xc9EFDAC4fE5828361b0aE69d1C16670CDa712BDc',
    //       name: 'WAS',
    //       symbol: 'WAS',
    //       assetBase: 'WAS',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000c9EFDAC4fE5828361b0aE69d1C16670CDa712BDc04'
    //     },

    //   ]
    // },
    // {
    //   chainId: 5,
    //   networkId: 137,
    //   name: 'Polygon',
    //   bridgeAddress: "0xF82B6C89A1D3340733eA4f74F9D111b5D7127876",
    //   erc20HandlerAddress: "0xD02408A62ED3708429ccFb04d9dEA302884ab6a7",
    //   rpcUrl: 'https://rpc-mainnet.matic.network',
    //   type: 'Ethereum',
    //   gasLimit: 60000,
    //   defaultGasPrice: 2,
    //   blockExplorer: 'https://polygonscan.com/',
    //   nativeTokenSymbol: 'MATIC',
    //   tokens: [
    //     {
    //       address: '0x404Ab89684d499Dbe864a1B9811fEb9be2fFADA2',
    //       name: 'zUSDT',
    //       symbol: 'zUSDT',
    //       assetBase: 'USDT',
    //       decimals: 6,
    //       resourceId: '0x0000000000000000000000404Ab89684d499Dbe864a1B9811fEb9be2fFADA205'
    //     },
    //     {
    //       address: '0x823cE9cca0b9eE2BC4C2d764d304691d770DbBe9',
    //       name: 'zUSDC',
    //       symbol: 'zUSDC',
    //       assetBase: 'USDC',
    //       decimals: 6,
    //       resourceId: '0x0000000000000000000000823cE9cca0b9eE2BC4C2d764d304691d770DbBe905'
    //     },
    //     {
    //       address: '0x4801D3057109758C3Cc82859Fe28C56928020330',
    //       name: 'zETH',
    //       symbol: 'zETH',
    //       assetBase: 'ETH',
    //       decimals: 18,
    //       resourceId: '0x00000000000000000000004801D3057109758C3Cc82859Fe28C5692802033005',
    //     },
    //     {
    //       address: '0x2FaB07236d5E1F400568E475B21dBc6AdFEd57D5',
    //       name: 'zBTC',
    //       symbol: 'zBTC',
    //       assetBase: 'BTC',
    //       decimals: 8,
    //       resourceId: '0x00000000000000000000002FaB07236d5E1F400568E475B21dBc6AdFEd57D505',
    //     },
    //     {
    //       address: '0x5b75Ff9e5c15Bb94AB166A80dD5398B3B9f50E25',
    //       name: 'zDAI',
    //       symbol: 'zDAI',
    //       assetBase: 'DAI',
    //       decimals: 18,
    //       resourceId: '0x00000000000000000000005b75Ff9e5c15Bb94AB166A80dD5398B3B9f50E2505',
    //     },
    //     {
    //       address: '0xb67176655e7919a27aA34C279157124619aDFd4B',
    //       name: 'ZERO(Matic)',
    //       symbol: 'ZERO',
    //       assetBase: 'ZERO',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000b67176655e7919a27aA34C279157124619aDFd4B05',
    //     },
    //     {
    //       address: '0xEa83FCEe5875c8f09B0a9B999CBbB1CeD26A462B',
    //       name: 'zAVAX',
    //       symbol: 'zAVAX',
    //       assetBase: 'AVAX',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000Ea83FCEe5875c8f09B0a9B999CBbB1CeD26A462B05',
    //     },
    //     {
    //       address: '0x317Edd9783a712Cb412806e6273d7c81C6738D98',
    //       name: 'zLINK',
    //       symbol: 'zLINK',
    //       assetBase: 'LINK',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000317Edd9783a712Cb412806e6273d7c81C6738D9805',
    //     },
    //     {
    //       address: '0x52AbdB3536a3a966056e096F2572B2755df26eac',
    //       name: 'zAAVE',
    //       symbol: 'zAAVE',
    //       assetBase: 'AAVE',
    //       decimals: 18,
    //       resourceId: '0x000000000000000000000052AbdB3536a3a966056e096F2572B2755df26eac05',
    //     },
    //     {
    //       address: '0xba79bf6D52934D3b55FE0c14565A083c74FBD224',
    //       name: 'zUNI',
    //       symbol: 'zUNI',
    //       assetBase: 'UNI',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000ba79bf6D52934D3b55FE0c14565A083c74FBD22405',
    //     },
    //     {
    //       address: '0x3Fc84b2B0F0CFa85A83F5215ec0A56930a49C141',
    //       name: 'zSUSHI',
    //       symbol: 'zSUSHI',
    //       assetBase: 'SUSHI',
    //       decimals: 18,
    //       resourceId: '0x00000000000000000000003Fc84b2B0F0CFa85A83F5215ec0A56930a49C14105',
    //     },
    //     {
    //       address: '0x10B34Bd0d3b4532BE749b39Aae4B01d229e538E3',
    //       name: 'z1INCH',
    //       symbol: 'z1INCH',
    //       assetBase: '1INCH',
    //       decimals: 18,
    //       resourceId: '0x000000000000000000000010B34Bd0d3b4532BE749b39Aae4B01d229e538E305',
    //     },
    //     {
    //       address: '0x7c815BBc21FED2B97CA163552991A5C30d6a2336',
    //       name: 'zYFI',
    //       symbol: 'zYFI',
    //       assetBase: 'YFI',
    //       decimals: 18,
    //       resourceId: '0x00000000000000000000007c815BBc21FED2B97CA163552991A5C30d6a233605',
    //     },
    //     {
    //       address: '0x21d815016bF0a24CA6E169bd1A32C50514aab91F',
    //       name: 'INDA',
    //       symbol: 'INDA',
    //       assetBase: 'INDA',
    //       decimals: 2,
    //       resourceId: '0x000000000000000000000021d815016bF0a24CA6E169bd1A32C50514aab91F05'
    //     },
    //     {
    //       address: '0x083c56d87eAD73D6231C165Ec450C6E28f3399C9',
    //       name: 'ChartEx',
    //       symbol: 'CHART',
    //       assetBase: 'CHART',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000083c56d87eAD73D6231C165Ec450C6E28f3399C905'
    //     },
    //     {
    //       address: '0xDcDC86A38d1ddA13EEB346eeBf34d0148C8197d9',
    //       name: 'Grow Token',
    //       symbol: 'GROW',
    //       assetBase: 'GROW',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000DcDC86A38d1ddA13EEB346eeBf34d0148C8197d905'
    //     },
    //     {
    //       address: '0xfaEF64930CDD15a19B24EA71Efa14d37f2401169',
    //       name: 'Wasder Token',
    //       symbol: 'WAS',
    //       assetBase: 'WAS',
    //       decimals: 18,
    //       resourceId: '0x0000000000000000000000faEF64930CDD15a19B24EA71Efa14d37f240116905'
    //     },
    //     // {
    //     //   address: '0x08193764bd81a742c15125e48f41b1232068c912',
    //     //   name: 'MINT',
    //     //   symbol: 'MINT',
    //     //   assetBase: 'MINT',
    //     //   decimals: 18,
    //     //   resourceId: '0x000000000000000000000008193764bd81a742c15125e48f41b1232068c91205'
    //     // },
    //   ]
    // }


  ]

  // rinkeby - FUJI
  // chains: [
  //   {
  //     chainId: 4,
  //     networkId: 4,
  //     name: "Rinkeby",
  //     bridgeAddress: "0x06E4d0FCd55eacb617dFCd0C5e75D8b005894bD2",
  //     erc20HandlerAddress: "0x754977d76601b473474Ba8FBac0Fa2A20Aa84694",
  //     rpcUrl: "https://rinkeby.infura.io/v3/45174a29359d4b07ade01676259bc47a",
  //     type: "Ethereum",
  //     blockExplorer: "https://ropsten.etherscan.io/tx",
  //     nativeTokenSymbol: "ETH",
  //     tokens: [
  //       {
  //         address: "0x6Cfe8eA9cb32dcf1Cd7188fA68366c099a8FfC7E",
  //         name: "wETH",
  //         symbol: "wETH",
  //         assetBase: 'ETH',
  //         decimals: 18,
  //         resourceId:
  //           "0x00000000000000000000006Cfe8eA9cb32dcf1Cd7188fA68366c099a8FfC7E00",
  //       },
  //       {
  //         address: "0x86d646e76806dcd652a5afa7aaa20d428b76a356",
  //         name: "USDT",
  //         symbol: "USDT",
  //         assetBase: 'USDT',
  //         decimals: 18,
  //         resourceId:
  //           "0x000000000000000000000086D646e76806DCD652a5aFA7AaA20D428B76A35600",
  //       },
  //       {
  //         address: "0xA49992e58b3242852DE6D6c8c5B01e3f16Ec1c0a",
  //         name: "wBTC",
  //         symbol: "wBTC",
  //         assetBase: 'wBTC',
  //         decimals: 18,
  //         resourceId:
  //           "0x0000000000000000000000A49992e58b3242852DE6D6c8c5B01e3f16Ec1c0a00",
  //       },
  //       {
  //         address: "0x790Bdb1d44EcE3e6b45F3D4307C08e4636365D24",
  //         name: "wUSDC",
  //         symbol: "wUSDC",
  //         assetBase: 'wUSDC',
  //         decimals: 18,
  //         resourceId:
  //           "0x0000000000000000000000790Bdb1d44EcE3e6b45F3D4307C08e4636365D2400",
  //       },
  //     ],
  //   },
  //   {
  //     chainId: 5,
  //     networkId: 43113,
  //     name: "Avalanche",
  //     bridgeAddress: "0xeef5d5C87cDD5F1c2ec89AC6c7B86EeB76299603",
  //     erc20HandlerAddress: "0x267d83dD863cbc4E7926CbF776E392a937C65533",
  //     rpcUrl: "https://api.avax-test.network/ext/bc/C/rpc",
  //     type: "Ethereum",
  //     blockExplorer: "https://blockscout.com/etc/kotti/tx",
  //     nativeTokenSymbol: "AVAX",
  //     defaultGasPrice: 225,
  //     tokens: [
  //       {
  //         address: "0xbe113Dc920b8774c3f03195D6b3445F9B7884C2D",
  //         name: "zETH",
  //         symbol: "zETH",
  //         assetBase: 'ETH',
  //         decimals: 18,
  //         resourceId:
  //           "0x0000000000000000000000be113Dc920b8774c3f03195D6b3445F9B7884C2D01",
  //       },
  //       {
  //         address: "0x1569c1edc28F7141Cf5FdE18f27e5E4db6E85a34",
  //         name: "zUSDT",
  //         symbol: "zUSDT",
  //         assetBase: 'USDT',
  //         decimals: 18,
  //         resourceId:
  //           "0x00000000000000000000001569c1edc28F7141Cf5FdE18f27e5E4db6E85a3401",
  //       },
  //       {
  //         address: "0xBdc570Df37814c873C3a9bCF3751E52A36758d2f",
  //         name: "zBTC",
  //         symbol: "zBTC",
  //         assetBase: 'BTC',
  //         decimals: 18,
  //         resourceId:
  //           "0x0000000000000000000000Bdc570Df37814c873C3a9bCF3751E52A36758d2f01",
  //       },
  //       {
  //         address: "0x961b714a7d2c4B263fcB91b26a5CFd6268b874ec",
  //         name: "zUSDC",
  //         symbol: "zUSDC",
  //         assetBase: 'USDC',
  //         decimals: 18,
  //         resourceId:
  //           "0x0000000000000000000000961b714a7d2c4B263fcB91b26a5CFd6268b874ec01",
  //       },
  //     ],
  //   },
  // ],

  // DEVNET
  //   erc20ResourceId:
  //   "0x00000000000000000000000021605f71845f372A9ed84253d2D024B7B10999f4",
  // chains: [
  // {
  //   chainId: 1,
  //   networkId: 5,
  //   name: "Ethereum - A",
  //   bridgeAddress: "0x62877dDCd49aD22f5eDfc6ac108e9a4b5D2bD88B",
  //   erc20HandlerAddress: "0x3167776db165D8eA0f51790CA2bbf44Db5105ADF",
  //   rpcUrl: "http://localhost:8545",
  //   type: "Ethereum",
  //   tokens: [
  //     {
  //       address: "0x21605f71845f372A9ed84253d2D024B7B10999f4",
  //       name: "Test EthA",
  //       symbol: "TESTA",
  //       imageUri: ETHIcon,
  //     },
  //   ],
  // },
  // {
  //   chainId: 2,
  //   networkId: 6,
  //   name: "Ethereum - B",
  //   bridgeAddress: "0x62877dDCd49aD22f5eDfc6ac108e9a4b5D2bD88B",
  //   erc20HandlerAddress: "0x3167776db165D8eA0f51790CA2bbf44Db5105ADF",
  //   rpcUrl: "http://localhost:8546",
  //   type: "Ethereum",
  //   tokens: [
  //     {
  //       address: "0x21605f71845f372A9ed84253d2D024B7B10999f4",
  //       name: "Test EthB",
  //       symbol: "TESTB",
  //       imageUri: ETHIcon,
  //     },
  //   ],
  // },
  // ]
}
