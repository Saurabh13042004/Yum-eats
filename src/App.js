import TopNav from './components/TopNav';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  return (
    <div className="App">
      <Router>
      <TopNav/>
      <Routes>
        <Route path='/' element={<Home addToCart={addToCart}/>}/>
        <Route path='/cart' element={<Cart cartItems={cartItems}/>}/>
      </Routes>

      <NewsLetter/>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
