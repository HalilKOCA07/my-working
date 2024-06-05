import {useNavigate} from 'react-router-dom'
import useAxios from './useAxios'
import { fetchFail, fetchStart, loginSuccess, registerSuccess } from '../feature/authSlice'
import {useDispatch} from "react-redux"
import {toastErrorNotify, toastSuccessNotify} from "../helper/ToastNotify"
import axios from 'axios'

const useAuthRequest = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {axiosPublic} = useAxios()

                  //*LOGIN
    const login = async(userData) => {
        dispatch(fetchStart())
        try{
            const {data} = await axiosPublic.post("/auth/login/", userData)
            dispatch(loginSuccess(data))
            navigate("/stock")
            toastSuccessNotify("Login success")
            console.log("login success")
        }catch(error){
            dispatch(fetchFail())
            console.log("login invalid.", error)
            toastErrorNotify("Login is invalid")
        }
    }

                      //*REGISTER
    const register = async(userData) => {
        dispatch(fetchStart())
        try{
            const {data} = await axiosPublic.post("/users/", userData)
            // const {data} = await axios.post("https://10116.fullstack.clarusway.com/users/", userData)
            dispatch(registerSuccess(data))
            navigate("/stock")
            toastSuccessNotify("Register Success")
        }catch(error){
            dispatch(fetchFail())
            toastErrorNotify("Register invalid")
            console.log(error)
        }
    }
  return {login, register}
    }

export default useAuthRequest
