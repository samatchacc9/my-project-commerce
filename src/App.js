import './App.css';

import Footer from './components/Footer/Footer';
import FormLogin from './components/Form/FormLogin';
import FormRegister from './components/Form/FormRegister';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={FormLogin} />
          <Route path='/register' exact component={FormRegister} />
        </Switch>
        <Footer />
      </BrowserRouter>

      {/* <Cart /> */}
    </>
  );
}

export default App;
