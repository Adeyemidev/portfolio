"use client"

import NavBar from "@/Components/layout/nav";
import Header from "@/Components/Header";
import Skills from "@/Components/Skills";
import Projects from "@/Components/Projects";
import Contact from "@/Components/Contact";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Portfolio = () => {
  return (
    <div className="text-white" style={{backgroundColor:  'hsl(207, 26%, 17%)'}}
     >
      <NavBar />
      <Header />
      <Skills />
      <Projects />
      <ToastContainer />
      <Contact /> 
    </div>
  );
};

export default Portfolio;