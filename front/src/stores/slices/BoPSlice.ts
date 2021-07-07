import { createSlice, createAsyncThunk, createEntityAdapter, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { BoPState } from '../../models/BoPModel'


    type bopListType = BoPState

    const initialState: bopListType = {
        BoPItems: [],
    };

//BoPList取得
const GetBoPList = async(accessToken: string)=> {
    console.log(accessToken);
    return axios.get("http://localhost:3000/balance_of_payments", { headers: {
        Authorization: "Bearer " + accessToken
        }, 
    })
}
//BoP登録
const InsBoP = async(accessToken: string, title: string , date: string, totalMoney: string) => {
        return await axios.post("http://localhost:3000/balance_of_payments", {  
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

export const ResponseBoPIns = createAsyncThunk<bopListType, {accessToken: string, title: string, date: string, totalMoney: string} > (
    'balanceOfPayment/boPIns',
    async ({accessToken, title, date, totalMoney},): Promise<bopListType> => {
      return await InsBoP(accessToken, title, date, totalMoney)
      .then((res)=>{
          console.log(res)
          return res
      })
      .catch((err) => {
          console.log(Promise.resolve(err));
          return err;
      });
    } 
);

//BoP一覧取得   
export const ResponseBoPList = createAsyncThunk<bopListType, {accessToken: string} >(
    'balanceOfPayment/boPList',
    async ({accessToken},): Promise<bopListType>=> {
        return GetBoPList(accessToken)
         .then((res) => {
             console.log(res)
            return {balanceOfPayment: res}
         })
         .catch((err) => {
            console.log(Promise.resolve(err));
            return err;
         });
    }
);

export const BoPSlice = createSlice({
    name: 'balanceOfPayment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(ResponseBoPList.fulfilled, (state, action) => {
                state.BoPItems = action.payload.BoPItems
            })
            .addCase(ResponseBoPIns.fulfilled, (state, action) =>{
                state.BoPItems = action.payload.BoPItems
            })
        
    }
    
});

export const {
    
} = BoPSlice.actions

export default BoPSlice
