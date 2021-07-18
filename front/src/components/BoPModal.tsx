import React, { useState } from 'react'
import '../layouts/App.sass'
import * as Const from '../common/Const'

type Props = {
    show?: boolean;
    title?: string;
    date?: Date;
    totalMoney?: number;
}

const BoPModal: React.FC<Props> = ({show, title, date, totalMoney}) => {
   if(show){ 
        return ( 
            <div id="overlay">
                <form id="content">
                    <label>
                        {Const.TITLE}:
                        <input type="text" name="title" value={title} />
                        {Const.PURCHASE_DATE}
                        <input type="date" name="date" value={String(date)}/>
                        {Const.TOTALMONEY}
                        <input type="text" name="totalMoney" value={totalMoney}/>
                    </label>
                </form>
            </div>
        )
    }else{
        return null;
    }
}
export default BoPModal;