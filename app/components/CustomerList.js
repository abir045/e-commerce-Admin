import React from "react";

const CustomerList = ({ customers }) => {
  return (
    <div>
      {customers.map((item) => (
        <div
          key={item.id}
          class="relative overflow-x-auto shadow-md sm:rounded-lg"
        >
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Customer First Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Customer Last Name
                </th>
                <th scope="col" class="px-6 py-3">
                  username
                </th>
                <th scope="col" class="px-6 py-3">
                  email
                </th>
                <th scope="col" class="px-6 py-3">
                  phone
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name.firstname}
                </th>
                <td class="px-6 py-4">{item.name.lastname}</td>
                <td class="px-6 py-4">{item.username}</td>
                <td class="px-6 py-4">{item.email}</td>
                <td class="px-6 py-4">{item.phone}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
