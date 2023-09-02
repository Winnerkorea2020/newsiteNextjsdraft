import { AiOutlineCheck } from "react-icons/ai";
import Image from "next/image";

const ProductOrder = () => {
  return (
    <div>
      <div className="md:flex md:items-start">
        <div className="w-full h-64 md:w-1/2 lg:h-96">
          <Image
            src="/chris-montgomery-smgTvepind4-unsplash.jpg"
            className="h-full w-full rounded-md object-cover max-w-lg mx-auto"
            width={200}
            height={200}
          />
        </div>

        <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
          <h3 className="text-gray-700 uppercase text-lg">Item Prime</h3>
          <span className="text-gray-500 mt-3 font-semibold">$125</span>
          <div className="flex items-center mt-6">
            <ul className="space-y-2 text-left text-gray-500">
              <li className="flex items-center gap-x-2">
                <AiOutlineCheck
                  size={20}
                  className="text-green-500 font-bold"
                />
                Individual configuration
              </li>
              <li className="flex items-center gap-x-2">
                <AiOutlineCheck
                  size={20}
                  className="text-green-500 font-bold"
                />
                Individual configuration
              </li>
              <li className="flex items-center gap-x-2">
                <AiOutlineCheck
                  size={20}
                  className="text-green-500 font-bold"
                />
                Individual configuration
              </li>
              <li className="flex items-center gap-x-2">
                <AiOutlineCheck
                  size={20}
                  className="text-green-500 font-bold"
                />
                Individual configuration
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOrder;
