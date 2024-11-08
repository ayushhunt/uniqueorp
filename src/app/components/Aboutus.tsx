import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className=" py-12 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Text Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-2xl ps-2 pb-2 text-white">About us</h1>
          <h2 className="text-5xl font-extrabold leading-tight mb-4 text-green-500">
          Empowering Digital Success 
            <span className="block text-green-400">Through Innovation and Expertise</span>
          </h2>
          <p className="text-lg font-medium text-blue-500 mb-6">
          At Uniqueorp, we’re passionate about driving digital transformation through innovative solutions that simplify and elevate our clients &apos; experiences. Specializing in a full suite of digital services—from creative design and advanced tech integration to complete digitization and ongoing support—we empower businesses to thrive in today’s dynamic market. Our team of experts combines technical prowess with creative insight to deliver solutions that are not only functional but future-ready, tailored to help you achieve and sustain digital success.
          </p>
        </div>

        {/* Right Side - Video Section */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative w-full h-full">
            <video 
              src="./aboutus/AboutusAnimation.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="object-cover w-full h-full rounded-lg ml-16"
            />
            {/* Design Element (Green Arc) */}
            <div className="absolute inset-y-0 left-[-50px] w-1/3 h-1/3 bg-green-400 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
