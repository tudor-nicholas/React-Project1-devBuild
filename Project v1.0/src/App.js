
import './Styles/App.css';
import './Styles/header.css';
import './Styles/cards.css';
import './Styles/signin.css';
import './Styles/shop.css';
import './Styles/create.css';
import './Styles/cart.css';
import './Styles/checkout.css';
import Header from './Components/header';
import SignIn from './Components/signinComponent';
import AppTopComponent from './Components/mainPageTop';
import LogIn from './Components/loginComponent';
import Shop from './Components/shopComponent';
import CreateForm from './Components/createComponent';
import Cart from './Components/cartComponent';
import CheckoutPage from './Components/checkout';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='intro'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppTopComponent />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/create' element={<CreateForm />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
