import TimeLine from "@/components/TimeLine";

const page = () => {
  return (
    <div>
      <div className="container mx-auto px-6 w-full">
        <div className="relative">
          <div className="hidden xl:block xl:w-64 absolute top-0 left-0 mt-3">
            <TimeLine />
          </div>
          <div className="ml-64">
            <div className="">aaa</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
