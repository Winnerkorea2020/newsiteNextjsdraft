import ListCard from "@/components/ListCard";
import { lectureList } from "@/constant";

const LectureList = () => {
  return <ListCard title={`The Lecture List`} price={lectureList} />;
};

export default LectureList;
