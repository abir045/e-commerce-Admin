import React, { Suspense } from "react";
import Link from "next/link";
import SingleProduct from "@/app/components/SingleProduct";

const SingleProductPage = ({ params: { id } }) => {
  return (
    <div className="flex flex-col border-1 border-[#ccc] p-4 m-4 rounded-[5px] drop-shadow-xl mx-[20%]">
      <Link href="/products/all">
        <button className="bg-white text-black px-6 py-4 rounded font-semibold">
          Back to all products
        </button>
      </Link>

      <Suspense fallback={<div>loading ...</div>}>
        <SingleProduct id={id} />
      </Suspense>
    </div>
  );
};

export default SingleProductPage;
