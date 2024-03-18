import { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";

export default function Document() {
  return (
    <Html lang="kr">
      <Head />
      <body>
        <Header/>
        <Navbar/>
        <Main />
        <Footer/>
        <NextScript />
      </body>
    </Html>
  );
}
