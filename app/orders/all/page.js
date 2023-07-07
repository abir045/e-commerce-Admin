import React from "react";
import Orders from "@/app/components/Orders";

async function fetchOrders() {
  const response = await fetch("https://fakestoreapi.com/carts?limit=10");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const orders = await response.json();

  return orders;
}

const OrdersPage = async () => {
  const orders = await fetchOrders();
  console.log(orders);

  return (
    <div className="flex mx-[10%]">
      <Orders orders={orders} />
    </div>
  );
};

export default OrdersPage;
