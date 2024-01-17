import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Cart() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])

    const navigate = useNavigate();
    const paymentPage = () => {
        navigate('/app/payment')
    }

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/api/v1/products/get-product', {
            // headers:{

            // }
            method: "Get"
        });
        // console.log(result)
        result = await result.json();
        console.log(result)

        setProducts(result);
    }

    const [values, setValues] = useState(Array(products.length).fill(''));

    const handleInputChange = (index, event) => {
        const inputValue = event.target.value;

        // Allow only numbers by using a regular expression
        const sanitizedValue = inputValue.replace(/[^0-9]/g, '');

        // Create a new array with the updated value at the specified index
        const newValues = [...values];
        newValues[index] = sanitizedValue;

        setValues(newValues);
    };

    const calculateSum = () => {
        const sum = values.reduce((acc, value) => acc + parseInt(value || 0, 10), 0);
        return sum;
      };

    function e(item, index) {
        if (products.length > 0) {
            if (item.isCart == true) {
                    // var subtotalvalues[index]*item.price
                return (
                    <div className='cart-left-div'>
                        <div className='cart-left-items'>
                            <img className='cart-left-item' src='https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61qkbI3XPnL._AC_SL1500_.jpg' />
                        </div>


                        <div className='cart-left-items'>

                            <h2 className>{item.name} Woven Dress</h2>
                            <h3 className>Rs. {item.price}/SET</h3>
                            <p className>({item.discount}% margin)</p>
                            <p className>PINK{item.description}</p>
                        </div>
                        <div>
                            <input type="text" value={values[index]} onChange={(event) => handleInputChange(index, event)} />
                            <p>Rs. {`${values[index]}`*item.price}</p>
                        </div>
                    </div>
                )
            }
        } else {
            return ("Cart is empty")
        }
    }

    return (
        <div>
            <br />
            <br />
            <br />
            <div className='cart-top'>
                <h1>Cart</h1>
            </div>
            <br />
            <hr />

            <div className='cart-bottom'>

                <div className='cart-left'>
                    {products.map(e)}
                </div>

                <div className='cart-right'>
                    <h3>Order summary</h3>
                    <div className='cart-right-div'>
                        <p>Subtotal</p>
                        <p>{calculateSum()}</p>
                    </div>
                    <div className='cart-right-div'>
                        <p>Shipping</p>
                        <p>Subtotal</p>
                    </div>
                    <div className='cart-right-div'>
                        <p>Tax</p>
                        <p>Subtotal</p>
                    </div>
                    <div className='cart-right-div'>
                        <p>Total</p>
                        <p>Subtotal</p>
                    </div>
                    <div className='cart-right-div'>
                        <button onClick={paymentPage}>Continue to Payment...</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;