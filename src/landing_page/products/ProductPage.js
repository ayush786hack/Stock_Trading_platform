import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl="media/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast trading 
        platform with advanced charting and
         seamless execution."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection />
      <LeftSection
        imageUrl="media/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast trading 
        platform with advanced charting and
         seamless execution."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <Universe />
    </>
  );
}
