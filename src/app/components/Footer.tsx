"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { FiCopy, FiPhone } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'
import {Quicksand} from 'next/font/google'
import { FloatingDock } from '@/components/ui/floatingdock'

const roboto = Quicksand({
  weight: '600', // Specify the font weights you want to use
  subsets: ['latin'], // Latin subset for most common usage
});

const Footer = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard`);
  };

  const handleSubmit = ()=>{};
  
 
    const items = [
      {
        title: "Home",
        icon: (
          <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      },
   
      {
        title: "Products",
        icon: (
          <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      },
      {
        title: "Components",
        icon: (
          <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      },
      {
        title: "Aceternity UI",
        icon: (
          <Image
            src="/Assests/3.svg"
            width={20}
            height={20}
            alt="Aceternity Logo"
          />
        ),
        href: "#",
      },
      {
        title: "Changelog",
        icon: (
          <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      },
   
      {
        title: "Twitter",
        icon: (
          <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      },
      {
        title: "GitHub",
        icon: (
          <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      },
    ];
  return (
    <footer className={` ${roboto.className} bg-gray-900 flex flex-col space-y-8 space-x-8 px-8 py-10 text-black`}>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 space-y-8 ml-8 mr-8 '>
        <div className='justify-center py-2 sm:ml-5'>
            <Image src={"/Assests/3.svg"} alt='delhincrmap' width="220" height='220'></Image>
        </div>
        <div className=' space-y-6'>
            <ul>
                <Link href={"/"} ><li className='font-extralight text-lg text-gray-100'>Home</li></Link>
                
                <Link href={'/pages/services'}><li className='font-extrabold  text-base text-gray-100  hover:text-blue hover:font-thin transition-all hover:translate-x-2 duration-300 cursor-pointer '>Services</li></Link>
               <Link href={'/pages/clients'}><li className='font-extrabold  text-base text-gray-100  hover:text-blue hover:font-thin transition-all hover:translate-x-2 duration-300 cursor-pointer'>Clients</li></Link> 
               <Link href={'/pages/partners'}> <li className='font-extrabold  text-base text-gray-100  hover:text-blue hover:font-thin transition-all hover:translate-x-2 duration-300 cursor-pointer'>Partners</li></Link>
                <Link href={'/pages/contactus'}><li className='font-extrabold  text-base text-gray-100  hover:text-blue hover:font-thin transition-all hover:translate-x-2 duration-300 cursor-pointer'>Contact Us</li></Link>
            </ul>
        </div>

        <div className="flex flex-col space-y-2 ">
      {/* Contact Us Heading */}
      <div className="font-extralight text-lg text-gray-100 ">
        Contact Us
      </div>

      {/* Email */}
      <div className="flex items-center text-base">
        <MdEmail className="text-gray-100 hover:text-indigo-600 transition duration-300" />
        <span className="font-bold  ml-2 text-gray-100">info@uniqueorp.com </span>
        <FiCopy
          onClick={() => copyToClipboard('Info@bytechnology.in')}
          className="cursor-pointer font-light ml-1 text-gray-600 hover:text-indigo-600 transition duration-300"
          title="Copy Email"
        />
      </div>

      {/* Phone */}
      <div className="flex items-center text-base">
        <FiPhone className="text-gray-100 hover:text-indigo-600 transition duration-300" />
        <span className="font-semibold ml-1 text-gray-100">+91-8800202305</span>
        <FiCopy
          onClick={() => copyToClipboard('+91-8800202305')}
          className="cursor-pointer ml-1 text-gray-600 hover:text-indigo-600 transition duration-300"
          title="Copy Phone Number"
        />
      </div>

      {/* Social Links */}
      {/* <div className="flex space-x-4 py-4 justify-left">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-gray-100 text-2xl  hover:text-indigo-600 transition-all shadow-2xl transform hover:-translate-y-3 ease-in-out cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/company/bytechnology-ind" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-gray-100 text-2xl  hover:text-indigo-600 transition-all shadow-2xl transform hover:-translate-y-3 ease-in-out cursor-pointer" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-gray-100 text-2xl  hover:text-indigo-600 transition-all shadow-2xl transform hover:-translate-y-3 ease-in-out cursor-pointer" />
        </a>
      </div> */}
      <FloatingDock items={items}/>
    </div>

    <div className="flex flex-col items-center">
      <p className="text-lg mb-2 text-center text-gray-100">
        Subscribe to our <br /> Newsletter
      </p>
      
      <div className="flex">
        {/* Email Input */}
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="bg-slate-400 text-white placeholder-white border-black shadow-md h-10 px-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all"
        />

        {/* Submit Button */}
        <button 
          onClick={handleSubmit}
          className="bg-blue-700 text-gray-100 font-mono text-base px-4 rounded-r-lg hover:bg-blue-900 transition-all"
        >
          Submit
        </button>
      </div>
    </div>

      </div>



      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
  {/* Left Section */}
  <div className="mb-2 md:mb-0 text-gray-100">
    Developed by 
    <a
      href="https://www.linkedin.com/company/bytechnology-ind" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-blue-500 hover:text-blue-700 transition-colors duration-300 ml-1"
    >
      Uniqueorp
    </a>
  </div>

  {/* Right Section */}
  <div className="text-center md:text-right text-gray-100">
    All rights reserved © {new Date().getFullYear()}
  </div>
</div>

    </footer>
  )
}

export default Footer
