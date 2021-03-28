import React, { useContext } from 'react'
import products from '../Data'
import './Products.css'
import starsFilled from '../img/starsFilled.svg'
import { Context } from '../Context/Context'
import { useAlert } from 'react-alert'


const Products = () => {
    const alert = useAlert()
    const [{ basket }, dispatch] = useContext(Context)
    console.log(basket)

    const addtoCart = (id) => {
        const newProduct = products.find((product) => product.id === id)
        const index = basket.findIndex((item) => item.id === id)
        console.log(index)
        if (index >= 0) {
            alert.show('Item already exists in cart')
        } else {
            dispatch({
                type: 'ADD_TO_CART',
                item: newProduct
            })
        }

    }

    return (
        <div className='products'>
            <div className="products__wrapper">
                {products.map((product) => (
                    <div className="product" key={product.id}>
                        <img src={product.img} alt="" />
                        <h1 className='product__title'>{product.title}</h1>
                        <p className='stars'>
                            {Array(product.stars).fill().map((_, index) => (
                                <img key={index} src={starsFilled} alt="" />
                            ))}
                        </p>
                        <h3 className='product__price'>Rs. {product.price}</h3>
                        <button onClick={() => addtoCart(product.id)} className='add'>Add to Cart</button>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Products
