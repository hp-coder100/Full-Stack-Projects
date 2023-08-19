import "./App.css";
import { InView } from "react-intersection-observer";
import { useState } from "react";
import ContactUs from "./component/ContactUs";
import Feedback from "./component/Feedback";
import Header from "./component/Header";
import LandingPage from "./component/LandingPage";
import ServiceAndFeatures from "./component/ServiceAndFeatures";
import Footer from "./component/Footer";
import { KeyboardDoubleArrowUpOutlined } from "@mui/icons-material";

function App() {
  const [upBntShow, setUpBntShow] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  const nothgin = () => {};
  return (
    <div className="trasitions ease-in duration-300">
      <Header></Header>
      <InView as="div" onChange={(inView, entry) => setUpBntShow(inView)}>
        <LandingPage></LandingPage>
      </InView>
      <InView as="div" onChange={nothgin}>
        <ServiceAndFeatures></ServiceAndFeatures>
      </InView>
      <InView as="div" onChange={nothgin}>
        <Feedback></Feedback>
      </InView>
      <InView as="div" onChange={nothgin}>
        <ContactUs></ContactUs>
      </InView>

      <Footer></Footer>
      {!upBntShow && (
        <button
          onClick={scrollToTop}
          className="fixed shadow-lg  bottom-20 right-4 z-10 w-12 h-12 rounded-full p-2 bg-[--primary-color] text-[--bg-color]">
          <KeyboardDoubleArrowUpOutlined></KeyboardDoubleArrowUpOutlined>
        </button>
      )}
    </div>
  );
}

export default App;
