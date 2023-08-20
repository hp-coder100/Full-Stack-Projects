import React, { useState } from "react";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import homeForm from "../assets/Forms-home.png";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../state/StateProvider";
function HomePage() {
  const [{ user }, dispatch] = useStateValue();
  const [support, setSupportShow] = useState(false);
  const navigateTo = useNavigate();

  const features = [
    {
      title: "Multiple Question Types",
      description:
        "Choose from a variety of question types including text inputs, radio buttons, checkboxes, and more.",
    },
    {
      title: "Real-time Previews",
      description:
        "See your form come to life as you design it. Preview how it looks on both desktop and mobile devices.",
    },
    {
      title: "User-friendly Dashboard",
      description:
        "Manage your forms, view submissions, and analyze data all from your intuitive F4easy dashboard.",
    },
  ];

  return (
    <>
      <ContactUs show={support} setShow={setSupportShow}></ContactUs>
      <div className="conatiner-fluid pt-8">
        <div className="container flex flex-wrap bg-white mx-auto p-4">
          <div className="basis-full md:basis-1/2">
            <img src={homeForm} alt="homeForm" className="aspect-square" />
          </div>
          <div className="basis-full md:basis-1/2 flex items-center p-2 md:py-8">
            <div className="m-auto">
              <div className="text-3xl md:text-4xl font-black tracking ">
                Welcome to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-sky-600">
                  F4easy
                </span>
                : The Ultimate Form Builder
              </div>
              <div className="text-xl md:text-2xl mt-2 font-bold">
                Create Beautiful Forms Effortlessly
              </div>
              <div className="mt-2">
                F4easy is a powerful and user-friendly form builder that allows
                you to design stunning forms with ease. Whether you're
                collecting feedback, conducting surveys, or gathering
                information, F4easy provides you with the tools you need to
                create the perfect form for your needs.
              </div>
              {!user && (
                <button
                  onClick={() => navigateTo("/auth/signup")}
                  className="px-8 py-2 rounded-full text-white text-xl mt-4 bg-gradient-to-r from-blue-800 to-sky-600 transitions duration-100 ease-in-out hover:bg-gradient-to-l  hover:shadow-lg hover:shadow-gray-600">
                  Sign Up
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="container mx-auto p-4 ">
          <div className="text-center text-3xl font-extrabold  mt-16">
            Our Features
          </div>
          <div className="flex flex-wrap gap-1 justify-around p-8 mt-4">
            {features.map((feature, index) => {
              return (
                <div
                  key={index}
                  className="sm:basis-3/4 md:basis-1/3 lg:basis-1/4 text-center p-1 bg-gradient-to-r from-blue-800 to-sky-600 rounded mb-4">
                  <div className="h-full w-full bg-white p-8">
                    <div className="text-xl font-bold">{feature.title}</div>
                    <div className="mt-2 text-md">{feature.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default HomePage;
