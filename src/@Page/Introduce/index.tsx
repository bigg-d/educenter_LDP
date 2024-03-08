import React from "react";
import Banner from "./component/Banner";
import Mission from "./component/Mission";
import Vision from "./component/Vision";
import WorkCulture from "./component/WorkCulture";
import Result from "./component/Result";
import Comment from "./component/Comment";
import Layout from "../@Layout";
const IntroduceLayout = () => {
  return (
    <Layout>
      <Banner />
      <Mission />
      <Vision />
      <WorkCulture />
      <Result />
      <Comment />
    </Layout>
  );
};

export default IntroduceLayout;
