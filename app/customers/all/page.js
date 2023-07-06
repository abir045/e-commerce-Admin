import React from "react";
import Customers from "@/app/components/Customers";

async function fetchCustomers() {
  const response = await fetch("https://fakestoreapi.com/users?limit=10");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const customers = await response.json();

  return customers;
}

const CustomerPage = async () => {
  const customers = await fetchCustomers();
  console.log(customers);

  return (
    <div className="flex mx-[10%]">
      <Customers customers={customers} />
    </div>
  );
};

export default CustomerPage;
