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
    title: 'Innovative AI Solution',
    description: 'Revolutionizing industries with cutting-edge AI technology',
    details: 'Our AI solution leverages advanced machine learning algorithms and neural networks to provide unparalleled insights and automation capabilities. This project aims to transform various sectors, from healthcare to finance, by offering intelligent decision-making tools and predictive analytics. The system can process vast amounts of data in real-time, identifying patterns and making predictions that would be impossible for human analysts to achieve in the same timeframe. By combining deep learning techniques with expert domain knowledge, we have created a versatile AI platform that can be customized for specific industry needs while maintaining a user-friendly interface for non-technical users.',
    images: [
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    ],
    date: '2023-05-15',
    author: 'Jane Doe',
    category: 'Artificial Intelligence',
  },
  '2': {
    id: '2',
    title: 'Sustainable Energy Project',
    description: 'Harnessing renewable resources for a greener future',
    details: 'This groundbreaking project focuses on developing innovative sustainable energy solutions. By combining solar, wind, and tidal power technologies, we aim to create a robust and eco-friendly energy grid that can meet the growing global demand while minimizing environmental impact. Our team of engineers and environmental scientists has designed a scalable system that can be adapted to various geographical locations, maximizing energy production based on local conditions. The project also incorporates advanced energy storage solutions to ensure a stable power supply even during periods of low renewable energy generation. By implementing smart grid technologies, we can optimize energy distribution and reduce waste, making this solution not only environmentally friendly but also economically viable for communities of all sizes.',
    images: [
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    ],
    date: '2023-06-01',
    author: 'John Smith',
    category: 'Renewable Energy',
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