// "use client";
import Banner from "./components/Banner";
import Service from "./components/Service";
import Trust from "./components/Trust";
import WhyEduCenter from "./components/WhyEduCenter";
import ResultDevelopment from "./components/ResultDevelopment";
import ContactForm from "./components/ContactForm";
import Comment from "../Introduce/component/Comment";
import Operate from "./components/Operate";
// import { Parallax } from "react-scroll-parallax";
const HomePage = () => {
  return (
    <>
      <Banner />

      <Trust />

      <Service />

      <WhyEduCenter />
      <ResultDevelopment />
      <Comment />
      <Operate />
      <ContactForm />
    </>
  );
};

export default HomePage;
