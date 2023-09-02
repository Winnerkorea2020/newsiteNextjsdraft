import React from "react";
import Image from "next/image";

import {
  BiBitcoin,
  BiCoinStack,
  BiWorld,
  BiBuildingHouse,
  BiNews,
} from "react-icons/bi";

const LectureAbout = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="relative">
        <Image
          className=""
          src={`/miguel-henriques--8atMWER8bI-unsplash.jpg`}
          width={2000}
          height={2000}
        ></Image>
        <p className="absolute mx-auto w-full -top-2 font-bold text-gray-50 text-lg tracking-tighter sm:text-2xl text-center mt-16 z-20 ">
          A space to learn about investing that is right for you <br /> I do it
          every day.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-5 lg:gap-8 xl:gap-14 mt-3 text-gray-700">
        <div className="flex md:flex-col items-center gap-2 ">
          <BiBitcoin
            size={50}
            className=" border-2 border-gray-100 rounded p-2"
          />
          <span className="font-ligt">Digital assets</span>
        </div>
        <div className="flex md:flex-col items-center gap-2 ">
          <BiCoinStack
            size={50}
            className=" border-2 border-gray-100 rounded p-2"
          />
          <span className="font-ligt">Stock</span>
        </div>
        <div className="flex md:flex-col items-center gap-2 ">
          <BiWorld
            size={50}
            className=" border-2 border-gray-100 rounded p-2"
          />
          <span className="font-ligt">Foreign Stocks</span>
        </div>
        <div className="flex md:flex-col items-center gap-2 ">
          <BiBuildingHouse
            size={50}
            className=" border-2 border-gray-100 rounded p-2"
          />
          <span className="font-ligt">Real estate</span>
        </div>
        <div className="flex md:flex-col items-center gap-2 ">
          <BiNews size={50} className=" border-2 border-gray-100 rounded p-2" />
          <span className="font-ligt">New Tech</span>
        </div>
      </div>

      <div className="w-full mx-auto text-center my-10">
        <h2 className="text-3xl font-bold  text-black  sm:text-4xl md:text-[45px]">
          Special point 1. Lecture structure
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="flex flex-col p-6 mx-auto text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow ">
          <h3 className="text-2xl font-semibold">Easy lecture composition</h3>
          <p className="font-light text-gray-500 sm:text-lg">
            The investment strategy lecture was created from a beginner's
            perspective more than any other lecture.Even if you are just
            starting to study, if you follow the lecture order, you will find
            yourself becoming an expert without even realizing it
          </p>
        </div>
        <div className="flex flex-col p-6 mx-auto text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow ">
          <h3 className="text-2xl font-semibold">
            Customized lectures by level
          </h3>
          <p className="font-light text-gray-500 sm:text-lg">
            Investment and strategy lectures allow you to systematically and
            easily find and learn customized lectures according to your level,
            from beginners to experts.
          </p>
        </div>
        <div className="flex flex-col p-6 mx-auto text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow ">
          <h3 className="text-2xl font-semibold">
            Unlimited repeated learning and questions
          </h3>
          <p className="font-light text-gray-500 sm:text-lg">
            You can become a digital tutor by completing the investment strategy
            course.Start the second chapter of your life right now with a new
            qualification and future job!!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
        <div className="flex flex-col p-6 mx-auto  text-gray-900 bg-white rounded-lg border border-gray-100 shadow ">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <h3 className="text-2xl font-semibold">01</h3>
            <div className="text-gray-600 text-lg sm:text-left tracking-tighter">
              No one-time coaching! Continuous follow-up A/S care
            </div>
          </div>
          <p className="font-light text-gray-500 sm:text-lg">
            Prime Play coaching doesn’t end in just one session!Even after the
            lecture is over, you can have your questions answered and receive
            after-sales service through live broadcasts or dedicated chat rooms.
          </p>
        </div>

        <div className="flex flex-col p-6 mx-auto  text-gray-900 bg-white rounded-lg border border-gray-100 shadow ">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <h3 className="text-2xl font-semibold">02</h3>
            <div className="text-gray-600 text-lg sm:text-left tracking-tighter">
              Faster than anyone else! Live tailored to the issue
            </div>
          </div>
          <p className="font-light text-gray-500 sm:text-lg">
            When there is a specific social issue, we will provide valuable
            information faster than anyone else through live broadcast.
          </p>
        </div>

        <div className="flex flex-col p-6 mx-auto  text-gray-900 bg-white rounded-lg border border-gray-100 shadow ">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <h3 className="text-2xl font-semibold">03</h3>
            <div className="text-gray-600 text-lg sm:text-left tracking-tighter">
              Not ‘just anyone’! Rigorous expert verification
            </div>
          </div>
          <p className="font-light text-gray-500 sm:text-lg">
            Prime Play's experts are strictly selected through verification of
            financial qualifications and professional activity history.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LectureAbout;
