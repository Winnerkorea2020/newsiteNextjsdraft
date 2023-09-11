"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/styles/components/Swiper.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const LeadingService = () => {
  return (
    <div className="container mx-auto px-6">
      <div>
        <h1 className="mb-4 text-3xl font-bold  text-gray-800 pt-16 sm:text-4xl md:text-[45px] tracking-tighter">
          주식 리딩서비스
        </h1>
        <div className="pt-6">
          <img
            className="w-full h-[750px] object-center object-cover rounded-lg mb-6"
            src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3774&q=80"
          />
          <p className="text-base font-medium leading-relaxed text-body-color">
            전문적 주식 서비스에서부터 고객 효율을 위한 리딩 서비스까지 엔드 투
            엔드 서비스를 제공합니다. 전문적인 리딩과 엄격한 분석으로 수행되는
            서비스를 통해 리딩설계, 리딩분석, 리딩배포, 리딩가이드까지 한 번에
            해결할 수 있습니다.
          </p>
        </div>
        <div>
          <Swiper
            navigation={true}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="relative w-full h-full">
                <div className="h-full">
                  <div className=" border border-gray-500 rounded-xl p-8 mt-6 h-[480px] sm:h-[410px] md:h-[780px] xl:h-[580px]">
                    <h3 className="mb-6 text-xl font-bold text-gray-700 sm:text-2xl lg:text-xl xl:text-2xl">
                      실습 및 경험
                    </h3>
                    <p className=" text-left text-base text-gray-800 md:text-lg ">
                      시뮬레이션 트레이딩: 시뮬레이션 트레이딩을 통해 실제 시장
                      환경에서의 트레이딩을 연습할 환경을 제공해 드립니다.
                      <br className="mb-6" />
                      경험 축적: 작은 자본으로 시작하여 경험을 축적하고, 시간이
                      지남에 따라 전략을 개선하고 능력을 향상시킬 수 있도록
                      교육해 드립니다. 투자를 하기 위해 누군가 트레이딩을 하는건
                      선택이 아니라 필수입니다. 주식 또는 트레이딩은 복잡하고
                      도전적인 활동입니다. <br className="mb-6" />
                      ty-play에서는 지속적인 교육과 경험 축적을 바탕으로,
                      끊임없이 변화하는 시장 환경에 노력하고 이겨낼 것입니다.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full">
                <div className="h-full">
                  <div className=" border border-gray-500 rounded-xl p-8 mt-6 h-[480px] sm:h-[410px] md:h-[780px] xl:h-[580px]">
                    <h3 className="mb-6 text-xl font-bold text-gray-700 sm:text-2xl lg:text-xl xl:text-2xl">
                      지식 및 교육
                    </h3>
                    <p className=" text-left text-base text-gray-800 md:text-lg ">
                      기본지식 습득: 투자에 관한 기본적인 용어와 개념을 이해해야
                      합니다. 시장 구조, 지표 분석 등에 대한 기본적인 지식을
                      바탕으로 여러 투자전문가와 실시간 채팅 서비스(카카오톡
                      텔레그램 메신저)를 통하여 분석해 드리고 있습니다.
                      <br className="mb-6" />
                      시장 연구: 현재 시장 트렌드와 이슈를 연구하며, 다양한 뉴스
                      소스와 분석 리포트를 참고하여 투자의 방향성을
                      잡아드립니다. 1주일에 1번씩 투자매매한 종목을 매수한
                      이유에 대해 피드백 해드리고 관리해 드립니다.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-full h-full">
                <div className="h-full">
                  <div className=" border border-gray-500 rounded-xl p-8 mt-6 h-[480px] sm:h-[410px] md:h-[780px] xl:h-[580px]">
                    <h3 className="mb-6 text-xl font-bold text-gray-700 sm:text-2xl lg:text-xl xl:text-2xl">
                      분석 및 전략
                    </h3>
                    <p className=" text-left text-base text-gray-800 md:text-lg ">
                      테크니컬 분석: 차트, 지표, 패턴 등을 이해하고 활용하여
                      트레이딩 서비스를 제공하며 위에서 언급한 여러 기술적
                      지표들을 학습하고 활용할 수 있도록 도와드립니다.
                      <br className="mb-6" />
                      펀더멘탈 분석: 기업의 재무제표, 경제 지표, 시장 뉴스 등을
                      분석하여 투자 결정을 할 수 있도록 제안 해 드립니다.
                      <br className="mb-6" />
                      트레이딩 전략 개발: 개인적인 트레이딩 전략을 개발하고,
                      투자자에게 또한 방법을 테스트하고 습득하는 과정을 만들어
                      드립니다
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full">
                <div className="h-full">
                  <div className=" border border-gray-500 rounded-xl p-8 mt-6 h-[480px] sm:h-[410px] md:h-[780px] xl:h-[580px]">
                    <h3 className="mb-6 text-xl font-bold text-gray-700 sm:text-2xl lg:text-xl xl:text-2xl">
                      심리적 준비
                    </h3>
                    <p className=" text-left text-base text-gray-800 md:text-lg ">
                      감정 관리: 트레이딩은 때로는 감정이 개입되기 쉽습니다.
                      감정을 제어하고 냉정한 판단을 내리는 기술을 가르쳐
                      드립니다.
                      <br className="mb-6" />
                      펀더멘탈 분석: 기업의 재무제표, 경제 지표, 시장 뉴스 등을
                      분석하여 투자 결정을 할 수 있도록 제안 해 드립니다.
                      <br className="mb-6" />
                      위험 관리: 손실을 최소화하고 이익을 극대화하기 위한 위험
                      관리 전략을 세워 드립니다.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LeadingService;
