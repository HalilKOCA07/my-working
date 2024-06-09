import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFail, fetchStart } from '../feature/authSlice'
import { toastWarnNotify, toastSuccessNotify, toastErrorNotify } from '../helper/ToastNotify'
import useAxios from './useAxios'
import { useNavigate } from 'react-router-dom'
import { getStockSuccess } from '../feature/stockSlice'
import axios from 'axios'

const useStockRequest = () => {
    const dispatch = useDispatch()
    const {axiosToken} = useAxios()
    const {token} = useSelector((state) => state.stock)

    const getStock = async(path = "firms") => {
        dispatch(fetchStart())
        try{
            const {data} = await axiosToken(`/${path}`)
            const stockData = data.data
            dispatch(getStockSuccess({path, stockData}))
        }catch(error){
            toastErrorNotify(`${path} couldn't be received`)
            dispatch(fetchFail())
        } 
    }

  return {getStock}
}

export default useStockRequest
