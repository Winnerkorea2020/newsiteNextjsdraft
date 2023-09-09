import LectureOnlineSemina from "@/components/LectureOnlineSemina";
import TimeLine from "@/components/TimeLine";
const page = () => {
  return (
    <div>
      <div className="container mx-auto px-6 w-full">
        <h3 className="uppercase my-5 text-xl font-bold text-gray-600  sm:text-2xl lg:text-xl xl:text-2xl">
          Educational services on investment trading
        </h3>
        <div>
          <h4>주식 및 코인 투자매매에 대한 교육 서비스</h4>
          <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
            주식 및 코인 투자매매에 대한 교육 서비스는 초보자부터 경험이 많은
            투자자까지 다양한 수준의 투자자들에게 유용한 지식과 도구를
            제공합니다. 여기에는 여러 예시가 포함될 수 있습니다. (입회한
            회원들에게는 ty-play에서 제공하는 서적과 자료들을 제공합니다)
          </p>
        </div>
        <div className="relative mt-6">
          <div className="hidden xl:block xl:w-64 absolute top-0 left-0 mt-3">
            <TimeLine />
          </div>
          <div className="ml-64 w-full ">
            <div className="">
              <LectureOnlineSemina />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
