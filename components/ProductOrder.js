import { AiOutlineCheck } from "react-icons/ai";
import Image from "next/image";
import ProductDetailDescription from "./ProductDetailDescription";

const ProductCheckOut = () => {
  return (
    <div>
      <div className="md:grid md:grid-cols-2 xl:grid-cols-3 md:items-start">
        <div className="w-full h-64 md:col-span-1 lg:h-96 relative">
          <Image
            src="/chris-montgomery-smgTvepind4-unsplash.jpg"
            className="h-full w-full rounded-md object-fill object-center max-w-lg mx-auto"
            fill
          />
        </div>

        <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
          <ProductDetailDescription />
        </div>
      </div>
    </div>
  );
};

export default ProductCheckOut;
