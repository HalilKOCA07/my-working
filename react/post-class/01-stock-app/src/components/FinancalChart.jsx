import { AreaChart } from '@tremor/react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useStockRequest from '../services/useStockRequest';

const dataFormatter = (number) =>
    `$${Intl.NumberFormat('us').format(number).toString()}`;
  
const FinancalChart = () => {
    const {sales, purchases} = useSelector((state) => state.stock)
    const {getStock} = useStockRequest()
const salesChart = sales.map((item) => ({
    date:new Date(item.created).toLocaleDateString("tr-TR"),
    amount: item.amount 
}))

useEffect(() => {
    getStock("sales")
    getStock("purchases")
})
  return (
    <div>
          <AreaChart
      className="h-80"
      data={salesChart}
      index="date"
      categories={['Inverters']}
      colors={['rose']}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
/>
    </div>
  )
}

export default FinancalChart
