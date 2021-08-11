import React from 'react'
import '../../layouts/App.sass'
import AddItem from '../AddItem'
import BoPItem from '../BoPItem'
import {useSelector} from 'react-redux'
import { selectBoPList } from '../../stores/slices/BoPSlice'
import GetBoPList from '../../common/GetBoPList'
import {Grid} from '@material-ui/core'


const MoneyFlowList : React.FC = () => {
    
    //BoP一覧取得
    GetBoPList();

    const items = useSelector(selectBoPList.selectAll)
    return(
        <div>
            <Grid container justify="center">
                <AddItem />
                {
                    items.length <= 0 ? '登録された収支はありません。' :
                        items.map(item => (
                            <BoPItem key={item.id} bop={item} />
                        ))
                }
            </Grid>
        </div>
    )
}
export default MoneyFlowList;