import { createSlice, createAsyncThunk, createEntityAdapter, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import {RootState} from '../../rootReducer'
import { BoPItem, BoPState } from '../../models/BoPModel'


export type bopListType = {bops: BoPState}

const bopsAdapter = createEntityAdapter<BoPItem>({
    selectId: (BoPItem) => BoPItem.id
})

const URL = 'http://localhost:3000'
//BoPList取得
const GetBoPList = async(accessToken: string)=> {
    console.log(accessToken);
    return axios.get<BoPState>( URL + '/balance_of_payments', { headers: {
        Authorization: "Bearer " + accessToken
        }, 
    })
}
//BoP登録
const InsBoP = async(accessToken: string, title: string , date: string, totalMoney: string) => {
        return axios.post<BoPItem>( URL + '/balance_of_payments', {  
                balanceofpayment: {
                    title: title,
                    date: date,
                    totalmoney: totalMoney
                }
            },
         {
            headers: {
                Authorization: "Bearer " + accessToken
        },
    })
} 

//追加
export const ResponseBoPIns = createAsyncThunk<BoPItem, {accessToken: string, title: string, date: string, totalMoney: string} > (
    'balanceOfPayment/boPIns',
    async ({accessToken, title, date, totalMoney}, thunkApi) => {
      const response = await InsBoP(accessToken, title, date, totalMoney)
      .catch((err) => {
          thunkApi.rejectWithValue(err);
          console.log(Promise.resolve(err));
          throw err;
      })
      return response.data;
    } 
);

//BoP一覧取得   
export const ResponseBoPList = createAsyncThunk<BoPState, {accessToken: string} >(
    'balanceOfPayment/boPList',
    async ({accessToken}, thunkApi)=> {
        const response = await GetBoPList(accessToken)
         .catch((err) => {
            thunkApi.rejectWithValue(err); 
            console.log(Promise.resolve(err));
            throw err;
         })
         return response.data
    }
);

export const BoPSlice = createSlice({
    name: 'balanceOfPayment',
    initialState: bopsAdapter.getInitialState({
        loading: 'idle'
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder 
            .addCase(ResponseBoPList.fulfilled, (state, action) => {
                bopsAdapter.setAll(state, action.payload);
            })
            .addCase(ResponseBoPIns.fulfilled, (state, action) =>{
                bopsAdapter.addOne(state, action.payload);
            })
        
    }
    
});

export default BoPSlice.reducer
export const selectBoPList = bopsAdapter.getSelectors<RootState>((state) => state.BoPList)