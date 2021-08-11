import { createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import axios from 'axios'
import {RootState} from '../../rootReducer'
import { BoPItem, BoPState } from '../../models/BoPModel'


export type bopListType = {bops: BoPState}

const bopsAdapter = createEntityAdapter<BoPItem>({
    selectId: (BoPItem) => BoPItem.id,
     sortComparer: (a, b) => {
    if (a.id < b.id) {
      return 1;
    } else {
      return -1;
    }
  },
})

const URL = process.env.REACT_APP_API_URL

//BoPList取得
const GetBoPList = async(accessToken: string)=> {
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

//BoP更新
const UpdateBoP = async(accessToken: string, id: number, title: string , date: string, totalMoney: number) => {
    return axios.put<BoPItem>(URL + '/balance_of_payments/' + id, {
            balanceofpayment: {
                id: id,
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

//削除
const DelBoP = async(accessToken: string , id: number) => {
    return axios.delete<BoPItem>(URL + '/balance_of_payments/' + id, {
        headers: {
           Authorization: "Bearer " + accessToken
        },
       data: {
            id: id
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

//BoP更新   
export const ResponseBoPUpdate = createAsyncThunk<BoPItem, {accessToken: string, id: number, title: string, date: string, totalMoney: number} >(
    'balanceOfPayment/boPUpdate',
    async ({accessToken, id, title, date, totalMoney}, thunkApi)=> {
        const response = await UpdateBoP(accessToken, id, title, date, totalMoney)
         .catch((err) => {
            thunkApi.rejectWithValue(err); 
            console.log(Promise.resolve(err));
            throw err;
         })
         return response.data
    }
);

//削除
export const ResponseBoPDelete = createAsyncThunk<number,{accessToken: string, id: number} >(
    'balanceOfPayment/boPDelete',
    async ({accessToken, id}, thunkApi) => {
        const response = await DelBoP(accessToken, id)
        .catch((err) => {
            thunkApi.rejectWithValue(err)
            console.log(Promise.resolve(err))
            throw err;
        });
        console.log(response.data.id)
        return id;
    },
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
            .addCase(ResponseBoPDelete.fulfilled, (state, action) => {
                bopsAdapter.removeOne(state, action.payload)
            })
            .addCase(ResponseBoPUpdate.fulfilled, (state, action)=> {
                const {id, ...updateData} = action.payload
                bopsAdapter.updateOne(state, {
                    id: id,
                    changes: { ...updateData},
                });
            })
        
    }
    
});

export default BoPSlice.reducer
export const selectBoPList = bopsAdapter.getSelectors<RootState>((state) => state.BoPList)