import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import Rating from './Rating'


import { addToCart } from '../actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'

const Product = ({ history, product, match }) => {
    console.log("To są id produktów")
    const productId = product._id
    console.log(productId)

    // const [qty, setQty] = useState(1)

    // const addToCartHandler = () => {
    //     history.push(`/cart/${match.params.id}?qty=${qty}`)
    // }
    // cg coś nie działa mi ten sposób.

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

   



    const alreadyInCart = cartItems.indexOf(cartItems.find(item => item.product === productId))
    console.log(alreadyInCart)




    const dispatch = useDispatch()

    const addToCartHandler = () => {
        dispatch(addToCart(productId, 1
        ))
        console.log('kliknięto')


    }
    const cartButtons = document.querySelectorAll('.cart-button');

    cartButtons.forEach(button => {
        button.addEventListener('click', cartClick);
    });

    function cartClick() {
        let button = this;
        button.classList.add('clicked');
    }





    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' className="productImage" />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as='div'>
                    <Rating
                        value={product.rating}
                        text={`${product.numReviews} ocen.`}
                    />
                </Card.Text>

                <Card.Text as='h3'>{product.price} zł</Card.Text>
                {/* <Button
                   
                    className='btn-block'
                    type='button'
                    disabled={product.countInStock === 0}
                >
                    Dodaj
                </Button> */}

                {product.countInStock === 0 ? (
                    <button className="cart-button stockZero">
                        <span >
                            Brak na magazynie</span>
                    </button>
                )
                    : alreadyInCart >= 0 ? (
                        <button className="cart-buttonInCart"
                            disabled >
                            <span>W koszyku</span>
                        </button>
                    ) : (
                            <button className="cart-button"
                                onClick={addToCartHandler}
                                disabled={product.countInStock === 0}
                            >

                                <span className="add-to-cart">
                                    Dodaj do koszyka</span>

                                <span className="added">W koszyku</span>
                                <i className="fas fa-shopping-cart"></i>
                                <i className="fas fa-box"></i>
                            </button>
                        )
                }



            </Card.Body>
        </Card>
    )
}

export default Product
