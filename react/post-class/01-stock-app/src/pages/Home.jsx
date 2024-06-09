import React, { useEffect } from 'react'
import FinancalIndicator from '../components/FinancalIndicator'
import useStockRequest from '../services/useStockRequest'
import FinancalChart from '../components/FinancalChart'

const Home = () => {

  const {getStock} = useStockRequest()

  useEffect(() => {
    getStock("sales")
    getStock("purchases")
},[])
  return (
    <div>
      <FinancalIndicator />
      <FinancalChart />
    </div>
  )
}

export default Home
