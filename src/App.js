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

// import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          {/* <Route path='/' exact component={Home} /> */}
          {/* <Route path='/login' exact component={Login} />*/}
          <Route path='/register' exact component={Register} />
          {/* <CustomerOrder /> */}
          <Payment />
          {/* <ShoppingCart /> */}
        </Switch>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
