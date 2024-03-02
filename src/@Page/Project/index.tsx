import Layout from "../@Layout";
import ContactForm from "../HomePage/components/ContactForm";
import BussinessField from "./components/BussinessField";
import Feedback from "./components/Feedback";
import Projects from "./components/Projects";

export default function Project() {
  return (
    <Layout>
      <Projects />
      <BussinessField />
      <Feedback />
      <ContactForm />
    </Layout>
  );
}
