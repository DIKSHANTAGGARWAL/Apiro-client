import React from 'react'
import { useNavigate } from 'react-router-dom';

function Nav() {

    
    const navigate = useNavigate();
    const cartPage = () => {
        navigate('/app/cart')
    }

    return (
        <div className='nav'>
            <div className='nav-left'>
                <h2 className='nav-left-content'>Apiro</h2>
            </div>

            <div className='nav-right'>
                <div className='nav-right-contents nav-right-contents-left'>
                    <h4 className='nav-right-content'>Shop</h4>
                    <h4 className='nav-right-content'>My orders</h4>
                    <h4 className='nav-right-content'>Track orders</h4>
                    <h4 className='nav-right-content'>Managing Payments</h4>
                    <h4 className='nav-right-content'>Wishlist</h4>
                    <h4 className='nav-right-content'>Profile</h4>
                </div>

                <div className='nav-righ nav-right-contents-right'>
                    <button className='nav-right-content-cart' onClick={cartPage}>Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Nav
