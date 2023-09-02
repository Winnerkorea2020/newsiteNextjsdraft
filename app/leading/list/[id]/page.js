import Products from "@/components/Products";
import MainListCard from "@/components/MainListCard";

import {
  mainStockTradingProgram,
  mainCoinTradingProgram,
  mainLeading,
  mainEducationProgram,
} from "@/constant";

const page = () => {
  return (
    <div>
      <Products />
      <div className="container mx-auto px-6 mt-16 ">
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
    </div>
  );
};

export default page;
