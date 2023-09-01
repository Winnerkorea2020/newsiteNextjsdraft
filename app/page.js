import Banner from "@/components/Banner";
import MainListCard from "@/components/MainListCard";
import Image from "next/image";
import {
  mainStockTradingProgram,
  mainCoinTradingProgram,
  mainLeading,
  mainEducationProgram,
} from "@/constant";

export default function Home() {
  return (
    <main className="flex-1">
      <div className="container mx-auto px-6">
        <Banner />
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
