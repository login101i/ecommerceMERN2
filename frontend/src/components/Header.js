import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown, Col } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

const Header = () => {
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
        console.log("wylogowano")
    }


    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect >
                <Container className="mr-auto">
                    <LinkContainer to='/' className="brand">
                        <Navbar.Brand>MkruShop</Navbar.Brand>
                    </LinkContainer>
                    <Route render={({ history }) => <SearchBox className="search " history={history} />} />




                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>

                        <Nav className="ml-auto">
                            <LinkContainer to='/cart'>
                                <Nav.Link >
                                    <i className='fas fa-shopping-cart cartIcon' style={{ color: "white" }}>
                                        <div className="itemsInCart">
                                            {cartItems.length}
                                        </div>
                                    </i> Koszyk
                </Nav.Link>
                            </LinkContainer>
                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profil</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>
                                        Wyloguj się
                  </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                    <LinkContainer to='/login'>
                                        <Nav.Link>
                                            <i className='fas fa-user' style={{ color: "white" }}></i> Zaloguj się
                  </Nav.Link>
                                    </LinkContainer>
                                )}


                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenu'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Użytkownicy</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Produkty</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Zamówienia</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            )}


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
