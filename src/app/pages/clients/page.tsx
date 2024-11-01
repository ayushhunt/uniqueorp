'use client'

import React, { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Image from 'next/image'

const clients = [
  { name: "RSM Astute", image: "/clients/logo@2x.webp" },
  { name: "Suresh Surana & Associates", image: "/clients/1.png" },
  { name: "Lombardi Engineering India Pvt", image: "/clients/lombardi.png" },
  { name: "Leixir Resources Pvt", image: "/clients/leixir dental.png" },
  { name: "God Frey Phillips Enterprise Pvt Ltd", image: "/clients/godfrey phillips.png" },
  { name: "Samara Capital", image: "/clients/samara capital.png" },
  { name: "ESME Consumer Pvt Ltd", image: "/clients/esme.jpg" },
  { name: "HLS Global India", image: "/clients/hls global.png" },
  { name: "Industry buying", image: "/clients/industry buying.jpg" },
  { name: "RenewBuy.com", image: "/clients/renewbuy.png" },
  { name: "Artivic AI", image: "/clients/artivatic.png" },
  { name: "AIS Glass Xpert", image: "/clients/ais.jpg" },
]

const styles = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }
  .float {
    animation: float 6s ease-in-out infinite;
  }
  @keyframes twinkle {
    0% { opacity: 0.5; }
    50% { opacity: 1; }
    100% { opacity: 0.5; }
  }
  .twinkle {
    animation: twinkle 2s ease-in-out infinite;
  }
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  .pulse {
    animation: pulse 4s ease-in-out infinite;
  }
`;

export default function ClientsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + clients.length) % clients.length);
  };

  useEffect(() => {
    if (!isHovering) {
      const timer = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovering]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      <style>{styles}</style>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-purple-400 mb-4">Our Esteemed Clients</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We are proud to work with some of the most innovative companies in the industry.
          </p>
        </div>
        
        <div className="relative">
          <div 
            className="overflow-hidden rounded-2xl shadow-2xl bg-gray-800 p-8"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="flex items-center justify-center h-80">
              <div className="w-full max-w-md relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full filter blur-3xl opacity-20 pulse"></div>
                <div className="relative bg-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center h-full">
                  <Image 
                    src={clients[currentIndex].image} 
                    alt={clients[currentIndex].name} 
                    className="max-w-full max-h-40 object-contain mb-4 filter invert"
                    width={160} // Set an appropriate width for your image
                    height={40} // Set an appropriate height for your image
                  />
                  <h2 className="text-2xl font-semibold text-purple-400 mt-4">{clients[currentIndex].name}</h2>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <button onClick={prevSlide} className="p-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextSlide} className="p-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-4 flex items-center justify-center hover:shadow-purple-500/20 transition-shadow duration-300">
              <Image 
                src={client.image} 
                alt={client.name} 
                className="max-w-full max-h-16 object-contain filter invert"
                width={80} // Set an appropriate width for your image
                height={40} // Set an appropriate height for your image
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-10 left-10 opacity-50 float">
        <Star className="h-8 w-8 text-purple-400" />
      </div>
      <div className="absolute top-1/4 right-10 opacity-50 float" style={{animationDelay: '2s'}}>
        <Star className="h-6 w-6 text-blue-400" />
      </div>
      <div className="absolute bottom-10 left-1/4 opacity-50 float" style={{animationDelay: '4s'}}>
        <Star className="h-10 w-10 text-yellow-400" />
      </div>
    </div>
  )
}
