import React from "react";

import Products from "@/app/components/Products";

async function fetchProducts() {
  const response = await fetch("https://fakestoreapi.com/products?limit=10");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const products = await response.json();

  return products;
}

const ProductPage = async () => {
  const products = await fetchProducts();
  console.log(products);

  return (
    <div className="flex mx-[10%]">
      <Products products={products} />
    </div>
  );
};

export default ProductPage;
