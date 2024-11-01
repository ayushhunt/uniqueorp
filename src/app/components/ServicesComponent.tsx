import { BackgroundGradient } from "@/components/ui/background_gradient";
import Image from "next/image";
import React from "react";

// Define the service card component
interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  link,
}) => {
  return (
    <div className="flex flex-col items-center p-6 border rounded-2xl shadow-md bg-white hover:shadow-lg transition duration-300 w-100 h-96">
      <Image src={icon} alt={title} width={80} height={80} />
      <h3 className="text-2xl font-semibold mt-4 text-center font-secondary">{title}</h3>
      <p className="text-gray-700 text-center mt-2 font-medium">{description}</p>
      <a
        href={link}
        className="mt-4 text-green-500 hover:text-sky-700 text-sm font-semibold"
      >
        <div className="flex underline">
          <div>Explore More</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
};

const ServicesComponent: React.FC = () => {
  const services = [
    {
      icon: "/servies/protfolio.gif",
      title: "Portfolio Development (Business & Personal)",
      description: "Showcase your expertise with a professional portfolio tailored to elevate your personal or business brand.",
      link: "/pages/services",
    },
    {
      icon: "/servies/graphic.gif",
      title: "Graphics and Logo Design",
      description: "Enhance brand recognition with professional graphics and logo designs that stand out in any industry.",
      link: "/pages/services",
    },
    {
      icon: "/servies/contentwriting.gif",
      title: "Content Writing",
      description: "Drive engagement with expertly written content tailored to your audience and optimized for SEO.",
      link: "/pages/services",
    },
    {
      icon: "/servies/Hosting.gif",
      title: "Hosting and Management (Cloud)",
      description: "Keep your digital presence stable and secure with robust cloud hosting and expert management solutions.",
      link: "/pages/services",
    },
    {
      icon: "/servies/emailmarketing.gif",
      title: "Email Marketing and Sales",
      description: "Boost engagement and drive sales with data-driven email marketing strategies that connect with your audience.",
      link: "/pages/services",
    },
    {
      icon: "/servies/servicemanaging.gif",
      title: "Digital Marketing and Management",
      description: "Amplify your reach with expert digital marketing strategies that align with your business objectives.",
      link: "/pages/services",
    },
    {
      icon: "/servies/seo.gif",
      title: "SEO",
      description: "Enhance your online presence with SEO services that drive traffic and improve your search engine ranking.",
      link: "/pages/services",
    },
    {
      icon: "/servies/software.gif",
      title: "Software Solutions and Consultancy",
      description: "Transform your business with customized software solutions and in-depth consultancy for optimal digital transformation.",
      link: "/pages/services",
    },
    {
      icon: "/servies/BussinessDigitization.gif",
      title: "Business Digitization",
      description: "Streamline and enhance your business with digitization solutions that drive efficiency and competitiveness.",
      link: "/pages/services",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto py-12">
        <h2 className="text-4xl font-bold text-center mb-2 text-white">
          Services We Provide
        </h2>
        <div className="w-14 h-1 bg-green-500 rounded-full mx-auto mb-7 pb-1.5"></div>
        <p className="text-center text-green-400 mb-12 max-w-2xl mx-auto text-xl font-medium">
          We offer a wide range of IT services designed to optimize your business operations and secure your infrastructure.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <BackgroundGradient className="fill" key={index}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
