import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'



const HomeScreen = ({ match }) => {
    const keyword = match.params.keyword

    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const { loading, error, products, page, pages } = productList

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])

    console.log(cartItems)
    return (
        <>
            <Meta />
            {!keyword ? (
                <div className="carousel">
                    <ProductCarousel />
                </div>

            ) : (
                    <Link to='/' className='btn btn-light'>
                        Powrót do produktów
                    </Link>
                )}
            <h1 className='centerThis' >Wszystkie produkty</h1>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                        <>
                            <div className="centerThis ">

                                <Row>
                                    {products.map((product) => (
                                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                            <Product product={product} />
                                        </Col>
                                    ))}
                                </Row >
                                <Row className="marginTop ">
                                    <Paginate
                                        pages={pages}
                                        page={page}
                                        keyword={keyword ? keyword : ''}
                                    />
                                </Row>

                            </div>
                        </>
                    )}
        </>
    )
}

export default HomeScreen
