import React,{useState, createContext} from 'react'
import '../../layouts/App.sass'
import AddItem from '../AddItem'
import BoPItem from '../BoPItem'
import {useSelector, useDispatch} from 'react-redux'
import { selectBoPList } from '../../stores/slices/BoPSlice'
import GetBoPList from '../../common/GetBoPList'
import BoPModal from '../BoPModal'


const MoneyFlowList : React.FC = () => {
    
    //BoP一覧取得
    GetBoPList();

    const items = useSelector(selectBoPList.selectAll)
    return(
        <div>
            <h1>一覧</h1>
            <AddItem />
            {
                items.length <= 0 ? '登録された収支はありません。' :
                <ul>
                    { items.map(item => (
                        <BoPItem key={item.id} bop={item} />
                    ))}
    
                </ul>
            }
        </div>
    )
}
export default MoneyFlowList;