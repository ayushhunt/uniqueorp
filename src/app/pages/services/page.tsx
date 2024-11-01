'use client'
import Link from 'next/link'
import { ButtonHTMLAttributes, ReactNode, useState } from 'react'
import { ChevronDown, ChevronUp, Cloud, Shield, Server, Lock, Code, Headphones, Network, FileText, Printer, Cpu } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/Card'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'outline';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', variant = 'default' }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-md font-medium transition-colors ${variant === 'outline' ? 
      'bg-gray-800 border border-gray-600 hover:bg-gray-700 text-white' : 
      'bg-blue-600 hover:bg-blue-700 text-white'} ${className}`}
  >
    {children}
  </button>
)

const services = [
  {
    title: 'Cloud Computing',
    icon: Cloud,
    description: 'Transition your business to the cloud with scalable, secure, and efficient cloud computing solutions tailored to your needs. We offer cloud migration services, infrastructure-as-a-service (IaaS), and cloud security solutions that ensure your data is always accessible and protected.',
    minorServices: ['Public Cloud', 'Private Cloud', 'Hybrid Cloud', 'Cloud Migration', 'Cloud Security'],
  },
  {
    title: 'Network and Security',
    icon: Shield,
    description: 'Protect your critical assets with our network security services. From firewall management to intrusion detection systems, we ensure your network remains secure against ever-evolving threats.',
    minorServices: ['Network Load Balancing Management', 'Security Appliances Management', 'VPN Solutions', 'Manage LAYER-2 Devices', 'Network Monitoring'],
  },
  {
    title: 'Data Centre',
    icon: Server,
    description: 'Maximize performance with our data center management services. Whether you need support with server management, storage solutions, or power optimization, we have the tools and expertise to streamline your operations.',
    minorServices: ['Server Virtualization', 'Storage Solutions', 'Network Infrastructure', 'Power Management', 'Setup Disaster Recovery'],
  },
  {
    title: 'Cyber Security',
    icon: Lock,
    description: 'Safeguard your business from cyber threats with our proactive cybersecurity services. We offer threat monitoring, risk assessments, and incident response to ensure your business remains secure.',
    minorServices: ['Threat Detection', 'Incident Response', 'Security Audits', 'Penetration Testing', 'Security Training'],
  },
  {
    title: 'Software Development',
    icon: Code,
    description: 'Enhance your business operations with custom software solutions tailored to your needs. Our experienced developers provide enterprise software development, API integration, and automation solutions.',
    minorServices: ['Web Development', 'Mobile App Development', 'Enterprise Software', 'API Integration', 'Legacy System Modernization'],
  },
  {
    title: 'Managed Services Provider',
    icon: Headphones,
    description: 'Let us handle the day-to-day management of your IT infrastructure. From network management to data backups and disaster recovery, our managed IT services ensure that your systems run smoothly.',
    minorServices: ['Provide 24/7 IT Infrastructure Support', 'Remote Monitoring', 'Patch Management', 'Backup and Recovery', 'IT Consulting'],
  },
  {
    title: 'Active and Passive Networking',
    icon: Network,
    description: 'Optimize your IT environment with our structured cabling and networking solutions that support high-performance connectivity across your business.',
    minorServices: ['Switch And Router Configuration', 'Cabling Solutions', 'Network Optimization', 'Wireless Networks', 'Network Troubleshooting'],
  },
  {
    title: 'Software Licensing',
    icon: FileText,
    description: 'Simplify the process of acquiring and managing software with our software licensing solutions. We provide the best pricing and support for all major enterprise software licenses.',
    minorServices: ['License Optimization', 'Compliance Management', 'Volume Licensing', 'Cloud Licensing', 'License Auditing'],
  },
  {
    title: 'Enterprise Printing Solutions',
    icon: Printer,
    description: 'From managed print services to hardware reselling, our enterprise printing solutions help streamline your document management and reduce printing costs.',
    minorServices: ['Managed Print Services', 'Document Management', 'Print Security', 'Cost Optimization', 'Green Printing'],
  },
  {
    title: 'Hardware and Software Reselling',
    icon: Cpu,
    description: 'Get the best deals on the latest technology. We offer a wide range of IT hardware and software from trusted vendors, ensuring that your business is equipped with the right tools to succeed.',
    minorServices: ['Fresh Licences Of Softwares', 'Software Distribution', 'Product Consultation', 'Upgrade Services', 'Warranty Management','Upgrade Hardware And Software'],
  },
]

export default function EnhancedDarkServicePage() {
  const [expandedService, setExpandedService] = useState<number | null>(null)
  const [expandedDescription, setExpandedDescription] = useState<Record<number, boolean>>({})

  const toggleDescription = (index: number) => {
    setExpandedDescription(prev => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <header className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl font-bold mb-4 font-serif">Our IT Services</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Empowering your business with cutting-edge technology solutions for the digital age
        </p>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <service.icon className="w-8 h-8 text-blue-400" />
                  <CardTitle>{service.title}</CardTitle>
                </div>
                <CardDescription>
                  {expandedDescription[index] ? service.description : `${service.description.slice(0, 145)}...`}
                  {service.description.length > 145 && (
                    <button
                      onClick={() => toggleDescription(index)}
                      className="text-blue-400 hover:text-blue-300 ml-1 focus:outline-none"
                    >
                      {expandedDescription[index] ? 'Read Less' : 'Read More'}
                    </button>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                  className="w-full justify-between"
                  variant="outline"
                >
                  {expandedService === index ? 'Hide Services' : 'View Services'}
                  {expandedService === index ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                </Button>
                {expandedService === index && (
                  <ul className="space-y-2 text-base text-gray-300 mt-4">
                    {service.minorServices.map((minorService, idx) => (
                      <li key={idx} className="flex items-center">
                        <ChevronDown className="w-4 h-4 mr-2 text-blue-400" />
                        {minorService}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <section className="bg-blue-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-serif">Ready to transform your IT infrastructure?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Lets discuss how our services can propel your business to new heights in the digital landscape.
          </p>
          <Link 
            href="/pages/contactus" 
            className="text-black hover:text-blue px-3 py-2 rounded-xl text-lg font-medium transition-colors duration-200 ease-in-out bg-white"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  )
}
