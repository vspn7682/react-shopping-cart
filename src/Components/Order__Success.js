import React, {useContext} from 'react'
import { Context } from '../Context/Context'
import Header from '../Components/Header'
import './Order__Success.css'
import {Link} from 'react-router-dom'

const Order__Success = () => {

    const [{ basket }, dispatch] = useContext(Context)
    console.log(basket)
    return (
        <>
            <Header />
        <div className='success'>
                <h1>THANK-YOU</h1>
                <h2>Your order has been placed.</h2>
                <p>To Track your Order click <Link to='/'>Track Order</Link> or <Link to='/'>Continue Shopping</Link></p>
        </div>
        </>
    )
}

export default Order__Success
