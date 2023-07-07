import React from "react";
// import avatar from "../../public/avatar.svg";

async function fetchSingleCustomer(id) {
  const response = await fetch(`https://fakestoreapi.com/users/${id}`);

  const customer = await response.json();

  return customer;
}

const SingleCustomer = async ({ id }) => {
  const customer = await fetchSingleCustomer(id);

  return (
    <div>
      <div class="w-full max-w-sm my-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-end px-4 pt-4">
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
            type="button"
          >
            <span class="sr-only">Open dropdown</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
          </button>
          {/* <!-- Dropdown menu --> */}
          <div
            id="dropdown"
            class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          ></div>
        </div>
        <div class="flex flex-col items-center pb-10">
          {/* <img
            class="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={avatar}
            alt="Bonnie image"
          /> */}

          <svg
            class="w-10 h-10"
            fill="#000000"
            height="800px"
            width="800px"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 463 463"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            // enable-background="new 0 0 463 463"
          >
            <g>
              <path d="m398.897,333.619l-73.171-18.254c-0.273-0.412-0.573-0.809-0.931-1.167l-21.795-21.804v-20.872c1.814-1.844 3.59-3.758 5.318-5.753 20.336-23.485 32.563-55.124 34.43-89.089 0.075-1.363 0.144-2.723 0.212-4.082 0.227-4.494 0.441-8.738 0.87-13.021l7.216-72.167c2.23-22.307-5.117-44.632-20.159-61.254-15.042-16.623-36.528-26.156-58.946-26.156h-80.882c-22.418,0-43.903,9.533-58.946,26.155s-22.39,38.949-20.16,61.255l7.211,72.118c0.43,4.299 0.647,8.579 0.876,13.111 0.068,1.347 0.136,2.694 0.21,4.041 1.867,33.965 14.094,65.604 34.43,89.089 1.727,1.995 3.504,3.908 5.318,5.753v20.872l-21.796,21.803c-0.349,0.349-0.643,0.734-0.911,1.134l-73.192,18.289c-31.017,7.754-48.099,26.791-48.099,53.604v52.276c0,12.958 10.542,23.5 23.5,23.5h384c12.958,0 23.5-10.542 23.5-23.5v-52.277c0-26.812-17.082-45.849-48.103-53.604zm-175.397,81.381h16c0.558,0 1.109-0.027 1.658-0.065l5.628,33.065h-30.572l5.628-33.065c0.549,0.038 1.1,0.065 1.658,0.065zm24.5-23.5c0,4.687-3.813,8.5-8.5,8.5h-16c-4.687,0-8.5-3.813-8.5-8.5v-11.986l16.5-11 16.5,11v11.986zm-73-107.118c16.966,12.128 36.372,18.618 56.5,18.618s39.534-6.49 56.5-18.618v8.012l-56.5,56.5-56.5-56.5v-8.012zm84.703,84.906c-0.008-0.005-0.016-0.01-0.024-0.016l-16.407-10.938 52.227-52.227 14.702,14.707c-4.961,8.951-16.612,29.919-33.062,59.5-0.031,0.056-0.096,0.172-0.28,0.217-0.212,0.052-0.364-0.049-0.414-0.082l-16.742-11.161zm-116.468-333.068c12.204-13.486 29.636-21.22 47.824-21.22h80.882c18.189,0 35.62,7.734 47.825,21.22 12.204,13.485 18.165,31.599 16.355,49.696l-4.567,45.668c-10.134-24.15-21.346-39.619-22.006-40.52-2.39-3.261-6.938-4.039-10.276-1.759-19.71,13.456-107.493,15.169-139.661,14.695-2.17-0.041-4.249,0.877-5.697,2.495-9.191,10.259-16.422,21.794-21.786,31.909l-5.248-52.487c-1.811-18.097 4.151-36.211 16.355-49.697zm-8.006,139.637c-0.073-1.326-0.14-2.651-0.207-3.977-0.046-0.917-0.094-1.845-0.143-2.774 1.616-4.588 10.991-29.875 28.005-50.067 20.753,0.182 105.516,0.046 138.116-13.78 6.428,10.14 19.98,33.877 27.129,63.675-0.052,0.974-0.101,1.946-0.15,2.907-0.068,1.337-0.135,2.675-0.209,4.016-3.456,62.884-45.743,112.143-96.27,112.143s-92.814-49.259-96.271-112.143zm32.272,130.25l52.227,52.227-16.41,10.94c-0.006,0.004-0.013,0.009-0.019,0.013l-16.744,11.163c-0.049,0.034-0.201,0.134-0.414,0.082-0.184-0.044-0.249-0.161-0.279-0.216-16.45-29.582-28.101-50.55-33.062-59.501l14.701-14.708zm-136.501,133.393v-52.276c0-19.819 12.36-32.958 36.736-39.052l72.973-18.232c4.324,7.808 13.29,23.942 32.044,57.666 2.09,3.758 5.684,6.494 9.858,7.504 1.196,0.29 2.413,0.432 3.627,0.432 3.044,0 6.063-0.896 8.638-2.612l5.125-3.417v1.986c0,6.862 2.957,13.045 7.663,17.346l-6.665,39.155h-97.999v-40.5c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v40.5h-48.5c-4.687,0-8.5-3.813-8.5-8.5zm401,0c0,4.687-3.813,8.5-8.5,8.5h-48.5v-40.5c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v40.5h-97.999l-6.665-39.154c4.706-4.3 7.663-10.484 7.663-17.346v-1.986l5.125,3.417c2.575,1.717 5.594,2.612 8.638,2.612 1.214,0 2.432-0.143 3.627-0.432 4.174-1.011 7.768-3.746 9.858-7.505 18.734-33.689 27.701-49.824 32.03-57.642l72.985,18.208c24.378,6.094 36.738,19.233 36.738,39.051v52.277z" />
            </g>
          </svg>
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {customer.name.firstname + "-" + customer.name.lastname}
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            {customer.email}
          </span>
          <div class="flex mt-4 space-x-3 md:mt-6">
            <a
              href="#"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {customer.username}
            </a>
            <a
              href="#"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            >
              customer ID: {customer.id}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCustomer;
