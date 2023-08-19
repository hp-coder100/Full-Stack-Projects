import React from "react";
import './TestimonialCarousel.css'
import TestimonialCarousel from "./TestimonialCarousel";

function Feedback() {
  return (
    <div id="Feedbacks" className="conatiner max-w-6xl mx-auto bg-[--bg-color] m-1 mb-2 pt-4 pb-16">
      <div className="text-2xl font-bold text-center bg-[--bg-color] p-3">
        Feedbacks
      </div>
      <div className="container w-4/5 mx-auto p-8 feedback">
        <TestimonialCarousel></TestimonialCarousel>
      </div>
    </div>
  );
}

export default Feedback;
