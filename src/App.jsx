import React,{useState, useEffect} from 'react';
import Navbartop from './Components/Navbartop/Navbartop';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Dishes from './Pages/Dish/Dishes';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact from './Pages/Contact/Contact';
import Cart from './Pages/cart/cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import data from './Pages/Dish/data';

const App = () => {

const [closeCart, setCartopen] = useState(false)

  

const handlebutton = () => {
  setCartopen(true)
} 

  const handleClosebutton = () => {
    setCartopen(!closeCart)
  }
  

  //data
  const { foodItems } = data;
  const [cartfoodItems, setcartfoodItems] = useState(JSON.parse(localStorage.getItem('cartfoodItems')) || []);

  useEffect(() => {
    localStorage.setItem('cartfoodItems', JSON.stringify(cartfoodItems));
}, [cartfoodItems]);


  
  const handleAddProduct = (food) => {
    const FoodExist = cartfoodItems.find((item) => item.id === food.id)
    if (FoodExist) {
      setcartfoodItems(cartfoodItems.map((item) => item.id === food.id ? {...FoodExist, quantity: item.quantity + 1
      } : item)
      );
    }
    else {
      setcartfoodItems([...cartfoodItems, { ...food, quantity: 1 }])
    }
  };

  const handleRemoveProduct = (food) => {
    const FoodExist = cartfoodItems.find((item) => item.id === food.id);
    if (FoodExist.quantity === 1) {
      setcartfoodItems(cartfoodItems.filter((item) => item.id !== food.id));
    } else {
      setcartfoodItems(
        cartfoodItems.map((item) => item.id === food.id ? { ...FoodExist, quantity: FoodExist.quantity - 1 } : item
        )
      );
    }
  };
  
  const handleCartClearance = () => {
  setcartfoodItems([])
}


  return (
    <Router>
      <div>
        <Navbar handlebutton={ handlebutton}/>
        <Navbartop handlebutton={ handlebutton}  cartfoodItems={cartfoodItems}/>
        {closeCart && <Cart handleClosebutton={handleClosebutton}
        cartfoodItems={cartfoodItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}
        />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/dishes" element={<Dishes foodItems={foodItems} handleAddProduct={handleAddProduct} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
