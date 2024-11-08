'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Briefcase } from "lucide-react"

interface PortfolioItem {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  bulletPoints: string[]
}

interface PortfolioGridProps {
  items: PortfolioItem[]
}

export default function PortfolioGrid({ items }: PortfolioGridProps) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item)
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card 
            key={item.id}
            className="w-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900"
            onClick={() => openModal(item)}
          >
            <CardHeader className="relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <Briefcase className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <CardTitle className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">{item.title}</CardTitle>
              <CardDescription className="text-indigo-600 dark:text-indigo-400">{item.shortDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="mt-4 w-full">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={selectedItem !== null} onOpenChange={closeModal}>
        <DialogContent className="max-w-3xl">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">{selectedItem.title}</DialogTitle>
                <DialogDescription className="text-indigo-600 dark:text-indigo-400">{selectedItem.shortDescription}</DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <p className="text-gray-700 dark:text-gray-300">{selectedItem.fullDescription}</p>
                <ul className="mt-4 space-y-2">
                  {selectedItem.bulletPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-1 text-indigo-500">•</span>
                      <span className="text-gray-700 dark:text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}