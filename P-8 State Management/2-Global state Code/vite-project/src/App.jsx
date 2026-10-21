
import { useState } from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((previousCart) => [
      ...previousCart,
      product,
    ]);
  }

  function removeFromCart(productId) {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== productId)
    );
  }

  return (
    <div>
      <Navbar cartCount={cart.length} />

      <ProductList addToCart={addToCart} />

      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;
