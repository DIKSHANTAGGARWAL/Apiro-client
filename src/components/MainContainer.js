import React from 'react'
import Nav from './Nav'
import './styles.css'
import Homepage from './Homepage'
import Cart from './Cart'
import Payment from './Payment'
import AddProduct from './AddProduct'
import Signup from './Signup'
import { Outlet } from 'react-router-dom'

function MainContainer() {
  return (
    <div>
      {/* <Signup/> */}
      <Nav/>
      <Outlet/>
      {/* <Homepage/> */}
      {/* <Cart/> */}
      {/* {<Payment/>} */}
      {/* {<AddProduct/>} */}
    </div>
  )
}

export default MainContainer
