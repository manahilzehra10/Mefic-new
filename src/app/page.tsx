// import React from 'react'

// import Navbar from "./Components/Navbar";
// import Hero from "./Components/Hero";
// import Exp from "./Components/Exp";
// import Service from "./Components/Service";
// import Funds from "./Components/Funds";
// import Card from "./Components/Card";
// import Text from "./Components/Text";
// import Footer from "./Components/Footer";
// import Comps from "./Components/Comps";


// export default function page () {
//   return (
//     <div className="margin-0 h-auto px-0" >
//       <Navbar/>
//     <Hero/>
//     <Exp />
//     <Service/>
//     <br /><br /><br />
//     <Funds/>
//     <Card/> 
    
//    <Text/>
//    <Comps/>
//    <Footer/>

//     </div>
//   )
// }
"use client";
import { useEffect, useRef, useState } from 'react';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Exp from "./Components/Exp";
import Service from "./Components/Service";
import Funds from "./Components/Funds";
import Card from "./Components/Card";
import Text from "./Components/Text";
import Footer from "./Components/Footer";
import Comps from "./Components/Comps";
import './globals.css';

const Page: React.FC = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    exp: false,
    service: false,
    funds: false,
    card: false,
    text: false,
    comps: false,
    footer: false,
  });

  const refs = {
    hero: useRef<HTMLDivElement>(null),
    exp: useRef<HTMLDivElement>(null),
    service: useRef<HTMLDivElement>(null),
    funds: useRef<HTMLDivElement>(null),
    card: useRef<HTMLDivElement>(null),
    text: useRef<HTMLDivElement>(null),
    comps: useRef<HTMLDivElement>(null),
    footer: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(refs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(refs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className="">
      <Navbar />
      <div
        id="hero"
        ref={refs.hero}
        className={`transition-opacity duration-1000 ${isVisible.hero ? 'opacity-100' : 'opacity-0'} `}
      >
        <Hero />
      </div>
      <div
        id="exp"
        ref={refs.exp}
        className={`transition-opacity duration-1000 ${isVisible.exp ? 'opacity-100' : 'opacity-0'} `}
      >
        <Exp />
      </div>
      <div
        id="service"
        ref={refs.service}
        className={`transition-opacity duration-1000 ${isVisible.service ? 'opacity-100' : 'opacity-0'} `}
      >
        <Service />
      </div>
      <div
        id="funds"
        ref={refs.funds}
        className={`transition-opacity duration-1000 ${isVisible.funds ? 'opacity-100' : 'opacity-0'} `}
      >
        <Funds />
      </div>
      <div
        id="card"
        ref={refs.card}
        className={`transition-opacity duration-1000 ${isVisible.card ? 'opacity-100' : 'opacity-0'}`}
      >
        <Card />
      </div>
      <div
        id="text"
        ref={refs.text}
        className={`transition-opacity duration-1000 ${isVisible.text ? 'opacity-100' : 'opacity-0'} `}
      >
        <Text />
      </div>
      <div
        id="comps"
        ref={refs.comps}
        className={`transition-opacity duration-1000 ${isVisible.comps ? 'opacity-100' : 'opacity-0'} `}
      >
        <Comps />
      </div>
      <div
        id="footer"
        ref={refs.footer}
        className={`transition-opacity duration-1000 ${isVisible.footer ? 'opacity-100' : 'opacity-0'}  bg-gray-900`}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Page;


