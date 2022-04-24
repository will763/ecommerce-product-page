import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from './items.reducer'

 export default configureStore({
  reducer: {
    items :  itemsReducer
  },
})