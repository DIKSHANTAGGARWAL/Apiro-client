import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Homepage() {
    // const products = [
    //     {
    //         name: "p1p",
    //         price: "123",
    //         discount: "234"
    //     },
    //     {
    //         name: "p2",
    //         price: "123",
    //         discount: "234"
    //     },
    //     {
    //         name: "p3",
    //         price: "123",
    //         discount: "234"
    //     },
    //     {
    //         name: "p4",
    //         price: "123",
    //         discount: "234"
    //     },
    //     {
    //         name: "p5",
    //         price: "123",
    //         discount: "234"
    //     },
    //     {
    //         name: "p6",
    //         price: "123",
    //         discount: "234"
    //     },
    //     {
    //         name: "p7",
    //         price: "123",
    //         discount: "234"
    //     },
    //     {
    //         name: "p8",
    //         price: "123",
    //         discount: "234"
    //     },
    // ]

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
        const productId=item.id
        return (
            <div className='home-right-products'>
                <img className='home-right-product' src='https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61qkbI3XPnL._AC_SL1500_.jpg' />
                {/* <Link className='home-right-product' to="/" >Product Details</Link> */}
                <h2 className='home-right-product'>{item.name}</h2>
                <h3 className='home-right-product'>{item.details}</h3>
                <h3 className='home-right-product'>Rs. {item.price}/SET</h3>
                <p className='home-right-product'>({item.discount} margin)</p>
                <h3 className='home-right-product'>{item.colors}</h3>
            </div>
        )
    }

    return (
        <div>
            <br />
            <br />
            <br />
            <div className='home'>

                <div className='home-left'>
                    <h2>Filter</h2>
                    <h3 className='home-left-heading'>Category</h3>
                    <p className='home-left-item'>Lorem Ipsum</p>
                    <p className='home-left-item'>Lorem Ipsum</p>
                    <p className='home-left-item'>Lorem Ipsum</p>
                    <p className='home-left-item'>Lorem Ipsum</p>
                    <br />

                    <h3 className='home-left-heading'>Gender</h3>
                    <p className='home-left-item'>Men's</p>
                    <p className='home-left-item'>Female</p>
                    <br />

                    <h3 className='home-left-heading'>Size</h3>
                    <div className='home-left-items'>
                        <p className='home-left-item'>S</p>
                        <p className='home-left-item'>M</p>
                        <p className='home-left-item'>L</p>
                        <p className='home-left-item'>XL</p>
                    </div>
                    <br />

                    <h3 className='home-left-heading'>Colors</h3>
                    <div className='home-left-items'>
                        <p className='home-left-item'>A</p>
                        <p className='home-left-item'>B</p>
                        <p className='home-left-item'>C</p>
                        <p className='home-left-item'>D</p>
                    </div>
                    <br />

                    <h3 className='home-left-heading'>Price</h3>
                    <div className='home-left-items'>
                        <p className='home-left-item'>A</p>
                    </div>
                </div>

                <div className='home-right'>
                    {
                        products.map(e)
                    }
                </div>
            </div>
        </div>
    )
}

export default Homepage
