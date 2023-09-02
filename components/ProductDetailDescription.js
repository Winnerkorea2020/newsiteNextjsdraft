import React from "react";

const ProductDetailDescription = () => {
  return (
    <div>
      <div className=" font-medium text-gray-500 uppercase">
        {`Stock Monster`}
      </div>
      <div className="flex flex-col gap-2 ">
        <div>
          <span className="text-gray-500 font-medium mr-2">Price :</span>
          <span className="text-gray-500 mt-3">$125</span>
        </div>
        <div>
          <span className="text-gray-500 font-medium mr-2">
            Shipping Method :
          </span>
          <span className="text-gray-500 mt-3">E-Mail</span>
        </div>
        <div>
          <span className="text-gray-500 font-medium mr-2">Unit :</span>
          <span className="text-gray-500 mt-3">1 EA</span>
        </div>

        <div>
          <span className="text-gray-500 font-medium mr-2">
            Customer Reviews :
          </span>
          <span className="text-gray-500 mt-3">5</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailDescription;
