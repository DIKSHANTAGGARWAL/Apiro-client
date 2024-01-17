import React from 'react'

function AddProduct() {
    const [name, setName] = React.useState('');
    const [details, setDetails] = React.useState('');
    const [colors, setColors] = React.useState('');
    const [sizes, setSizes] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [quantity, setQuantity] = React.useState('');
    const [discount, setDiscout] = React.useState('');

    const addProduct = async () => {
        let result = await fetch('http://localhost:5000/api/v1/products/add-product', {
            method: 'POST',
            body: JSON.stringify({ name, details, colors, sizes, price, quantity,discount }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        result = await result.json();
        console.log(result)
        alert("Product is added Successfully")
    }

    return (
        <div>
            <p className='addproduct-items'>Add images</p>
            <input className='addproduct-img' type='text' placeholder='Drag and drop image here' />

            <p className='addproduct-items'>Product</p>
            <input className='addproduct-name' type='text' placeholder='Enter product name' value={name}
                onChange={(e) => { setName(e.target.value) }} />

            <p className='addproduct-items'>Product Details</p>
            <input className='addproduct-details' type='text' placeholder='Enter your Product Details' value={details}
                onChange={(e) => { setDetails(e.target.value) }} />

            <p className='addproduct-items'>Colors</p>
            <input className='addproduct-colors' type='text' placeholder='Enter product colors' value={colors}
                onChange={(e) => { setColors(e.target.value) }} />

            <p className='addproduct-items'>Sizes</p>
            <input className='addproduct-sizes' type='text' placeholder='Enter product sizes' value={sizes}
                onChange={(e) => { setSizes(e.target.value) }} />

            <div className='addproduct-last-div'>
                <div className='addproduct-price-div'>
                    <p className='addproduct-items'>Price</p>
                    <input className='addproduct-price' type='text' placeholder='Enter product price' value={price}
                        onChange={(e) => { setPrice(e.target.value) }} />
                </div>

                <div className='addproduct-quantity-div'>
                    <p className='addproduct-items'>Quantity</p>
                    <input className='addproduct-quantity' type='text' placeholder='Enter product name' value={quantity}
                        onChange={(e) => { setQuantity(e.target.value) }} />
                </div>

                <div className='addproduct-discount-div'>
                    <p className='addproduct-items'>Discount</p>
                    <input className='addproduct-discount' type='text' placeholder='Enter discount if any' value={discount}
                        onChange={(e) => { setDiscout(e.target.value) }} />
                </div>
                <button className='addproduct-button' onClick={addProduct}>Upload</button>
            </div>
        </div>
    )
}

export default AddProduct
