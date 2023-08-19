import React from "react";
import myImg from "../assets/myimg.jpg";
import Instagram from "../assets/instagram.png";
import LinkedIn from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";
import Github from "../assets/github.png";
import LeetCode from "../assets/leetcode.png";
import Footer from "../components/Footer";

function AboutUs() {
  return (
    <>
      <div className="container mx-auto max-w-6xl flex pt-16 px-4 mb-40">
        <div className="mx-auto h-full flex flex-wrap justify-center ">
          <div className="basis-full  sm:basis-1/2 lg:basis-1/3 p-8 flex">
            <div className="rounded-full justify-center items-center p-2 bg-gradient-to-r from-blue-800 to-sky-400">
              <img
                src={myImg}
                alt="Hemant prajapati"
                className="rounded-full"></img>
            </div>
          </div>
          <div className="basis-full md:basis-1/2 p-4 flex justify-center mt-8">
            <div className="mx-auto">
              <div className="w-full text-4xl font-semibold text-gray-900 py-2 uppercase">
                Hemant Prajapati
              </div>
              <div className="text-xl font-normal text-gray-700 px-2">
                {"@Hp-Coder100"}
              </div>
              <div>
                <div className="font-semibold text-xl p-4">Follow Here : </div>
                <div className="w-full flex h-8 gap-4 m-2 flex-wrap justify-center items-center">
                  <a
                    href="https://leetcode.com/hp-coder100"
                    rel="noreferrer"
                    target="_blank">
                    <img
                      src={LeetCode}
                      alt="leetcode"
                      className="h-12 w-48 aspect-square"></img>
                  </a>
                  <a
                    href="https://leetcode.com/hp-coder100/"
                    rel="noreferrer"
                    target="_blank">
                    <img
                      src={Github}
                      alt="github"
                      className="h-12 aspect-sqare"></img>
                  </a>
                  <a
                    href="https://instagram.com/_._psycho.thinker_._?igshid=ZDc4ODBmNjlmNQ=="
                    rel="noreferrer"
                    target="_blank">
                    <img
                      src={Instagram}
                      alt="instagram"
                      className="h-12 w-12 aspect-square"></img>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/prajapati-hemant/"
                    rel="noreferrer"
                    target="_blank">
                    <img
                      src={LinkedIn}
                      alt="linkedin"
                      className="h-12 w-12 aspect-square"></img>
                  </a>
                  <a
                    href="https://twitter.com/HpCoder100"
                    rel="noreferrer"
                    target="_blank">
                    <img
                      src={Twitter}
                      alt="twitter"
                      className="h-12 w-12 aspect-square"></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full fixed bottom-0">
        <Footer></Footer>
      </div>
    </>
  );
}

export default AboutUs;
