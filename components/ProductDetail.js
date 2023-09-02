import Image from "next/image";
import ButtonOrder from "./ButtonOrder";

const ProductDetail = () => {
  return (
    <div className="md:flex md:items-start">
      <div className="w-full h-64 md:w-1/2 lg:h-96 relative">
        <Image src="/chris-montgomery-smgTvepind4-unsplash.jpg" fill />
      </div>
      <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
        <h3 className="font-medium text-gray-500 uppercase text-lg">
          Product details
        </h3>
        <div className="mt-2">
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
          <ButtonOrder />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
