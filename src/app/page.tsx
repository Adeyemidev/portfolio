import { NavBar } from "../Components/layout/nav";
import Contact from "@/Components/Contact";
import Header from "@/Components/Header";
import Skills from "@/Components/Skills";
import Projects from "@/Components/Projects";

const Home = ()=>{
  return(<>
    
    <main className="min-h-screen App ">
      <NavBar />
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </main>

        </>)
}

export default Home