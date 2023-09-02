import Banner from "@/components/Banner";
import MainListCard from "@/components/MainListCard";
import Image from "next/image";
import MainBanner from "@/components/MainBanner";
import {
  mainStockTradingProgram,
  mainCoinTradingProgram,
  mainLeading,
  mainEducationProgram,
} from "@/constant";
import Ticker from "@/components/Ticker";

export default function Home() {
  return (
    <main className="flex-1">
      <div className="container mx-auto px-6">
        <div className="border-y border-gray-50 mb-5">
          <Ticker />
        </div>
        <div>
          <MainBanner />
        </div>
        <div className="mt-16">
          <Banner />
        </div>
        {/* Item Lists */}
        <MainListCard
          title={`The Stock trading Program`}
          price={mainStockTradingProgram}
        />
        <MainListCard
          title={`The Coin Trading Program`}
          price={mainCoinTradingProgram}
        />
        <MainListCard
          title={`Ths Stock and Coin Leading Communication`}
          price={mainLeading}
        />
        <MainListCard
          title={`The Stock & Coin Education and Program`}
          price={mainEducationProgram}
        />
      </div>
    </main>
  );
}
