import './App.css';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CustomerOrder from './pages/CustomerOrder';
import ShoppingCart from './pages/ShoppingCart';
import Payment from './pages/Payment';
import CustomerProfile from './pages/CustomerProfile';
import FormEditProfile from './components/Form/FormEditProfile';
import CustomerBuyProduct from './pages/CustomerBuyProduct';
import CustomerProductDetail from './pages/CustomerProductDetail';
import NavbarSeller from './components/Navbar/NavbarSeller';
import SellerManageOrder from './pages/SellerManageOrder';
import FormSearch from './components/Form/FormSearch';
import FormEditOrder from './components/Form/FormEditOrder';
import FormLabel from './components/Form/FormLabel';

// import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          {/* <FormSearch /> */}
          {/* <Route path='/' exact component={Home} /> */}
          {/* <Route path='/login' exact component={Login} />*/}
          {/* <Route path='/register' exact component={Register} /> */}
          {/* <CustomerOrder /> */}
          {/* <Payment /> */}
          {/* <CustomerProfile /> */}
          {/* <FormEditProfile /> */}
          {/* <CustomerBuyProduct /> */}
          {/* <CustomerProductDetail /> */}
          {/* <ShoppingCart /> */}
          {/* <NavbarSeller /> */}
          {/* <SellerManageOrder /> */}
        </Switch>
        {/* <FormSearch /> */}
        {/* <SellerManageOrder /> */}
        <FormEditOrder />

        {/* <FormLabel /> */}

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
