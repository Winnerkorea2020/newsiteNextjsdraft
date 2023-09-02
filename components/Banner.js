import {
  BiShieldQuarter,
  BiCalendarPlus,
  BiArch,
  BiSlider,
  BiTask,
  BiWalletAlt,
} from "react-icons/bi";

export default function Banner() {
  return (
    <div className="">
      <div>
        <h1 className="mb-4 text-3xl font-bold text-center text-black sm:text-4xl md:text-[45px] tracking-tighter">
          Best Features
        </h1>
        <p className="mb-5 font-light text-gray-500 sm:text-xl">
          We proceed with a transaction with 100% safety and verification
          security. You can freely trade and withdraw money at any time, and we
          value safe and proven transactions.
        </p>
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="flex flex-col items-center border rounded-lg shadow-sm p-8">
              <BiShieldQuarter
                size={70}
                className="text-white bg-blue-500/80 rounded-full p-4"
              />
              <h3 className="text-xl font-bold text-gray-500 sm:text-2xl lg:text-xl xl:text-2xl">
                Safe & Secure
              </h3>
            </div>
            <div className="flex flex-col items-center border rounded-lg shadow-sm p-8">
              <BiCalendarPlus
                size={70}
                className="text-white bg-blue-500/80 rounded-full p-4"
              />
              <h3 className="text-xl font-bold text-gray-500 sm:text-2xl lg:text-xl xl:text-2xl">
                Early Bonus
              </h3>
            </div>
            <div className="flex flex-col items-center border rounded-lg shadow-sm p-8">
              <BiArch
                size={70}
                className="text-white bg-blue-500/80 rounded-full p-4"
              />
              <h3 className="text-xl font-bold text-gray-500 sm:text-2xl lg:text-xl xl:text-2xl">
                Universal Access
              </h3>
            </div>
            <div className="flex flex-col items-center border rounded-lg shadow-sm p-8">
              <BiSlider
                size={70}
                className="text-white bg-blue-500/80 rounded-full p-4"
              />
              <h3 className="text-xl font-bold text-gray-500 sm:text-2xl lg:text-xl xl:text-2xl">
                Secure Storage
              </h3>
            </div>
            <div className="flex flex-col items-center border rounded-lg shadow-sm p-8">
              <BiTask
                size={70}
                className="text-white bg-blue-500/80 rounded-full p-4"
              />
              <h3 className="text-xl font-bold text-gray-500 sm:text-2xl lg:text-xl xl:text-2xl">
                Low Cost
              </h3>
            </div>
            <div className="flex flex-col items-center border rounded-lg shadow-sm p-8">
              <BiWalletAlt
                size={70}
                className="text-white bg-blue-500/80 rounded-full p-4"
              />
              <h3 className="text-xl font-bold text-gray-500 sm:text-2xl lg:text-xl xl:text-2xl">
                Several Profit
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
