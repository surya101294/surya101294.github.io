import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import styles from '../Styles/SocialLink.module.css'
import { Box } from "@chakra-ui/react";
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin color="#063f77" size={30} />
        </>
      ),
    //   href: "https://www.linkedin.com/in/ujjwal-singh-3209b0191/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub color="black" size={30} />
        </>
      ),
      href: "https://github.com/sujjwal21",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail color="#7b0606" size={30} />
        </>
      ),
      href: "mailto:sujjwal85@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill color="#02461b" size={30} />
        </>
      ),
      href: "/Ujjwal-Singh-Resume.pdf",
      style: "rounded-br-md",
      
    },
  ];

  return (
    <div 
    // className="hidden lg:flex flex-col top-[35%] left-0 fixed z-50"
    // data-aos="fade-right" data-aos-duration="2500"
    className={styles.social}
    
    >
   {/*         
      //<ul>
        {links.map(({ id, child, href, style, download }) => (
        //   <li
        //     key={id}
            // className={
            //   "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
            //   " " +
            //   style
            // }
            // style={{display:"flex", flexDirection:"column", justifyContent:"center", width:"40px", height:"15px", position:"fixed",  color:"white"}}
          //>
            <a
              href={href}
            //   className="flex justify-between items-center w-full text-white"
            // style={{display:"flex", justifyContent:"center" , color:"white"}}
            //   download={download}
            //   target="_blank"
            //   rel="noreferrer" 
            >
              {child}
            </a>
          //</li>
        ))}
      // </ul> */}

{/* <a href="#"> LinkedIn <FaLinkedin color="#063f77" size={30} /></a>
<a href="#">LinkedIn <FaLinkedin color="#063f77" size={30} /></a>
<a href>LinkedIn <FaLinkedin color="#063f77" size={30} /></a> */}
    {links.map(({ id, child, href, style, download }) => (
         <a
         className={styles.social}
         href={href}>
         {child}
       </a>
    ))}
    </div>
  );
};

export default SocialLinks;