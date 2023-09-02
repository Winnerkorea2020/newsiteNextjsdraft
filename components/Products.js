import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProductImg from "./ProductImg";
import ImportantInformation from "./ImportantInformation";
import ProductDetail from "./ProductDetail";

const Products = ({ parms }) => {
  return (
    <div>
      <div className="container mx-auto px-6">
        <ProductDetail />
        <div className="mt-8">
          <ProductImg />
        </div>
        <div className="mt-8">
          <ImportantInformation />
        </div>
      </div>
    </div>
  );
};

export default Products;
