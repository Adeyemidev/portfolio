import Home from "@/Components/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Frontend Engineer",
  description: "Frontend Developer Portfolio",
};
export default function HomePage() {
  return <div className="container">
           <Home />
          </div> 
}
