// import Layout from "../@Layout";
import ContactForm from "../HomePage/components/ContactForm";
import NewsGrid from "./components/NewsGrid";
import SliderNews from "./components/SliderNews";

export default function News() {
  return (
    <>
      <SliderNews />
      <NewsGrid />
      <ContactForm />
    </>
  );
}
