import styles from "../styles/Home.module.css";
import Header from '@components/Header';
import Banner from "@components/Landingpage/Banner";
import Features from "@components/Landingpage/Features";
import Head from "next/head"
import Security from "@components/Landingpage/Security";
import WhyImageDiv from "@components/Landingpage/WhyImageDiv";
import Setup from "@components/Landingpage/Setup";
import Thanks from "@components/Landingpage/Thanks"
import Footer from "@components/Footer";
import Copyright from "@components/Copyright";




export default function document() {

  
  
  return (
    <>
        <Header />
        <Banner />
        <Features />
        <Security />
        <WhyImageDiv />
        <Setup/>
        <Thanks />
        <Footer />
        <Copyright/>   
    </>
  );
}
