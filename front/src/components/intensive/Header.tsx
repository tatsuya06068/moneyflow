import React from 'react'
import '../../layouts/App.sass'
import Login from '../LoginBtn'
import Logout from '../LogoutBtn'

function Header(props: any){
    return(
        <div className='inner'>
            <Login />
            <Logout />
        </div>
    )
}
export default Header;