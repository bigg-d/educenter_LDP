// import Layout from "../@Layout";
import ContactForm from "../HomePage/components/ContactForm";
import Banner from "./components/Banner";
import Benefit from "./components/Benefit";
import Price from "./components/Price";
import Problem from "./components/Problem";
import Process from "./components/Process";
import Solution from "./components/Solution";

const DetailPage = () => {
  return (
    <>
      <Banner />
      <Problem />
      <Solution />
      <Benefit />
      <Process />
      <Price />
      <ContactForm />
    </>
  );
};
export default DetailPage;
