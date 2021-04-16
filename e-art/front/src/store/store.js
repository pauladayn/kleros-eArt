import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import nftsReducer from './nfts'

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: { 
        nfts: nftsReducer, 
    }
})

export default store
