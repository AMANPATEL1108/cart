import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import React, { useState } from "react";

function App() {
  const initialProductList = [
    {
      price: 9999,
      name: "IPhone 10s Max",
      quantity: 0,
    },
    {
      price: 999,
      name: "Readmi 10s Max",
      quantity: 0,
    },
  ];

  const [productList, setProductList] = useState(initialProductList);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
        />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
