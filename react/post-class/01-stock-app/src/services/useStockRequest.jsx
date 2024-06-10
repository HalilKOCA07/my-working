import { useDispatch, useSelector } from 'react-redux'
import { fetchFail, fetchStart } from '../feature/authSlice'
import { toastSuccessNotify, toastErrorNotify } from '../helper/ToastNotify'
import useAxios from './useAxios'
import { getStockSuccess } from '../feature/stockSlice'


const useStockRequest = () => {
    const dispatch = useDispatch()
    const {axiosToken} = useAxios()

    const getStock = async(path = "firms") => {
        dispatch(fetchStart())
        try{
            const {data} = await axiosToken(`/${path}`)
            const stockData = data.data
            dispatch(getStockSuccess({path, stockData}))
            console.log(stockData)
        }catch(error){
            toastErrorNotify(`${path} couldn't be received`)
            dispatch(fetchFail())
        } 
    }
    // const getStock = async(path = "firms") => {
    //     dispatch(fetchStart())
    //     try{
    //         const {data} = await axios.get(`/${path}`, {headers: {Authorization: `Token 83e17388699e570bc670bcfb8c685f5f95896b979fd2724efeb8204fb4175ad3`}})
    //         const stockData = data.data
    //         dispatch(getStockSuccess({path, stockData}))
    //         console.log(stockData)
    //     }catch(error){
    //         toastErrorNotify(`${path} couldn't be received`)
    //         dispatch(fetchFail())
    //         console.error('API Error:', error.response ? error.response.data : error.message);
    //         toast.error(`Error fetching ${path}: ${error.message}`);
    //         dispatch(fetchFail());
    //     } 
    // }

    const deleteStock = async(path = "firms", id) => {
        dispatch(fetchStart())
        try{
            await axiosToken(`/${path}/${id}`)
            toastSuccessNotify("purchases succsesfully is deleted")
            getStock(path)
        }catch(error){
            toastErrorNotify(`${path} couldn't be received`)
            dispatch(fetchFail())
        } 
    }

  return {getStock, deleteStock}
}

export default useStockRequest
