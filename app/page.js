import CustomerList from "./components/CustomerList";

async function fetchCustomers() {
  const response = await fetch("https://fakestoreapi.com/users?limit=10");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const customers = await response.json();

  return customers;
}

export default async function Home() {
  const customers = await fetchCustomers();
  return (
    <div className="flex flex-col items-center justify-around">
      <h1 className="text-2xl">Welcome to Admin dashboard</h1>

      <div className="flex mx-[10%] mt-10">
        <CustomerList customers={customers} />
      </div>
    </div>
  );
}
