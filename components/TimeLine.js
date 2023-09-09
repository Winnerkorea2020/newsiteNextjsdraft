import React from "react";
import { TimeLineContents } from "@/constant";

const TimeLine = ({}) => {
  return (
    <div>
      {TimeLineContents.map((timelines, index) => (
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {timelines.item.map((timeTitle, subindex) => (
            <li key={subindex} className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {timeTitle.timeline}
              </time>
            </li>
          ))}
        </ol>
      ))}
    </div>
  );
};

export default TimeLine;
