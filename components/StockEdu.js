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
            이 프로그램은 사용자가 설정한 전략에 따라 시장 데이터를 분석하고, 거래를 자동으로 실행하게 됩니다. <br />
            아래는 주식(한국)(홍콩)(일본) 그리고 파생상품[코스닥 나스닥, 항셍]등 지수등의 선물매매 프로그램 기본 정의와
            사용 설명서의 개요입니다.
          </p>
          <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
            <h3 className="my-6 text-xl font-bold text-gray-700 sm:text-2xl lg:text-xl xl:text-2xl">지표 및 패턴</h3>
            <div>
              <div className="px-6 py-2 bg-gray-500 font-medium rounded-xl text-white text-center w-72 shadow border-gray-600">
                이동 평균선 (Moving Averages)
              </div>
              <div>
                <div className="py-2 px-1.5 text-gray-600">
                  정의: 이동 평균선은 특정 기간 동안의 평균 가격을 나타내는 지표로, 가격의 전반적인 트렌드를 식별하는데
                  사용됩니다.
                </div>
                <div className="py-2 px-1.5 text-gray-600">
                  활용: 단기 이동 평균선이 장기 이동 평균선을 넘어서면 상승 신호로, 그 반대의 경우에는 하락 신호로
                  해석할 수 있습니다.
                </div>
                <img className="rounded-lg border" src={``} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockEdu;
