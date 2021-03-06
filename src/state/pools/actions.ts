import { createAction } from '@reduxjs/toolkit'


export type AprObjectProps = {
    APY: number
    name: String
    chain: String
    contract_addr: String
  }

export const setAprAdata = createAction<{aprData: AprObjectProps[]}>('pools/setAprAdata')