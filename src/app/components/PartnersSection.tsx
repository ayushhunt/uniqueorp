import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const partners = [
  { name: 'HPE', image: '/ourpartners/hpe.png' },
  { name: 'Aruba', image: '/ourpartners/aruba.png' },
  { name: 'Juniper', image: '/ourpartners/juniper.png' },
  { name: 'Cisco', image: '/ourpartners/cisco.png' },
  { name: 'Sophos', image: '/ourpartners/sophos.png' },
  { name: 'Fortinet', image: '/ourpartners/fortinet.png' },
  { name: 'CheckPoint', image: '/ourpartners/checkpoint.png' },
  { name: 'PalloAlto', image: '/ourpartners/palloalto.png' },
  { name: 'BeyondTrust', image: '/ourpartners/beyondtrust.png' },
  { name: 'Barracuda', image: '/ourpartners/baracuda.png' },
  { name: 'MimeCast', image: '/ourpartners/mimecast.png' },
  { name: 'CrowdStrike', image: '/ourpartners/crowd-strike.png' },
  { name: 'TrendMicro', image: '/ourpartners/trendmicro.png' },
  { name: 'Microsoft', image: '/ourpartners/microsoft.png' },
  { name: 'Freshwork', image: '/ourpartners/freshwork.png' },
  { name: 'Autodesk', image: '/ourpartners/autodesk.png' },
  { name: 'ZOHO', image: '/ourpartners/zoho.png' },
  { name: 'Nitro', image: '/ourpartners/nitro.png' },
  { name: 'AWS', image: '/ourpartners/aws.png' },
  { name: 'Azure', image: '/ourpartners/azure.png' },
  { name: 'Google', image: '/ourpartners/google.png' },
  { name: 'I2K2 Networks', image: '/ourpartners/i2k2-networks.png' },
  { name: 'DELL', image: '/ourpartners/dell.png' },
  { name: 'Lenovo', image: '/ourpartners/lenovo.png' },
  { name: 'Synology', image: '/ourpartners/synology.png' },
  { name: 'QNAP', image: '/ourpartners/qnap.png' },
  { name: 'NetAPP', image: '/ourpartners/netapp.png' },
  { name: 'EMC Dell', image: '/ourpartners/emc-dell.png' },
  {name:"axisVm", image:'/ourpartners/axisvm.png'}
];

export default function PartnersSection() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
      }, 3000); // Resume animation after 3 seconds
    }

    return () => clearTimeout(timeout);
  }, [isPaused]);

  const handleAnimationClick = () => {
    setIsPaused(true);
  };

  return (
    <div className="bg-[#eef4fa]">
      <div className="container mx-auto p-6">
        <h2 className="text-4xl font-extrabold text-center mb-3 text-gray-900">Our Partner Alliances</h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto text-xl font-medium">We work with the best partners</p>
        <div className="overflow-hidden relative">
          <div
            className={`flex justify-center items-center space-x-12 ${
              isPaused ? '' : 'animate-scroll'
            } w-max`}
            ref={scrollRef}
            onClick={handleAnimationClick}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-32 h-32 sm:w-40 sm:h-40 p-2 bg-gray-100 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
              >
                <div className="relative w-24 h-24">
                  <Image
                    src={partner.image}
                    alt={`${partner.name} logo`}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-center text-black">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}