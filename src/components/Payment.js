import React, { useEffect, useState } from 'react'

function Payment() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])

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

    function e(item, index) {
        if (products.length > 0) {
            if (item.isCart == true) {
                return (
                    <div className='payment-left-div'>
                        {item.name}
                        <div>
                            <div>
                                <p>Pay now</p>
                                <p>Pay 30-days later</p>
                                <p>Pay 60-days later</p>
                                <p>Pay 90-days later</p>
                            </div>

                            <div>

                            </div>

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
            <h1>Payment</h1>
            <hr />
            <div className='payment'>
                <div className='payment-left'>
                    <h3>Choose your payment method,pay early to save more</h3>
                    {
                        products.map(e)
                    }
                </div>
                <div className='payment-right'>
                    <h2>Order summary</h2>
                </div>
            </div>
        </div>
    )
}

export default Payment
