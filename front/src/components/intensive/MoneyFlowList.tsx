import React from 'react'
import '../../layouts/App.sass'
import AddItem from '../AddItem'

const MoneyFlowList : React.FC = () => {
    return(
        <div>
            <h1>一覧</h1>
            <AddItem />
        </div>
    )
}
export default MoneyFlowList;