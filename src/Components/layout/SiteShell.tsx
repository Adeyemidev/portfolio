"use client";

import NavBar from "@/Components/layout/nav";
import SplashCursor from "@/Components/ui/SplashCursor";
import { SITE_BACKGROUND } from "@/utils/data";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./footer";
export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-white min-h-screen" style={{ backgroundColor: SITE_BACKGROUND }}>
      <SplashCursor />
      <NavBar />
      <main >{children}</main>
      <ToastContainer />
      <Footer/>
    </div>
  )
}
