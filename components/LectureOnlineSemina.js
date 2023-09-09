import React from "react";
import Image from "next/image";
import { TimeLineContents } from "@/constant";

const LectureOnlineSemina = () => {
  const items = TimeLineContents[0].contents;
  const description = TimeLineContents[0].contents.description;
  const workShop = TimeLineContents[0].contents.workShop;
  return (
    <div>
      <div>
        <h3 className="uppercase mb-5 text-xl font-bold text-gray-600 sm:text-2xl lg:text-xl xl:text-2xl">
          {items.title}
          온라인 강좌 및 웹 세미나
        </h3>
        <div className="flex flex-col gap-8">
          {description.map((items) => (
            <div className="flex justify-start items-start gap-3 w-full">
              <h3 className="text-2xl font-semibold text-center text-blue-600">
                {items.idNum}
              </h3>

              <div className="bg-gray-300 border shadow p-4 w-full rounded-lg">
                <h4 className="text-base font-medium tracking-tighter">
                  <div>{items.title}</div>
                </h4>
                <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                  {items.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <div className="flex flex-col gap-8 pl-10">
          {workShop.map((items) => (
            <div>
              <div className="border shadow rounded-lg">
                <div className="flex justify-start items-center h-52 ">
                  <div className="relative h-full w-52">
                    <Image src={`/${items.img}`} fill className="p-8" />
                  </div>
                  <div className="h-full flex items-center w-full p-8 bg-black text-white">
                    {items.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LectureOnlineSemina;
