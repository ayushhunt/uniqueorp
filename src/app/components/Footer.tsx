'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandMedium,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandReddit,
  IconBrandFacebook
} from "@tabler/icons-react"
import { FiCopy, FiPhone } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'
import { Quicksand } from 'next/font/google'
import { FloatingDock } from '@/components/ui/floatingdock'

const roboto = Quicksand({
  weight: '600',
  subsets: ['latin'],
})

const Footer = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert(`${text} copied to clipboard`)
  }

  const handleSubmit = () => {}

  const items = [
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/",
    },
    {
      title: "Facebook",
      icon: <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Reddit",
      icon: <IconBrandReddit className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.reddit.com/user/Valuable_Charity_127/",
    },
    {
      title: "Instagram",
      icon: <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.instagram.com/uniqueorp",
    },
    {
      title: "Medium",
      icon: <IconBrandMedium className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://medium.com/@uniqueorp",
    },
    {
      title: "X",
      icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://x.com/uniqueorp",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://github.com/Uniqueorp",
    },
  ]

  return (
    <footer className={`${roboto.className} bg-gray-900 text-gray-100 py-10`}>
      <div className="container mx-auto px-4">
        {/* Simple Text Component */}
        {/* <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Welcome to Our Footer</h2>
          <p className="text-gray-400">Discover more about us and stay connected</p>
        </div> */}

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <Image src="/Assests/3.svg" alt='logo' width={220} height={220} />
          </div>
          {/* Contact Details */}
          <div className="flex flex-col items-left justify-center space-y-2">
            <h3 className="text-lg font-light mb-2">Contact Us</h3>
            <div className="flex items-left">
              <MdEmail className="mr-2 hover:text-indigo-600 transition duration-300" />
              <span className="font-bold">info@uniqueorp.com</span>
              <FiCopy
                onClick={() => copyToClipboard('info@uniqueorp.com')}
                className="ml-2 cursor-pointer hover:text-indigo-600 transition duration-300"
                title="Copy Email"
              />
            </div>
            <div className="flex items-center">
              <FiPhone className="mr-2 hover:text-indigo-600 transition duration-300" />
              <span className="font-semibold">+91-8800202305</span>
              <FiCopy
                onClick={() => copyToClipboard('+91-8800202305')}
                className="ml-2 cursor-pointer hover:text-indigo-600 transition duration-300"
                title="Copy Phone Number"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-lg font-light mb-2">Quick Links</h3>
            <ul className="space-y-2 text-left">
              <li><Link href="/" className="hover:text-indigo-600 transition duration-300">Home</Link></li>
              <li><Link href="/pages/services" className="hover:text-indigo-600 transition duration-300">Services</Link></li>
              <li><Link href="/pages/" className="hover:text-indigo-600 transition duration-300">Projects</Link></li>
              <li><Link href="/pages/contactus" className="hover:text-indigo-600 transition duration-300">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-lg font-light mb-2">Subscribe to our Newsletter</h3>
            <div className="flex flex-col sm:flex-row w-full max-w-xs">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 text-white placeholder-gray-400 border-gray-700 px-4 py-2 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all w-full"
              />
              <button 
                onClick={handleSubmit}
                className="bg-indigo-600 text-white px-4 py-2 rounded-b-lg sm:rounded-r-lg sm:rounded-b-none hover:bg-indigo-700 transition-all mt-2 sm:mt-0"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Second Row: Floating Dock and Text */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Floating Dock */}
          <div className=" ">
            <FloatingDock items={items} />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-400">
                We strive to provide innovative solutions and exceptional service to our clients. 
              </p>
            </div>
          </div>
        </div>

        {/* Footer's Footer */}
        <div className="border-t border-gray-800 pt-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="mb-2 sm:mb-0">
            Developed by 
            <a
              href="https://www.linkedin.com/company/bytechnology-ind" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 ml-1"
            >
              Uniqueorp
            </a>
          </div>
          <div>
            All rights reserved © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer