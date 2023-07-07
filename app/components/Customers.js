import React from "react";
import Link from "next/link";

const Customers = ({ customers }) => {
  return (
    <div>
      {customers.map((item) => (
        <div
          key={item.id}
          className="w-full max-w-md my-5 p-4 gap-8 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
        >
          <Link href={`/customers/all/${item.id}`}>
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 space-x-1 truncate dark:text-white">
                        <span>{item.name.firstname}</span>
                        <span>{item.name.lastname}</span>
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {item.email}
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      {item.username}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Customers;
