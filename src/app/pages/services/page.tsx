'use client'

import React, { useState } from 'react'

interface ServiceItem {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  bulletPoints: string[]
}

const dummyServices: ServiceItem[] = [
  {
    id: '1',
    title: "Portfolio Development (Business & Personal)",
    shortDescription: "Showcase your expertise with a professional portfolio tailored to elevate your personal or business brand.",
    fullDescription: "Our Portfolio Development services craft visually appealing and strategically designed portfolios for individuals and businesses alike. Whether you're a professional aiming to showcase your personal achievements or a business wanting to highlight core strengths, we create online portfolios that truly represent your brand. A well-developed portfolio not only establishes credibility but also captures the attention of potential clients and employers.",
    bulletPoints: [
      "Customized Designs that align with your brand's personality and message",
      "Responsive Layouts for flawless viewing across devices",
      "Professional Content Structuring to highlight your skills, projects, and achievements",
      "SEO Optimization to make your portfolio easily discoverable online",
      "User-Friendly Interface for easy navigation and client engagement"
    ]
  },
  {
    id: '2',
    title: "Unique Graphics & Logo Design",
    shortDescription: "Enhance brand recognition with professional graphics and logo designs that stand out in any industry.",
    fullDescription: "With Graphics and Logo Design, we bring your brand to life through creative, memorable visuals. Our team crafts distinctive logos and graphic elements that embody your brand's essence, setting you apart in your industry. From concept to final design, we ensure every visual is eye-catching, relevant, and aligns seamlessly with your marketing goals.",
    bulletPoints: [
      "Custom Logo Creation that reflects your unique identity",
      "High-Resolution Graphics optimized for print and digital use",
      "Brand Consistency to maintain a cohesive look across all platforms",
      "Multiple Design Revisions for 100% satisfaction",
      "Scalable Designs adaptable to all marketing materials"
    ]
  },
  {
    id: '3',
    title: "Content Writing",
    shortDescription: "Drive engagement with expertly written content tailored to your audience and optimized for SEO.",
    bulletPoints: [
      "SEO-Optimized Content to improve search engine rankings",
      "Audience-Centric Writing tailored to your brand’s voice and goals",
      "Engaging Blog Posts, Articles, and Copy that inspire action",
      "Keyword Research for targeting the right audience",
      "Consistent Tone that reflects your brand values across all channel"
    ],
    fullDescription: 'Our Content Writing services deliver impactful, well-researched, and SEO-optimized content that resonates with your audience. Whether you need blog posts, website content, or social media copy, we ensure your brand’s voice shines through every word. Effective content writing not only informs and engages but also drives your business goals, from brand awareness to conversions.'
  },
  {
    id: '4',
    title: "Hosting and Management",
    shortDescription: "Keep your digital presence stable and secure with robust cloud hosting and expert management solutions.",
    fullDescription: "Our Hosting and Management services offer reliable cloud solutions for businesses of all sizes. We ensure your website and applications remain online, secure, and fast-loading, backed by industry-leading cloud providers. From setup to ongoing maintenance, our experts manage everything, allowing you to focus on growing your business.",
    bulletPoints: [
      "High Uptime Rates to keep your business accessible 24/7",
  "Advanced Security Protocols to protect against cyber threats",
  "Scalable Cloud Hosting tailored to your business needs",
  "Routine Backups and Updates for maximum reliability",
  "Dedicated Support Team to address any issues promptly"

    ]
  },
  {
    id: '5',
    title: "Email Marketing and Sales",
    shortDescription: "Boost engagement and drive sales with data-driven email marketing strategies that connect with your audience.",
    fullDescription: "Our Email Marketing and Sales services empower businesses to connect with their audience through targeted email campaigns. We design and implement campaigns that not only reach your subscribers but resonate with them, driving conversions and nurturing customer relationships. From automation to personalized content, we provide end-to-end email marketing solutions.",
    bulletPoints: [
      "Custom Email Campaigns tailored to your business goals",
      "Automation Tools to optimize workflow and engagement",
      "Segmentation & Targeting for precise audience reach",
      "Performance Analytics to refine and improve strategies",
      "A/B Testing to optimize subject lines and content for higher open rates"
    ]
  },
  {
    id: '6',
    title: "Unique Graphics & Logo Design",
    shortDescription: "Amplify your reach with expert digital marketing strategies that align with your business objectives.",
    fullDescription: "Our Digital Marketing and Management services drive online visibility, engagement, and growth. We use a multi-channel approach to reach your target audience effectively, utilizing social media, paid ads, SEO, and content marketing strategies that work cohesively. Let us handle the digital landscape while you focus on scaling your business.",
    bulletPoints: [
      "Comprehensive Marketing Strategies tailored to your brand",
"Social Media Management for increased engagement",
"Data-Driven Campaigns to ensure maximum ROI",
"SEO Integration for higher visibility across search engines",
"Regular Performance Reports to track growth and adjust tactics",
    ]
  },
  {
    id: '7',
    title: "Search Engine Optimization",
    shortDescription: "Enhance your online presence with SEO services that drive traffic and improve your search engine ranking.",
    fullDescription: "Our SEO services increase your website's visibility on search engines, making it easier for potential clients to find you. We conduct in-depth keyword research, optimize on-page elements, and create high-quality backlinks, ensuring your site ranks competitively. With continuous monitoring and updates, we keep your SEO strategies aligned with the latest trends.",
    bulletPoints: [
      "Keyword Research to target relevant search queries",
"On-Page Optimization for improved user experience",
"High-Quality Link Building to boost authority and credibility",
"Regular Performance Tracking and detailed reports",
"Content Optimization to keep content fresh and engaging",
    ]
  },
  {
    id: '8',
    title: "Software Solutions and Consultancy",
    shortDescription: "Transform your business with customized software solutions and in-depth consultancy for optimal digital transformation.",
    fullDescription: "Our Software Solutions and Consultancy services offer custom software development and strategic guidance to address specific business needs. From process automation to enterprise software, we deliver solutions that improve efficiency and support your growth. Our consultants work closely with you to understand your challenges and craft solutions that empower your team.",
    bulletPoints: [
      "Custom Software Development tailored to your industry",
"Process Optimization for streamlined business operations",
"Digital Transformation Consultancy to modernize your business",
"Integration Services to enhance existing systems",
"Technical Support & Training for seamless implementation"

    ]
  },
  {
    id: '9',
    title: "Complete Business Digitization Services",
    shortDescription: "Streamline and enhance your business with digitization solutions that drive efficiency and competitiveness.",
    fullDescription: "Our Business Digitization services help transform traditional business processes into efficient, digital operations. We provide comprehensive solutions, including cloud migration, workflow automation, and digital tools tailored to your unique needs. Digitization allows your business to scale, cut costs, and improve customer experiences in a highly competitive market.",
    bulletPoints: [
      "End-to-End Digital Transformation from planning to execution",
"Workflow Automation for increased productivity",
"Cloud-Based Solutions to support remote work and data access",
"Enhanced Data Security for safe and compliant operations",
"Customer-Centric Approach to improve client interactions and satisfaction"

    ]
  },
]

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null)

  const openModal = (service: ServiceItem) => {
    setSelectedService(service)
  }

  const closeModal = () => {
    setSelectedService(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 p-4">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-indigo-800 dark:text-indigo-200">Services we Provide</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyServices.map((service) => (
            <div 
              key={service.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105"
              onClick={() => openModal(service)}
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-indigo-700 dark:text-indigo-300">{service.title}</h2>
                <p className="text-gray-600 dark:text-gray-400">{service.shortDescription}</p>
                <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">{selectedService.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{selectedService.fullDescription}</p>
              <ul className="list-disc pl-6 mb-4">
                {selectedService.bulletPoints.map((point, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300 mb-2">{point}</li>
                ))}
              </ul>
              <button 
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Services