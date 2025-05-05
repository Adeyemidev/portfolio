import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

export const NavBar = ()=>{

return(<>
    <nav className="relative container mx-auto sm:flex sm:justify-between pt-8 text-center sm:text-left items-center">
        <h3 className="text-small sm:text-medium font-medium leading-medium tracking-small ">EasyCode</h3>
<ul className="md:gap-7 mt-10 md:mt-0 items-center grid grid-flow-col mx-20 sm:mx-0 place-items-center ">

<a href="https://linkedin.com/in/adeyemi-frontend-dev"> <FaLinkedin size={26}/></a>
<a href="mailto:adeyemiezekiel26@gmail.com"> <IoMdMail size={26}/></a>
 <a href="https://github.com">  <FaGithub size={26}/></a>
 <a href="https://x.com/easycode01?t=XbtFtZ4qzl97gErjSosZsQ&s=09" ><BsTwitterX size={26}/></a>



</ul>
</nav>
    
    </>)
} 