import React from "react";
import bg_1 from "../assests/bg-1.jpg";
import bg_2 from "../assests/bg-2.jpg";
import bg_3 from "../assests/bg-3.jpg";
function LandingPage({show}) {
  return (
    <div
      id="Home"
      className="max-w-6xl mx-auto py-4 my-1 flex flex-wrap bg-white item-center justify-center">
      <div className="basis-full overflow-hidden  md:basis-1/2 mx-auto py-8 max-w-xl shadow-lg bg-gray-200 shadow-inner s ">
        <img
          className="h-36 w-48 mt-4 me-4 ms-20 sm:ms-48 sm:mt-8 md:mt-16 lg:mt-8 rounded"
          src={bg_1}
          alt="bg-1"
        />
        <img
          className="h-36 ms-36 me-4 sm:ms-16 -mt-8 md:ms-48 md:mt-20 rounded"
          src={bg_2}
          alt="bg-1"
        />
        <img
          className="h-36 w-48 ms-4 me-4 -mt-40 sm:ms-80 sm:-mt-40 md:ms-16 md:-mt-64 rounded"
          src={bg_3}
          alt="bg-1"
        />
      </div>

      <div className="ms-auto basis-full  md:basis-1/2 p-10 my-auto leading-12 ">
        <div className="text-4xl font-bold text-[--text-primary] leading-12 mx-auto ">
          Welcome to{" "}
          <span className="inline-block sm:inline ms-auto text-right w-full ">
            Jyoti <span className="text-[--primary-color]">Tailors'</span>
          </span>
        </div>
        <div className="mt-2 ms-4 text-xl font-bold text-[--text-primary]">
          Where Your Style Meets Perfection
        </div>
        <div className="py-2 px-4">
          Step into a world of bespoke tailoring and unparalleled craftsmanship
          at Jyoti Tailors'. Our skilled artisans blend timeless traditions with
          modern aesthetics to create personalized garments that reflect your
          unique personality. Whether it's a sharp suit for a special occasion
          or a custom-made dress that exudes elegance, we are committed to
          crafting sartorial masterpieces that leave a lasting impression. With
          a legacy of exquisite tailoring spanning generations, we take pride in
          being your trusted destination for distinctive, sophisticated fashion.
        </div>

        <a
          href="#_"
          class="relative mt-2 inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium rounded-full border border-[--primary-color] group">
          <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-[--primary-color] opacity-[3%]"></span>
          <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[--primary-color] opacity-100 group-hover:-translate-x-8"></span>
          <span class="relative w-full text-left text-[--primary-color] transition-colors duration-200 ease-in-out group-hover:text-white">
            Explore More
          </span>
          <span class="absolute inset-0 border-2 border-white rounded-full"></span>
        </a>
      </div>
    </div>
  );
}

export default LandingPage;
