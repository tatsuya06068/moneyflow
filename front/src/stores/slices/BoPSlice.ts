import { createSlice, createAsyncThunk, bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { BoPState } from '../../models/BoPModel'
import useGetToken from '../../common/useGetToken'
import { useAuth0 } from '@auth0/auth0-react' 
import { promises } from 'dns'
    //let token: any;
    type bopListType = BoPState

    const initialState: bopListType = {
        BoPItems: [],
    };

export const responsBoP = (type: number, aaccesstoken: any) =>{
//    token = aaccesstoken;
    switch (type){
        case 1:
           // BoPList();
    }

}

const GetBoPList = async(accessToken: string)=> {
    console.log(accessToken);
    return axios.get("http://localhost:3000/api/private", { headers: {
        Authorization: "Bearer " + accessToken
        }, 
    })
}

//BoP一覧取得   
export const BoPList = createAsyncThunk<bopListType, {accessToken: string} >(
    'balanceOfPayment/boPList',
    async ({accessToken},): Promise<bopListType>=> {
        return GetBoPList(accessToken)
         .then((res) => {
            return {balanceOfPayment: res}
         })
         .catch((err) => {
            console.log(err);
            return err;
         });
        
    }
);

export const BoPSlice = createSlice({
    name: 'balanceOfPayment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(BoPList.fulfilled, (state, action) => {
            state.BoPItems = action.payload.BoPItems
            })
    }
});

export const {
    
} = BoPSlice.actions

export default BoPSlice
