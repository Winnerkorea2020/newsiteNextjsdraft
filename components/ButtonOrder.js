import React from "react";
import Link from "next/link";

const ButtonOrder = () => {
  return (
    <div className="flex items-center mt-6 w-full">
      <Link
        href="/checkout"
        className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500 w-full text-center"
      >
        Order
      </Link>
    </div>
  );
};

export default ButtonOrder;
