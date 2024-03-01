"use client";

import Layout from "../@Layout"
import Banner from "./components/Banner"
import Benefit from "./components/Benefit";
import Price from "./components/Price";
import Problem from "./components/Problem"
import Process from "./components/Process";
import Solution from "./components/Solution";

const DetailPage = ()=>{
    return (
        <Layout>
            {/* <Banner/> */}
            <Problem/>
            <Solution/>
            <Benefit/>
            <Process/>
            <Price/>
        </Layout>
    )
}
export default DetailPage