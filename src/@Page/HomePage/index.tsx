import type { NextPage } from "next";
import Layout from "../@Layout";
import IntroduceLayout from "../Introduce/index"
const HomePage: NextPage = () => {
  return <div>
   <Layout introduceLayout={<IntroduceLayout />}/>
  </div>;
};

export default HomePage;
