"use client";
// import clsx from "clsx";
// import { Button, useMediaQuery } from "@mui/material";
// import type { NextPage } from "next";
// import Image from "next/image";
// import { useBreakpoints } from "../AboutPage/hooks/useBreakpoints";
import Banner from "./components/Banner";
import Service from "./components/Service";
import Trust from "./components/Trust";
import WhyEduCenter from "./components/WhyEduCenter";
import ResultDevelopment from "./components/ResultDevelopment";
import ContactForm from "./components/ContactForm";
import Layout from "../@Layout";
import Comment from "../Introduce/component/Comment";
const HomePage = () => {
  // const { tablet, mobile } = useBreakpoints();
  return (
    <Layout>
      <Banner />
      <Trust />
      <Service />
      <WhyEduCenter />
      <ResultDevelopment />
      <Comment />
      <ContactForm />
    </Layout>
  );
};

export default HomePage;
