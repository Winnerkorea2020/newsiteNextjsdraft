import ListCard from "@/components/ListCard";
import { coinList } from "@/constant";

const CoinList = () => {
  return <ListCard title={`The Coin List`} price={coinList} />;
};

export default CoinList;
