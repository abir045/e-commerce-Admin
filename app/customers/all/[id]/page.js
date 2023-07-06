import React, { Suspense } from "react";
import Link from "next/link";
import SingleCustomer from "@/app/components/SingleCustomer";

const SingleCustomertPage = ({ params: { id } }) => {
  return (
    <div className="flex flex-col border-1 border-[#ccc] p-4 m-4 rounded-[5px] drop-shadow-xl mx-[20%]">
      <Link href="/customers/all">
        <button className="bg-white text-black px-6 py-4 rounded font-semibold">
          Back to all customers
        </button>
      </Link>

      <Suspense fallback={<div>loading ...</div>}>
        <SingleCustomer id={id} />
      </Suspense>
    </div>
  );
};

export default SingleCustomertPage;
