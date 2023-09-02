import Image from "next/image";

const StoctProgramAbout = () => {
  return (
    <div className="container mx-auto px-6 mt-6">
      <div>
        <h1 className="mb-4 text-3xl font-bold text-center text-black sm:text-4xl md:text-[45px] tracking-tighter">
          Why use an automatic trading program??
        </h1>
        <ul className="mb-5 font-light text-gray-500 sm:text-xl list-decimal">
          <li className="py-5">
            The investment strategy lecture was created from a beginner's
            perspective more than any other lecture.Even if you are just
            starting to study, if you follow the lecture order, you will find
            yourself becoming an expert without even realizing it.
          </li>
          <li className="py-5">
            Touch your hands without hesitation. Basically, people are not good
            at cutting losses. As soon as you think you can break even and hope
            that it may rise, you will own a stock that will fall to the bottom.
            However, the program does not worry and immediately processes the
            stop loss at the set percentage.
          </li>
          <li className="py-5">
            t gives you time to spare. When trading stocks, there are many times
            when you have to spend more time analyzing than you think and
            sitting down to the point where your back hurts, such as after-sale
            review. If you use the automatic trading program, you can completely
            automate the trading time, which is useful when commuting to work or
            going out, and allows you to have a little more personal time.A
            secretary who handles my stocks for me.
          </li>
          <li className="py-5">
            You can further specialize your stock investment by using a
            specialized tool called conditional search. If you invested based on
            an acquaintance's recommendation or personal feeling, from now on,
            study the conditional search formula and find your own rapidly
            rising stocks. Start a new concept of stock investment.
          </li>
        </ul>
        <Image src={`/stockMarket.png`} width={2000} height={2000} />
        <div className="py-5">
          <p className="font-light text-gray-500 sm:text-xl">
            Automatic trading shows the status of automatic trading through a
            trading board that shows the existing balance and real-time buying
            stocks. Automatically buy and sell in real time and display today's
            realization gains and losses at the top.
          </p>
        </div>
        <Image src={`/StockProgramUI.png`} width={2000} height={2000} />
        <div className="py-5">
          <p className="font-light text-gray-500 sm:text-xl">
            Selling options provide users with a wide variety of options with
            over 100 functions. In addition to basic split selling and stop
            loss, we provide three types of liquid selling options such as
            profit preservation, trailing stop, and rebound stop, and an option
            to sell when the price is high. Option to settle at a certain time.
            It is structured to enable strategy implementation rather than
            simple selling, such as selling options through search formulas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoctProgramAbout;
