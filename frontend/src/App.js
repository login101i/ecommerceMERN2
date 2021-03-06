import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'


import { Container } from 'react-bootstrap'


function App() {
  return (

    <Router>
      <div className="mainContainer">
        <Header />
        <main >
          <Container className="mainContainer">
            <Route path='/login' exact component={LoginScreen} />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/profile' component={ProfileScreen} />
            <Route path='/shipping' exact component={ShippingScreen} />
            <Route path='/payment' exact component={PaymentScreen} />
            <Route path='/placeorder' exact component={PlaceOrderScreen} />
            <Route path='/order/:id' exact component={OrderScreen} />
            <Route path='/admin/userlist' component={UserListScreen} />
            <Route path='/admin/user/:id/edit' component={UserEditScreen} />
            <Route path='/admin/productlist' exact component={ProductListScreen} />
            <Route path='/admin/productlist/:pageNumber' exact component={ProductListScreen} />

            <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
            <Route path='/admin/orderlist' exact component={OrderListScreen} />
            <Route path='/search/:keyword' exact component={HomeScreen} />

            <Route path='/page/:pageNumber' exact component={HomeScreen} />

            <Route path='/search/:keyword/page/:pageNumber' exact component={HomeScreen} />







            <Route path='/' exact component={HomeScreen} />
            <Route path='/product/:id' component={ProductScreen} />
            <Route path='/cart/:id?' component={CartScreen} />


          </Container>
        </main>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
