
"use client"

import { useState, useEffect, ReactNode, ButtonHTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/Card'


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'ghost';
  size?: 'default' | 'sm';
  className?: string;
}

// Button component
const Button: React.FC<ButtonProps> = ({ children, variant = 'default', size = 'default', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background';
  const variantStyles = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
  };
  const sizeStyles = {
    default: 'h-10 py-2 px-4',
    sm: 'h-9 px-3 rounded-md',
  };
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}



const partners = {
  Network: ['HPE', 'Aruba', 'Juniper', 'Cisco', 'Sophos'],
  Security: ['Sophos', 'Fortinet', 'CheckPoint', 'PalloAlto', 'BeyondTrust', 'Baracuda', 'MimeCast', 'Crowd Strike', 'TrendMicro'],
  Software: ['Microsoft', 'Adobe', 'Freshwork', 'Autodesk', 'ZOHO', 'Nitro', 'AxisVM', 'Hexagon'],
  Cloud: ['AWS', 'Azure', 'Google', 'I2K2 Networks'],
  'Servers/Storage': ['HPE', 'DELL', 'Lenovo', 'Synology', 'QNAP', 'NetAPP', 'EMC Dell']
}

const imageFormats = ['png', 'jpg', 'webp']


export default function PartnerPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})
  const [imageSources, setImageSources] = useState<Record<string, string>>({})

  useEffect(() => {
    const preloadImages = async () => {
      const errors: Record<string, boolean> = {}
      const sources: Record<string, string> = {}
      for (const companyList of Object.values(partners)) {
        for (const company of companyList) {
          let imageLoaded = false
          for (const format of imageFormats) {
            if (imageLoaded) break
            const imgSrc = `/ourpartners/${company.toLowerCase().replace(/\s+/g, '-')}.${format}`
            try {
              await new Promise((resolve, reject) => {
                const img = new window.Image()
                img.onload = resolve
                img.onerror = reject
                img.src = imgSrc
              })
              imageLoaded = true
              sources[company] = imgSrc
            } catch (error) {
              console.log(error)
            }
          }
          if (!imageLoaded) {
            errors[company] = true
          }
        }
      }
      setImageErrors(errors)
      setImageSources(sources)
    }
    preloadImages()
  }, [])

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center mb-2">Our Partners alliances</h1>
          <p className="text-xl text-center text-gray-400 mb-12">
            Empowering businesses with cutting-edge solutions through strategic alliances
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(partners).map(([category, companies], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center text-gray-100">
                    <span>{category}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCategory(category)}
                      className="text-gray-100 hover:text-gray-300"
                    >
                      {expandedCategory === category ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {companies.length} trusted partners
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div
                    initial={false}
                    animate={{ height: expandedCategory === category ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {companies.map((company) => (
                        <motion.div
                          key={company}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col items-center"
                        >
                          <div className="w-24 h-24 relative mb-2">
                            {!imageErrors[company] && imageSources[company] ? (
                              <Image
                                src={imageSources[company]}
                                alt={`${company} logo`}
                                width={96}
                                height={96}
                                objectFit="contain"
                                className="rounded-lg bg-white p-2"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-gray-700 rounded-lg">
                                <span className="text-2xl font-bold text-gray-300">
                                  {company.charAt(0)}
                                </span>
                              </div>
                            )}
                          </div>
                          <span className="text-normal text-center text-gray-300 ">{company}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}