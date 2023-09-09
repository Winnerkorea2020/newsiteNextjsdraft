import React from "react";

import { lectureEducation } from "@/constant";

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
          <img
            className="w-full h-[750px] object-center object-cover"
            src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          ></img>

          <h3 className="my-6 text-xl font-bold text-gray-700 sm:text-2xl lg:text-xl xl:text-2xl">
            주식 투자매매에 대한 교육 서비스
          </h3>
          <p className="text-base font-medium leading-relaxed text-body-color">
            주식 투자매매에 대한 교육 서비스는 초보자부터 경험이 많은 투자자까지 다양한 수준의 투자자들에게 유용한
            지식과 도구를 제공합니다. 여기에는 여러 예시가 포함될 수 있습니다. <br />
            <strong> 입회한 회원들에게는 ty-play에서 제공하는 서적과 자료들을 제공합니다.</strong>
          </p>
          <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
            {list.map((items, index) => (
              <div className="flex flex-col items-center border rounded-lg p-5 shadow-lg shadow-gray-100" key={index}>
                <div className="font-bold my-5 h-12 w-12 bg-gray-500 text-white rounded-full flex items-center justify-center">
                  {items.id}
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h3 className="mb-5 text-xl font-bold text-gray-700 sm:text-2xl lg:text-xl xl:text-2xl">
                    {items.title}
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color">{items.description}</p>
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
              <img src={edulist.img} className=" h-56 w-full object-cover object-center border rounded-lg shadow-lg" />
              <h4 className="text-center my-6 tracking-tighter text-base font-semibold text-gray-700 sm:text-xl lg:text-lg xl:text-xl">
                {edulist.title}
              </h4>
              <p className=" tracking-tighter text-gray-500 text-center">{edulist.description}</p>
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
        <p className="text-base font-medium leading-relaxed text-body-color">{communicate[0].description1}</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
          <img
            className=" col-span-2  border rounded-lg shadow-md"
            src="https://plus.unsplash.com/premium_photo-1664378616928-dc6842677183?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />
          <div className="items-start">
            <h4 className="text-center  tracking-tighter text-base font-semibold text-gray-700 sm:text-xl lg:text-lg xl:text-xl">
              {communicate[0].title2}
            </h4>
            <p className=" my-6 text-base font-medium leading-relaxed text-body-color">{communicate[0].description2}</p>
          </div>
        </div>
      </div>
      <div className="my-6">
        <h3 className="text-center py-6 text-xl font-bold text-gray-700 sm:text-2xl lg:text-xl xl:text-2xl">
          자료실 및 리소스
        </h3>
        <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
          {library.map((items, index) => (
            <div className="flex flex-col items-center border rounded-lg  shadow-lg shadow-gray-100" key={index}>
              <img className=" w-full h-60 rounded-t" src={items.img} />
              <div className="flex flex-col justify-center items-center p-5">
                <h4 className="my-6 text-center  tracking-tighter text-base font-semibold text-gray-700 sm:text-xl lg:text-lg xl:text-xl">
                  {items.title}
                </h4>
                <p className="text-base font-medium leading-relaxed text-body-color">{items.description}</p>
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
                <p className="text-base font-medium leading-relaxed text-body-color">{items.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-6">
        <h3 className="py-3 text-red-600 font-semibold">※ 경고 및 주의사항</h3>
        <div className="p-6 border border-red-600 font-medium text-red-600 rounded-lg">
          모든 투자에는 위험이 있으며, 자금을 잃을 가능성이 있다는 것을 인식해야 합니다. 본 사이트에서 제공하는 모든
          정보는 투자판단의 참고자료이며, 서비스 이용에 따른 투자의 최종 책임은 이용자 본인에게 있습니다.
        </div>
      </div>
    </div>
  );
};

export default LectureEdu;
