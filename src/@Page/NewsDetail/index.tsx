// import Layout from "../@Layout";
import ContactForm from "../HomePage/components/ContactForm";
import MainContent from "./components/MainContent";

const NewsDetail = (context: any) => {
  const slug = context?.params?.slug as string;
  return (
    <>
      <MainContent slug={slug} />
      <ContactForm />
    </>
  );
};
export default NewsDetail;
