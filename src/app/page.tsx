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
    <div className="text-white " style={{backgroundColor:  '#1F2937'}}
     ><p className="text-4xl items-center text-center">Maintainace Mode</p>
      {/* <NavBar />
      <Header />
      <Skills />
      <Projects />
      <ToastContainer />
      <Contact />  */}
    </div>
  );
};

export default Portfolio;