import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Pagination from "./components/Pagination";

function App() {
  const [products, setProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const response = await data.json();
    setProducts(response.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const PAGE_SIZE = 10;
  const totalPage = Math.ceil(products.length / PAGE_SIZE);

  const startPage = currentPage * PAGE_SIZE;
  const endPage = startPage + PAGE_SIZE;

  return !products.length ? (
    <h1>No products</h1>
  ) : (
    <>
      <h1 className="text-center font-bold">Pagination</h1>

      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className="grid grid-cols-5 gap-5 p-5">
        {products.slice(startPage, endPage).map((product) => (
          <ProductCard
            key={product.id}
            image={product.thumbnail}
            title={product.title}
            category={product.category}
          />
        ))}
      </div>
    </>
  );
}

export default App;
