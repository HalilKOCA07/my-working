import React from 'react'
import useAxios from './useAxios'
import { fetchStart } from '../feature/authSlice'
import {useDispatch} from "react-redux"

const useAuthRequest = () => {
    const dispatch = useDispatch()
    const {axiosPublic} = useAxios()

    const login = async() => {
        dispatch(fetchStart())

        // try{
        //     const 
        }
  return {login}
    }



export default useAuthRequest
