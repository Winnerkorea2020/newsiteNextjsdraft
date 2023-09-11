import React from "react";

import { lectureEducation } from "@/constant";
import Image from "next/image";
import Alert from "./Alert";

const LectureEdu = () => {
  const list = lectureEducation[0].items;
  const lectureEdu = lectureEducation[0].lectureEdu;
  const communicate = lectureEducation[0].communicate;
  const library = lectureEducation[0].library;
  const mentoning = lectureEducation[0].mentoning;
  return (
    <div className="container mx-auto px-6">
      <div>
        <h1 className="mb-4 text-3xl font-bold  text-gray-800 pt-16 sm:text-4xl md:text-[45px] tracking-tighter">
          Educational services on investment trading
        </h1>
        <div>
          <div className="w-full h-[750px] relative">
            <Image
              className=" object-center object-cover"
              src="/8.png"
              fill
            ></Image>
          </div>

          <h3 className="my-6 text-xl font-bold text-gray-700 sm:text-2xl lg:text-xl xl:text-2xl">
            주식 투자매매에 대한 교육 서비스
          </h3>
          <p className="text-base font-medium leading-relaxed text-body-color">
            주식 투자매매에 대한 교육 서비스는 초보자부터 경험이 많은 투자자까지
            다양한 수준의 투자자들에게 유용한 지식과 도구를 제공합니다. 여기에는
            여러 예시가 포함될 수 있습니다. <br />
            <strong>
              입회한 회원들에게는 ty-play에서 제공하는 서적과 자료들을
              제공합니다.
            </strong>
          </p>
          <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
            {list.map((items, index) => (
              <div
                className="flex flex-col items-center bg-gray-200  border rounded-lg p-5 shadow-lg shadow-gray-100"
                key={index}
              >
                <div className="font-bold my-5 h-12 w-12 bg-gray-500 text-white rounded-full flex items-center justify-center">
                  {items.id}
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h3 className="mb-5 text-xl font-bold text-gray-700 sm:text-2xl lg:text-xl xl:text-2xl">
                    {items.title}
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color">
                    {items.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-6">
        <h3 className="text-center py-6 text-xl font-bold text-gray-700 sm:text-2xl lg:text-xl xl:text-2xl">
          온라인 강좌 및 웹 세미나
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {lectureEdu.map((edulist, index) => (
            <div className="p-6 ">
              <div className="relative h-56 w-full">
                <Image
                  src={`/${edulist.img}`}
                  fill
                  className=" h-56 w-full object-cover object-center border rounded-lg shadow-lg"
                />
              </div>
              <h4 className="text-center my-6 tracking-tighter text-base font-semibold text-gray-700 sm:text-xl lg:text-lg xl:text-xl">
                {edulist.title}
              </h4>
              <p className=" tracking-tighter text-gray-500 text-center">
                {edulist.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-6">
        <h3 className="text-center py-6 text-xl font-bold text-gray-700 sm:text-2xl lg:text-xl xl:text-2xl">
          {communicate[0].mainTitle}
        </h3>
        <img
          className="rounded-lg border h-full w-full object-cover object-center"
          src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1247&q=80"
        />
        <h4 className="text-center my-6 tracking-tighter text-base font-semibold text-gray-700 sm:text-xl lg:text-lg xl:text-xl">
          {communicate[0].title}
        </h4>
        <p className="text-base font-medium leading-relaxed text-body-color">
          {communicate[0].description1}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
          <div className="relative h-[350px] col-span-1 border rounded-lg shadow-md">
            <Image
              className="border rounded-lg shadow-md object-cover object-center"
              src="/7.jpeg"
              fill
            />
          </div>
          <div className="items-start">
            <h4 className="text-center  tracking-tighter text-base font-semibold text-gray-700 sm:text-xl lg:text-lg xl:text-xl">
              {communicate[0].title2}
            </h4>
            <p className=" my-6 text-base font-medium leading-relaxed text-body-color">
              {communicate[0].description2}
            </p>
          </div>
        </div>
      </div>
      <div className="my-6">
        <h3 className="text-center py-6 text-xl font-bold text-gray-700 sm:text-2xl lg:text-xl xl:text-2xl">
          자료실 및 리소스
        </h3>
        <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
          {library.map((items, index) => (
            <div
              className="flex flex-col items-center border rounded-lg  shadow-lg shadow-gray-100"
              key={index}
            >
              <div className="h-60 w-full relative rounded-t">
                <Image
                  className=" w-full h-60 rounded-t"
                  src={`/${items.img}`}
                  fill
                />
              </div>
              <div className="flex flex-col justify-center items-center p-5">
                <h4 className="my-6 text-center  tracking-tighter text-base font-semibold text-gray-700 sm:text-xl lg:text-lg xl:text-xl">
                  {items.title}
                </h4>
                <p className="text-base font-medium leading-relaxed text-body-color">
                  {items.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-6">
        <h3 className="text-center py-6 text-xl font-bold text-gray-700 sm:text-2xl lg:text-xl xl:text-2xl">
          멘토링 및 개인 코칭
        </h3>
        <div className="grid gird-cols-1 lg:grid-cols-2 gap-5 my-6">
          {mentoning.map((items, index) => (
            <div className="flex flex-col items-center " key={index}>
              <img className=" w-full h-full rounded" src={items.img} />
              <div className="flex flex-col justify-center items-center p-5">
                <h4 className="my-6 text-center  tracking-tighter text-base font-semibold text-gray-700 sm:text-xl lg:text-lg xl:text-xl">
                  {items.title}
                </h4>
                <p className="text-base font-medium leading-relaxed text-body-color">
                  {items.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Alert />
    </div>
  );
};

export default LectureEdu;
