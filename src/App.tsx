import { useState } from "react";

import "./App.css";
import Product from "./components/Product";

export interface IProduct {
  id: number;
  title: string;
  price: number;
}

function App() {
  const [products, setProducts] = useState<IProduct[]>([
    {
      id: 1,
      title: "Iphone",
      price: 4500,
    },
    {
      id: 2,
      title: "MacBook",
      price: 9800,
    },
    {
      id: 3,
      title: "AirPods",
      price: 450,
    },
  ]);

  function handleAddToCart(id: number) {
    console.log(id);
  }

  return (
    <>
      {products.map((product) => (
        <Product
          product={product}
          key={product.id}
          handleAddToCartClick={handleAddToCart}
        />
      ))}
    </>
  );
}

export default App;
