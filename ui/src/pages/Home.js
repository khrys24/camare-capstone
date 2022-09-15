import React from "react";
import Banner from "../components/Banner";
import ContactHome from "../components/ContactHome";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MenuHome from "../components/MenuHome";
import Testimonials from "../components/Testimonials";


const Home = () => {
  return (
    <div className="home">
      <Banner/>
      <Hero/>
      <MenuHome/>
      <Testimonials/>
      <ContactHome/>
    </div>
  );
};

export default Home;
