import ListCard from "@/components/ListCard";
import { stockList } from "@/constant";

const StockList = () => {
  return <ListCard title={`The Stock List`} price={stockList} />;
};

export default StockList;
