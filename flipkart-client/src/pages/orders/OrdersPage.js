import React from 'react'
import { orderList } from '../../utils/orderData'
import OrderItem from '../../components/orderItem/OrderItem'
import './orders.css'
import { Button, FormControl, OutlinedInput } from '@material-ui/core'

export default function OrdersPage() {
  return (
    <div className='orders-container'>
    <div className='orders-input'>
            <FormControl >
                <OutlinedInput placeholder={"Search your orders here"} style={{width: '80vw'}}/>
            </FormControl>
            <Button  variant="contained" color='primary'>search</Button>
    </div>
        {orderList.map((item)=>{
            return (
                <OrderItem item={item}/>
            )
        })}
    </div>
  )
}
