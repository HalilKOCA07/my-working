import React from 'react'
import PurchasesTable from '../components/PurchasesTable'
import { Button, Typography } from '@mui/material'

const Purchases = () => {
  return (
    <div>
      <Typography sx={{fontWeight:"bold", fontSize:18}}>PURCHASES</Typography>
      <Button sx={{backgroundColor:"black", color:"white", m:3}}>New Purchase</Button>
      <PurchasesTable />
    </div>
  )
}

export default Purchases
