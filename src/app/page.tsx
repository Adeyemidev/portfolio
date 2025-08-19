"use client"

import NavBar from "@/Components/layout/nav";
import Header from "@/Components/Header";
import Skills from "@/Components/Skills";
import Projects from "@/Components/Projects";
import Contact from "@/Components/Contact";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './globals.css'
import SplashCursor from "@/Components/ui/SplashCursor";

const Portfolio = () => {
  return (
<div className="text-white" style={{ backgroundColor:' oklch(14.7% 0.004 49.25)'}}
>
<SplashCursor />
  <NavBar />
  <Header />
  <Skills />
  <Projects />
  <ToastContainer />
  <Contact />  
</div>); };

export default Portfolio;
