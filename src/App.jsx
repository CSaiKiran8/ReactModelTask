import { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { CartModal } from './components/CartModal';
import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, change) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + change } : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  const removeFromCart = (id) => { 
    setCart((prevCart) => prevCart.filter((item) => item.id !== id)); 
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <Navbar cartCount={cart.reduce((total, item) => total + item.quantity, 0)} toggleCart={() => setCartOpen(true)} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} cart={cart} addToCart={addToCart} updateQuantity={updateQuantity} />
        ))}
      </div>
      {cartOpen && <CartModal cart={cart} closeModal={() => setCartOpen(false)} removeFromCart={removeFromCart} />}
    </div>
  );
}

export default App
