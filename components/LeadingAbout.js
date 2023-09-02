import Image from "next/image";
import { AiOutlineCheck } from "react-icons/ai";
import {
  IoArrowDownCircleOutline,
  IoCashOutline,
  IoNavigateCircleOutline,
} from "react-icons/io5";

const LeadingAbout = () => {
  return (
    <div className="container mx-auto px-6 mt-6">
      <div className="relative min-h-[380px]">
        <Image
          className=" object-cover object-center"
          src="/behnam-norouzi-mp11_hrQXf8-unsplash.jpg"
          fill={true}
        />
        <div className=" absolute mx-auto w-full pt-8 px-6 ">
          <h1 className="text-3xl font-bold text-center text-gray-50 sm:text-4xl md:text-[45px] tracking-tighter">
            Leading stocks appear <br /> in the stock market every day.
          </h1>
          <p className="mt-12 font-light text-gray-50 sm:text-xl">
            Leading stocks refer to stocks that receive attention in the market
            and lead the market on the day due to issues or large transactions.
          </p>
        </div>
      </div>
      <div className="w-full mx-auto grid grid-cols-1 gap-5 mt-8">
        <p className="text-base text-body-color md:text-lg">
          We will provide you with purchase points.
        </p>
        <p className="text-base  text-body-color md:text-lg">
          When is the best time to buy leading stocks?
        </p>
        <p className="text-base  text-body-color md:text-lg">
          Only by buying from a good buying position can you minimize losses and
          maximize profits.
        </p>
      </div>
      <div className="mt-8 min-h-[580px] relative">
        <Image
          src={`/clay-banks-TuVChJ1P0IY-unsplash.jpg`}
          fill={true}
          className=" object-cover object-center"
        />
      </div>
      <div className="mt-8">
        <h1 className="mb-4 text-3xl font-bold text-center text-black sm:text-4xl md:text-[45px] tracking-tighter">
          Message sending service via mobile phone app
        </h1>
        <p className="mb-5 font-light text-gray-500 sm:text-xl">
          You can receive VIP key points as a mobile phone message.
        </p>
      </div>
      <div className="w-full mx-auto grid grid-cols-3 gap-5 ">
        <div className="flex flex-col items-center gap-2 border shadow rounded-md py-8">
          <IoArrowDownCircleOutline size={50} />
          <p className="text-base text-body-color md:text-lg">
            Stop loss price
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 border shadow rounded-md py-8">
          <IoCashOutline size={50} />
          <p className="text-base  text-body-color md:text-lg">Buying price</p>
        </div>
        <div className="flex flex-col items-center gap-2 border shadow rounded-md py-8">
          <IoNavigateCircleOutline size={50} />
          <p className="text-base  text-body-color md:text-lg">Target price</p>
        </div>
      </div>
      <div className="w-full mx-auto mt-6">
        <p className="text-base text-body-color md:text-lg">
          You can check more detailed charts and purchase points through the VIP
          bulletin board.
        </p>
      </div>
      <div className="mt-8 min-h-[320px] relative">
        <Image
          src={`/nadine-shaabana-DRzYMtae-vA-unsplash.jpg`}
          fill={true}
          className=" object-cover object-center"
        />
        <div className="absolute h-full">
          <div className="flex flex-col justify-center h-full">
            <h1 className="py-4 text-3xl font-bold text-center text-red-400 sm:text-4xl md:text-[45px] tracking-tighter">
              The most difficult part is the stop loss.
              <br /> You can set the stop loss line within the range provided
              and respond accordingly.
            </h1>
            <p className="text-center py-4 font-light text-gray-50 sm:text-xl">
              Best option for personal use & for your next project.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <ul className="mb-8 space-y-4 text-left text-gray-500">
          <li className="">
            <div className="flex items-center gap-2">
              <AiOutlineCheck size={20} className="text-green-500 font-bold" />
              Precautions when using
            </div>
            <p className="text-base text-body-color md:text-lg">
              It is important to go through a verification process rather than
              investing an unreasonable amount of money from the beginning.
            </p>
          </li>
          <li className="">
            <div className="flex items-center gap-2">
              <AiOutlineCheck size={20} className="text-green-500 font-bold" />
              Things to keep in mind when using paid sites
            </div>
            <p className="text-base text-body-color md:text-lg">
              At first, approach it with the mindset of studying with a small
              amount of money. Once you start making money, increase the amount!
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeadingAbout;
