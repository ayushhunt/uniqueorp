'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
}

const projects: Project[] = [
  { id: '1', title: 'Bytechnology IT Solutions Portfolio Website', description: "Developed Bytechnology's portfolio website using Next.js 14 and Tailwind CSS, showcasing innovative IT solutions and enhancing digital presence from scratch." },
  { id: '2', title: 'The Curfew Junction Restaurant Website', description: 'Developed a vibrant website for The Curfew Junction using HTML, CSS, and JavaScript to enhance user experience and restaurant branding.' },
  { id: '3', title: 'The Amnesia Event Organization Portfolio Website', description: "Developed Amnesia's event portfolio website using React and Node.js, styled with CSS, featuring a Holi event theme and ticket booking integration." },
  { id: '4', title: 'Software Developer Portfolio with Next.js, Tailwind CSS, Prismic, and Three.js', description: 'Built a dynamic software developer portfolio using Next.js 13, Tailwind CSS, Prismic for content management, and Three.js for interactive 3D effects.' },
  { id: '5', title: 'Pharmacy Student & Digital Marketing Portfolio Website', description: 'Developed a diverse portfolio for a pharmacy student skilled in digital marketing, graphic design, and video editing using React, Node.js, and CSS.' },

]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <h1 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
        Our Creative Projects
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/pages/projects/${project.id}`}
            className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
            <h2 className="mb-2 text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
              {project.title}
            </h2>
            <p className="mb-4 text-gray-600">{project.description}</p>
            <div className="flex items-center text-purple-600 group-hover:text-pink-500 transition-colors duration-300">
              <span className="mr-2 text-sm font-medium">Learn More</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}