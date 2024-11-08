"use client"
import React from "react";


export default function WhyChooseUs() {
    return (
      <section className=" py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl sm:text-3xl font-extrabold text-white mb-3">
            Why Choose Us
          </h2>
          <div className="w-14 h-1 bg-green-500 rounded-full mx-auto mb-7 pb-1.5 "></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {/* Reason 1 */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-green-500 mb-2">Advanced Technology Stack for Future-Ready Solutions</h3>
              <p className="text-sm sm:text-base text-blue-500">Leverage cutting-edge technology to keep your business ahead of industry trends with a tech stack that ensures speed, scalability, and reliability.</p>
            </div>
            {/* Reason 2 */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-green-500 mb-2">Simplified Content Updating and Management for All Skill Levels</h3>
              <p className="text-sm sm:text-base text-blue-500">Keep your platform fresh and up-to-date with user-friendly management tools that make content updates a breeze for both beginners and experts.</p>
            </div>
            {/* Reason 3 */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-green-500 mb-2">Engaging UI and Unique Graphics to Capture Your Audience’s Attention</h3>
              <p className="text-sm sm:text-base text-blue-500"> Stand out with visually stunning, user-centered UI designs and custom graphics that make your brand memorable and enjoyable to interact with.</p>
            </div>
            {/* Reason 4 */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-green-500 mb-2"> Seamless CMS Integration for Flexible and Dynamic Content Control
              </h3>
              <p className="text-sm sm:text-base text-blue-500">Effortlessly manage your website’s content with integrated Content Management Systems (CMS) designed to streamline updates and empower you to scale with ease</p>
            </div>
            {/* Reason 5 */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-green-500 mb-2"> Reliable and Budget-Friendly Hosting Solutions</h3>
              <p className="text-sm sm:text-base text-blue-500">Access top-tier hosting that’s both affordable and dependable, ensuring optimal website performance and 24/7 uptime without breaking the bank.</p>
            </div>
            {/* Reason 6 */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-green-500 mb-2 ">Comprehensive Support for Full Business Digitization</h3>
              <p className="text-sm sm:text-base text-blue-500">Transform your operations with full-service digitization support that enables your business to thrive in the digital age, from strategy to implementation and beyond.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  