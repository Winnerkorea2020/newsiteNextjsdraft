import Link from "next/link";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function MainListCard({ title, price }) {
  return (
    <div className="mt-16 tracking-tighter">
      <h3 className="text-gray-600 text-2xl font-medium">{title}</h3>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {price.map((items, index) => (
          <Link key={index} href={items.url} className="cursor-pointer">
            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
              <div className="flex items-end justify-end h-64 w-full relative">
                <Image
                  src={items.img}
                  fill
                  className=" object-fill object-center"
                />
                <div className="absolute">
                  <button className="p-2.5 flex items-center justify-center rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 text-center ">
                    <AiOutlineArrowRight size={20} />
                  </button>
                </div>
              </div>
              <div className="px-5 py-3">
                <h3 className="text-gray-700 uppercase">{items.month}</h3>
                <span className="text-gray-500 mt-2">{items.pay}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
