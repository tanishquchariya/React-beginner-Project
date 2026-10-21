
function Cart({ cart, removeFromCart }) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <section>
      <h2>Your Cart ({cart.length})</h2>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map((item, index) => (
        <div key={`${item.id}-${index}`}>
          <span>
            {item.name} — ₹{item.price}
          </span>

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{totalPrice}</h3>
    </section>
  );
}

export default Cart;