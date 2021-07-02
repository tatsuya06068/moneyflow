import { combineReducers } from '@reduxjs/toolkit'
import BoPSlice from './stores/slices/BoPSlice'
 
const rootReducer = combineReducers({
    BoPList: BoPSlice.reducer
})
 
export type RootState = ReturnType<typeof rootReducer>
 
export default rootReducer