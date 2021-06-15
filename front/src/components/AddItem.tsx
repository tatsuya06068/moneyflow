import React from 'react'
import '../layouts/App.sass'
import '../common/Const'
import * as Const from '../common/Const';

const AddItem: React.FC = () => {

    return(
        <div className= 'inner'>
            <form>
                <label>
                    {Const.TITLE}:
                    <input type="text"  />
                    {Const.PURCHASE_DATE}
                    <input type = "date" />
                    {Const.TOTALMONEY}
                    <input type = "text" />
                </label>
            </form>
        </div> 
    );
}

export default AddItem;