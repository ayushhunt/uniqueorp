"use client";
import Hero from "./components/Hero";
import AboutUs from "./components/Aboutus";
import Services from "./components/ServicesComponent";


import WhyChooseUs from "./components/whychooseus";
import BookCall from "./components/BookaCall";
import ScrollToTop from "./components/ScrollToTop";
import Projects from "./components/Projects";
import Founders from "./components/Founders";

export default function Home() {
  return (
    <div className="overflow-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
      <AboutUs />

      {/* Services Section */}
      <Services />
<div className=""></div>
      
      {/* {why choose us section} */}
      <WhyChooseUs/>
      <Projects/>
      {/* Clients Section */}
      {/* <ClientsSection /> */}

      {/* Partners Section */}
      {/* <PartnersSection /> */}
      {/* <Founders/> */}
<BookCall></BookCall>
<ScrollToTop></ScrollToTop>
     
    </div>
  );
}
