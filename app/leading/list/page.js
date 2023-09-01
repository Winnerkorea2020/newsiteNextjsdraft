import ListCard from "@/components/ListCard";
import { leadingList } from "@/constant";

const LeadingList = () => {
  return <ListCard title={`The Stock List`} price={leadingList} />;
};

export default LeadingList;
