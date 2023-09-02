import Image from "next/image";
import ButtonOrder from "./ButtonOrder";
import ProductDetailDescription from "./ProductDetailDescription";

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
          <ProductDetailDescription />
          <ButtonOrder />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
