'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react'
import { useState, useEffect } from 'react'

interface Project {
  id: string
  title: string
  description: string
  details: string
  images: string[]
  date: string
  author: string
  category: string
}

// Sample project data for demonstration
const projectDetails: Record<string, Project> = {
  '1': {
    id: '1',
    title: 'Bytechnology IT Solutions Portfolio Website',
    description: "Developed Bytechnology's portfolio website using Next.js 14 and Tailwind CSS, showcasing innovative IT solutions and enhancing digital presence from scratch.",
    details: 'For Bytechnology, we developed a tailored portfolio website using Next.js 14 for optimized performance and Tailwind CSS to achieve a modern, responsive design. Built entirely from scratch, this site emphasizes Bytechnology’s expertise in IT solutions, offering a seamless user experience that highlights their services effectively. The clean, intuitive layout is crafted to engage clients, boost brand credibility, and drive conversions. Each component, from navigation to service overviews, is thoughtfully optimized to support Bytechnology’s brand identity and enhance their online presence. This project underscores our commitment to creating high-quality digital solutions that align with client goals and showcase their industry leadership.',
    images: [
        '/projects/bytechnology1.png',
        '/projects/bytechnology2.png',
        '/projects/bytechnology3.png',
    ],
    date: '2023-05-15',
    author: 'Jane Doe',
    category: 'Portfolio Developement',
  },
  '2': {
    id: '2',
    title: 'The Curfew Junction Restaurant Website',
    description: 'Developed a vibrant website for The Curfew Junction using HTML, CSS, and JavaScript to enhance user experience and restaurant branding.',
    details: 'We created an engaging website for The Curfew Junction restaurant, designed from scratch using HTML, CSS, and JavaScript. The site captures the restaurant’s unique ambiance, offering users an inviting and intuitive experience. With custom styling and interactive JavaScript elements, the website highlights The Curfew Junction’s menu, atmosphere, and brand story, engaging visitors and making navigation seamless. The layout is optimized for accessibility and responsiveness, ensuring a consistent experience across all devices. This project demonstrates our commitment to building visually compelling and functional websites that not only enhance a brand’s online presence but also attract and engage potential customers effectively.',
    images: [
            '/projects/thecurfewjunction1.png',
            '/projects/thecurfewjunction2.png',
            '/projects/thecurfewjunction3.png',
    ],
    date: '2023-06-01',
    author: 'John Smith',
    category: 'Portfolio Development',
  },
  '3': {
    id: '3',
    title: 'The Amnesia Event Organization Portfolio Website',
    description: "Developed Amnesia's event portfolio website using React and Node.js, styled with CSS, featuring a Holi event theme and ticket booking integration.",
    details: "For Amnesia, an event organization company, we crafted a custom portfolio website using React and Node.js, styled with basic CSS. The website was specifically tailored for their Holi event, featuring a vibrant, festive design that captures the essence of the celebration. Alongside visual customization, we integrated a Google Sheets-based ticket booking system, allowing users to book event tickets easily and track reservations. The platform combines aesthetic appeal with functional booking features, providing an engaging user experience while effectively showcasing Amnesia's event services. This project highlights our ability to deliver dynamic, client-focused websites that enhance event accessibility and audience engagement.",
    images: [
      '/projects/Amensia1.png',
      '/projects/Amensia2.png',
      '/projects/Amensia3.png',
    ],
    date: '2023-06-01',
    author: 'John Smith',
    category: 'Portfolio Development',
  },
  '4': {
    id: '4',
    title: 'Software Developer Portfolio with Next.js, Tailwind CSS, Prismic, and Three.js',
    description: "Built a dynamic software developer portfolio using Next.js 13, Tailwind CSS, Prismic for content management, and Three.js for interactive 3D effects.",
    details: "This project involved designing a modern software developer portfolio, crafted with Next.js 13 for optimal performance and Tailwind CSS for a clean, responsive layout. Integrated with Prismic, the portfolio offers seamless content management, allowing for easy updates and scalability. Additionally, we utilized Three.js to bring interactivity and depth to the site, incorporating animations and 3D elements that elevate the user experience and showcase technical expertise. Each aspect, from dynamic visuals to streamlined content management, reflects a commitment to innovation and attention to detail. This portfolio exemplifies a unique, engaging platform that effectively highlights the developer’s skills, projects, and creativity.",
    images: [
      '/projects/image2.jpg',
      '/projects/ayushportfolio2.png',
      '/projects/ayushportfolio3.png',
    ],
    date: '2023-06-01',
    author: 'John Smith',
    category: 'Portfolio Development',
  },
  '5': {
    id: '5',
    title: 'Pharmacy Student & Digital Marketing Portfolio Website',
    description: "Developed a diverse portfolio for a pharmacy student skilled in digital marketing, graphic design, and video editing using React, Node.js, and CSS.",
    details: "This portfolio website was crafted for a pharmacy student with expertise in digital marketing, graphic design, video editing, and marketing strategy. Built using React.js and Node.js, and styled with plain CSS, the site showcases a unique blend of healthcare knowledge and creative skills. The portfolio highlights projects and experiences across each skill area, with a clean, professional layout that reflects the student’s versatility and accomplishments. Easy-to-navigate sections allow visitors to explore detailed work samples, from digital marketing campaigns to video projects, creating a strong, engaging online presence. This project demonstrates our ability to design tailored, multi-disciplinary portfolios that effectively showcase diverse talents.",
    images: [
      '/projects/pratapportfolio1.png',
      '/projects/pratapportfolio3.png',
      '/projects/pratapportfolio2.png',
    ],
    date: '2023-06-01',
    author: 'John Smith',
    category: 'Portfolio Development',
  },
}

interface ProjectDetailPageProps {
  params: {
    id: string
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = params
  const project = projectDetails[id]
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % project.images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [project.images.length])

  if (!project) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-red-100 to-red-200">
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h1 className="mb-4 text-2xl font-bold text-red-600">Project Not Found</h1>
          <p className="mb-4 text-gray-600">Sorry, the project you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/pages/projects"
            className="inline-flex items-center rounded-md bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-4 text-4xl font-bold text-gray-800 sm:text-5xl">{project.title}</h1>
        <p className="mb-6 text-xl text-gray-600">{project.description}</p>
        
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {project.images.map((image, index) => (
            <div
              key={index}
              className={`relative h-64 overflow-hidden rounded-lg transition-all duration-500 ease-in-out ${
                index === activeImageIndex ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <Image
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className={`transition-transform duration-300 ${
                  index === activeImageIndex ? 'scale-105' : 'hover:scale-110'
                }`}
              />
            </div>
          ))}
        </div>

        <div className="mb-8 flex flex-wrap gap-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4 text-blue-500" />
            {project.date}
          </div>
          <div className="flex items-center">
            <User className="mr-2 h-4 w-4 text-green-500" />
            {project.author}
          </div>
          <div className="flex items-center">
            <Tag className="mr-2 h-4 w-4 text-purple-500" />
            {project.category}
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p>{project.details}</p>
        </div>

        <div className="mt-8 flex justify-between">
          <Link
            href="/pages/projects"
            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
          <button className="rounded-md bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}