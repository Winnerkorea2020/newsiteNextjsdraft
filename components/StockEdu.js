import { StockEducation } from "@/constant";
import Alert from "./Alert";
import React from "react";

const StockEdu = () => {
  return (
    <div className="container mx-auto px-6">
      <div>
        <h1 className="mb-4 text-3xl font-bold  text-gray-800 pt-16 sm:text-4xl md:text-[45px] tracking-tighter">
          주식(해외) 자동매매 프로그램
        </h1>
        <div>
          <img
            className="w-full h-[750px] object-center object-cover"
            src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          ></img>

          <h3 className="my-6 text-xl font-bold text-gray-700 sm:text-2xl lg:text-xl xl:text-2xl">
            주식이나 해외 주식, 나스닥, 항셍 등의 선물 매매 프로그램
          </h3>
          <p className="text-base font-medium leading-relaxed text-body-color">
            이 프로그램은 사용자가 설정한 전략에 따라 시장 데이터를 분석하고,
            거래를 자동으로 실행하게 됩니다. <br />
            아래는 주식(한국)(홍콩)(일본) 그리고 파생상품[코스닥 나스닥, 항셍]등
            지수등의 선물매매 프로그램 기본 정의와 사용 설명서의 개요입니다.
          </p>

          <div className="mt-6">
            <h3 className="my-6 text-xl font-bold text-gray-700 sm:text-2xl lg:text-xl xl:text-2xl">
              기술적 분석 요소
            </h3>
            <div className="grid grid-cols-1 gap-10">
              {StockEducation[0].Tech.map((items, index) => (
                <div>
                  <div className="px-6 py-2 bg-gray-500 font-medium rounded-xl text-white text-center w-[425px] shadow border-gray-600">
                    {items.title}
                  </div>
                  <div className="mt-3 tracking-tighter">
                    <div className="py-2 px-1.5 text-gray-600">
                      {items.description1}
                    </div>
                    <div className="py-2 px-1.5 text-gray-600">
                      {items.description2}
                    </div>
                    <div className="flex justify-between items-center gap-3 relative h-[430px] w-full">
                      <img
                        className="rounded-lg border w-full h-full object-fill object-center"
                        src={`${items.img1}`}
                      />
                      <img
                        className="rounded-lg border w-full h-full object-fill object-center"
                        src={`${items.img2}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h3 className="my-6 text-xl font-bold text-gray-700 sm:text-2xl lg:text-xl xl:text-2xl">
              펀더멘털 분석 요소
            </h3>
            <div className="grid grid-cols-1 gap-10">
              {StockEducation[1].Fundamental.map((items, index) => (
                <div>
                  <div className="px-6 py-2 bg-gray-500 font-medium rounded-xl text-white text-center w-[425px] shadow border-gray-600">
                    {items.title}
                  </div>
                  <div className="mt-3 tracking-tighter">
                    <div className="py-2 px-1.5 text-gray-600">
                      {items.description1}
                    </div>
                    <div className="py-2 px-1.5 text-gray-600">
                      {items.description2}
                    </div>
                    <div className="flex justify-between items-center gap-3 relative h-[430px] w-full">
                      <img
                        className="rounded-lg border w-full h-full object-fill object-center"
                        src={`${items.img1}`}
                      />
                      <img
                        className="rounded-lg border w-full h-full object-fill object-center"
                        src={`${items.img2}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h3 className="my-6 text-xl font-bold text-gray-700 sm:text-2xl lg:text-xl xl:text-2xl">
              시장심리 및 센티멘트
            </h3>
            <div className="grid grid-cols-1 gap-10">
              {StockEducation[2].Market.map((items, index) => (
                <div>
                  <div className="px-6 py-2 bg-gray-500 font-medium rounded-xl text-white text-center w-[425px] shadow border-gray-600">
                    {items.title}
                  </div>
                  <div className="mt-3 tracking-tighter">
                    <div className="py-2 px-1.5 text-gray-600">
                      {items.description1}
                    </div>
                    <div className="py-2 px-1.5 text-gray-600">
                      {items.description2}
                    </div>
                    <div className="mt-3 tracking-tighter">
                      <div className="py-2 px-1.5 text-gray-600">
                        {items.description1}
                      </div>
                      <div className="py-2 px-1.5 text-gray-600">
                        {items.description2}
                      </div>
                      <div className="flex justify-between items-center gap-3 relative h-[430px] w-full">
                        <img
                          className="rounded-lg border w-full h-full object-fill object-center"
                          src={`${items.img1}`}
                        />
                        <img
                          className="rounded-lg border w-full h-full object-fill object-center"
                          src={`${items.img2}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h3 className="my-6 text-xl font-bold text-gray-700 sm:text-2xl lg:text-xl xl:text-2xl">
              리스크 관리
            </h3>
            <div className="grid grid-cols-1 gap-10">
              {StockEducation[3].Risk.map((items, index) => (
                <div>
                  <div className="px-6 py-2 bg-gray-500 font-medium rounded-xl text-white text-center w-[425px] shadow border-gray-600">
                    {items.title}
                  </div>
                  <div className="mt-3 tracking-tighter">
                    <div className="py-2 px-1.5 text-gray-600">
                      {items.description1}
                    </div>
                    <div className="py-2 px-1.5 text-gray-600">
                      {items.description2}
                    </div>
                    <div className="flex justify-between items-center gap-3 relative h-[430px] w-full">
                      <img
                        className="rounded-lg border w-full h-full object-fill object-center"
                        src={`${items.img1}`}
                      />
                      <img
                        className="rounded-lg border w-full h-full object-fill object-center"
                        src={`${items.img2}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h3 className="my-6 text-xl font-bold text-gray-700 sm:text-2xl lg:text-xl xl:text-2xl">
              프로그램 실행
            </h3>
            <div className=" space-y-6">
              <div className="grid grid-cols-1 gap-10">
                {StockEducation[4].Programing.Run.map((items, index) => (
                  <div>
                    <div className="px-6 py-2 bg-gray-500 font-medium rounded-xl text-white text-center w-[425px] shadow border-gray-600">
                      {items.title}
                    </div>
                    <div className="mt-3 tracking-tighter">
                      <div className="py-2 px-1.5 text-gray-600">
                        {items.description1}
                      </div>
                      <div className="py-2 px-1.5 text-gray-600">
                        {items.description2}
                      </div>
                      <div className="flex justify-between items-center gap-3 relative h-[430px] w-full">
                        <img
                          className="rounded-lg border w-full h-full object-fill object-center"
                          src={`${items.img1}`}
                        />
                        <img
                          className="rounded-lg border w-full h-full object-fill object-center"
                          src={`${items.img2}`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 gap-10">
                {StockEducation[4].Programing.Feature.map((items, index) => (
                  <div>
                    <div className="px-6 py-2 bg-gray-500 font-medium rounded-xl text-white text-center w-[425px] shadow border-gray-600">
                      {items.title}
                    </div>
                    <div className="mt-3 tracking-tighter">
                      <div className="py-2 px-1.5 text-gray-600">
                        {items.description1}
                      </div>
                      <div className="py-2 px-1.5 text-gray-600">
                        {items.description2}
                      </div>
                      <div className="flex justify-between items-center gap-3 relative h-[430px] w-full">
                        <img
                          className="rounded-lg border w-full h-full object-fill object-center"
                          src={`${items.img1}`}
                        />
                        <img
                          className="rounded-lg border w-full h-full object-fill object-center"
                          src={`${items.img2}`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 gap-10">
                {StockEducation[4].Programing.Install.map((items, index) => (
                  <div>
                    <div className="px-6 py-2 bg-gray-500 font-medium rounded-xl text-white text-center w-[425px] shadow border-gray-600">
                      {items.title}
                    </div>
                    <div className="mt-3 tracking-tighter">
                      <div className="py-2 px-1.5 text-gray-600">
                        {items.description1}
                      </div>
                      <div className="py-2 px-1.5 text-gray-600">
                        {items.description2}
                      </div>
                      <div className="flex justify-between items-center gap-3 relative h-[430px] w-full">
                        <img
                          className="rounded-lg border w-full h-full object-fill object-center"
                          src={`${items.img1}`}
                        />
                        <img
                          className="rounded-lg border w-full h-full object-fill object-center"
                          src={`${items.img2}`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 gap-10">
                {StockEducation[4].Programing.TradingMainTain.map(
                  (items, index) => (
                    <div>
                      <div className="px-6 py-2 bg-gray-500 font-medium rounded-xl text-white text-center w-[425px] shadow border-gray-600">
                        {items.title}
                      </div>
                      <div className="mt-3 tracking-tighter">
                        <div className="py-2 px-1.5 text-gray-600">
                          {items.description1}
                        </div>
                        <div className="py-2 px-1.5 text-gray-600">
                          {items.description2}
                        </div>
                        <div className="flex justify-between items-center gap-3 relative h-[430px] w-full">
                          <img
                            className="rounded-lg border w-full h-full object-fill object-center"
                            src={`${items.img1}`}
                          />
                          <img
                            className="rounded-lg border w-full h-full object-fill object-center"
                            src={`${items.img2}`}
                          />
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Alert />
    </div>
  );
};

export default StockEdu;
