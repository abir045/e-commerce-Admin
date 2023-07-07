"use client";
import React, { useState } from "react";

const NewProductPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitFormData = (data) => {
    // Make a POST request to the server with the form data
    const response = fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })

      .catch((error) => {
        console.error(error);
      });

    return response;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit the form data
    submitFormData(formData);
    console.log(formData);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full mt-[5%] max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="POST" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Add a New Product
          </h5>
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              product title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="enter your product title"
              required
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="... price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              description
            </label>
            <input
              type="textarea"
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="... description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              image
            </label>
            <input
              type="text"
              name="image"
              id="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="... image url"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              category
            </label>
            <input
              type="text"
              name="category"
              id="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="... category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <div className="flex items-start">
            <div className="flex items-start"></div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit your product
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewProductPage;

//note from fakestore api

//   If you send an object like the code above,
//   it will return you an object with a new id.
//   remember that nothing in real will insert into the database.
// so if you want to access the new id you will get a 404 error.
