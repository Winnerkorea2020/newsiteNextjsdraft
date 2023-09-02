import Image from "next/image";
import { BiNetworkChart, BiMobileAlt, BiWalletAlt } from "react-icons/bi";
import {
  IoTrendingUpSharp,
  IoReaderOutline,
  IoLockClosedOutline,
  IoApertureOutline,
} from "react-icons/io5";

const CoinProgramAbout = () => {
  return (
    <div className="container mx-auto px-6 mt-6">
      <div className="min-h-[650px] relative bg-red-500 ">
        <Image
          className=" object-cover object-center"
          src={`/luca-bravo-XJXWbfSo2f0-unsplash.jpg`}
          fill={true}
        />
        <div className=" absolute flex flex-col justify-between h-full top-0 px-5">
          <h1 className="mb-4 text-3xl font-bold  text-white pt-16 sm:text-4xl md:text-[45px] tracking-tighter">
            Proven stable returns and systematic system
          </h1>
          <p className="flex-1 mb-5 font-light text-gray-50 sm:text-xl xl:text-4xl mt-11 tracking-tighter border-b">
            A Bitcoin automatic trading program that is gaining the trust of
            customers by always programming better features through continuous
            updates.
          </p>
          <div className="pb-24 mt-2">
            <div className="text-gray-50 grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="flex md:flex-col items-center gap-5">
                <BiNetworkChart className="text-2xl md:text-5xl" />
                <p className="font-liget text-gray-50 sm:text-xl ">
                  Big data-based artificial intelligence
                </p>
              </div>

              <div className="flex md:flex-col items-center gap-5">
                <BiMobileAlt className="text-2xl md:text-5xl" />
                <p className="font-liget text-gray-50 sm:text-xl ">
                  Easy to use on mobile
                </p>
              </div>

              <div className="flex md:flex-col items-center gap-5">
                <BiWalletAlt className="text-2xl md:text-5xl" />
                <p className="font-liget text-gray-50 sm:text-xl ">
                  Provides stable profits
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-4">
          <div className="w-full">
            <div className="">
              <div className="flex items-center gap-5">
                <IoTrendingUpSharp size={50} />
                <div className="text-xl">Profitability</div>
              </div>

              <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                Every day becomes fun
              </h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                “Highest profitability and industry’s first rate of return
                notarized by law firm”
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="">
              <div className="flex items-center gap-5">
                <IoReaderOutline size={50} />
                <div className="text-xl">Convenience</div>
              </div>
              <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                Daily life becomes easier
              </h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                “Perfect AI automatic trading system”After installation, just
                press the start button and AI will take care of everything from
                stock selection to buying and selling at the optimal timing!
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="">
              <div className="flex items-center gap-5">
                <IoLockClosedOutline size={50} />
                <div className="text-xl">Stability</div>
              </div>
              <h3 className="mb-5 text-xl font-bold text-black  sm:text-2xl lg:text-xl xl:text-2xl">
                Always safe
              </h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                “Korea’s first dual AI system”
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="">
              <div className="flex items-center gap-5">
                <IoApertureOutline size={50} />
                <div className="text-xl">Reliability</div>
              </div>
              <h3 className="mb-5 text-xl font-bold text-black  sm:text-2xl lg:text-xl xl:text-2xl">
                You can trust it.
              </h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                “Best reliability and stability”
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="mb-8 text-3xl font-bold text-center text-black sm:text-4xl md:text-[45px] tracking-tighter">
          Proven security solution
        </h1>
        <p className="mb-5 font-light text-gray-500 sm:text-xl">
          For your safety, we use the API KEY system. In addition, we do not
          require any account number, personal information, ID, or password, so
          you can use it absolutely safely without worrying about personal
          information.
        </p>
        <p className="mb-5 font-light text-gray-500 sm:text-xl">
          "API KEY" A security device that is encrypted based on personal IP so
          that only people with the relevant KEY can access it when a specific
          function is required in an operating system, program language,
          service, etc.
        </p>
      </div>
    </div>
  );
};

export default CoinProgramAbout;
