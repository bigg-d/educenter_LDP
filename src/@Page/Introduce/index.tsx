import React from "react";
import Banner from "./component/Banner";
import Mission from "./component/Mission";
import Vision from "./component/Vision";
import WorkCulture from "./component/WorkCulture";
import Result from "./component/Result";
import Comment from "./component/Comment";
import Service from "../HomePage/components/Service";
import ContactForm from "../HomePage/components/ContactForm";
const IntroduceLayout = () => {
  return (
    <>
      <Banner />
      <Mission />
      <Vision />
      <Service />
      <WorkCulture />
      <Result />
      <Comment />
      <ContactForm />
    </>
  );
};

export default IntroduceLayout;
