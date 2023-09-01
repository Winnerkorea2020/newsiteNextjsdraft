import ListCard from "@/components/ListCard";
import { programList } from "@/constant";

const ProgramList = () => {
  return <ListCard title={`The Program List`} price={programList} />;
};

export default ProgramList;
