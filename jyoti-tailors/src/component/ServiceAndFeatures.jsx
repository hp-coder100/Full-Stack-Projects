import React from "react";
import serImg from '../assests/bg-3.jpg';

const features = [
  {
    title: "Bespoke Tailoring",
    description:
      "Experience the luxury of tailor-made clothing, designed exclusively for you. Our bespoke service allows you to select every element, from fabric and style to buttons and linings, creating a truly one-of-a-kind piece that reflects your individuality.",
  },
  {
    title: "Professional Consultation",
    description:
      "Our skilled stylists will guide you through the design process, offering expert advice on cuts, colors, and fabrics that best suit your body type and preferences. Together, we'll create a garment that flatters your figure and makes a statement.",
  },
  {
    title: "Premium Fabrics",
    description:
      "Choose from a curated selection of high-quality fabrics sourced from renowned mills around the world. From luxurious Italian wools to sumptuous silks, each fabric we offer meets our stringent standards of comfort, durability, and style.",
  },
  {
    title: "Attention to Detail",
    description:
      "Every stitch is executed with precision, ensuring a garment that stands the test of time. Our artisans pay meticulous attention to even the smallest details, resulting in flawless finishes and comfortable fits.",
  },
  {
    title: "Quick Turnaround",
    description:
      "We understand the importance of timely delivery. While our craftsmanship is thorough, we strive to provide quick turnaround times without compromising on quality, ensuring you get to wear your tailor-made creation as soon as possible.",
  },
];

function ServiceAndFeatures() {
  return (
    <div id="Services&Features" className="container max-w-6xl py-4 my-1 bg-[--bg-color] mx-auto">
      <div className="text-3xl font-bold text-center mt-4">
        Service and Features
      </div>

      <div className="mx-auto flex flex-wrap text-center rounded gap-2 mt-8">
        <div className="basis-full md:basis-1/3 border border-[--body-bg] shadow-lg p-8 justify-center item-center mx-auto">
          {" "}
          <div className="text-xl font-bold mb-2 text-[--text-primary] ">
            Our Tailoring Services
          </div>
          <div className="text-[--text-primary]">
            At Jyoti Tailors', we offer a comprehensive range of tailoring
            services that cater to your every need. Our experienced team of
            master tailors and designers collaborates closely with you to bring
            your dream outfit to life. Each garment is meticulously handcrafted
            with precision, ensuring a flawless fit and finish. Whether you
            desire a bespoke suit, a tailored dress, or personalized
            accessories, we take the time to understand your preferences and
            measurements, resulting in clothing that complements your style and
            enhances your confidence.
          </div>
        </div>

        <div className="basis-full flex md:basis-1/2">
          <img className= "w-4/5 m-auto" src= {serImg} alt = "servicePic"></img>
        </div>
      </div>

      <div>
        <div className="text-center mt-8 text-2xl text-[--text-primary] font-extrabold z-10 bg-[--body-bg] p-3">
          Features
        </div>
        <div className="container mx-auto flex flex-wrap p-8  md:gap-2 justify-around item-center">
          {features.map((feature) => {
            return (
              <div className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 border-2 border-[--body-bg] shadow rounded flex p-4 mb-4 hover:scale-110 transitions ease duration-150">
                <div className="mx-auto">
                  <div className="text-xl  font-medium border-b-4 border-[--primary-color] p-1"> {feature.title} </div>
                  <div className="text-[--text-primary] p-2">
                    {feature.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ServiceAndFeatures;
