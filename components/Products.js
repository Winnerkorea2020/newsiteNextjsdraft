import React from "react";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
  return (
    <div>
      <div className="container mx-auto px-6">
        <h3 className="text-gray-600 text-2xl font-medium">주식몬스터 A</h3>
        <div className="md:flex md:items-center">
          <div className="w-full h-64 md:w-1/2 lg:h-96">
            <Image
              src="/chris-montgomery-smgTvepind4-unsplash.jpg"
              className="h-full w-full rounded-md object-cover max-w-lg mx-auto"
              width={200}
              height={200}
            />
          </div>
          <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
            <h3 className="text-gray-700 uppercase text-lg">
              주식몬스터 Prime
            </h3>
            <span className="text-gray-500 mt-3">$125</span>
            <div className="flex items-center mt-6">
              <Link
                href="/checkout"
                className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
              >
                주문하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
