const products = [
  { id: 1, name: "Keyboard", price: 800 },
  { id: 2, name: "Mouse", price: 400 },
  { id: 3, name: "Headphones", price: 1200 },
  { id: 4, name: "Monitor", price: 8000 },
];

function ProductList({ addToCart }) {
  return (
    <section>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>

          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </section>
  );
}

export default ProductList;
