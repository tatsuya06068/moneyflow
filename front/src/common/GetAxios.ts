import axios from 'axios'
import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

export const useGetAxios = (sendID:number, sendMehod:string = "GET" ,url:string) => {
     const {user, isAuthenticated} = useAuth0()
    if (isAuthenticated) {
        axios.get(url,  )
    }
}

