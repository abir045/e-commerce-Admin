import React from "react";

async function fetchSingleProduct(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);

  const product = await response.json();

  return product;
}

const SingleProduct = async ({ id }) => {
  const product = await fetchSingleProduct(id);

  return (
    <div className="flex my-10 justify-around" key={product.id}>
      {/* <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      > */}
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={product.image}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {product.description}
        </p>

        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
          {product.category}
        </p>
      </div>
      {/* </a> */}
    </div>
  );
};

export default SingleProduct;
