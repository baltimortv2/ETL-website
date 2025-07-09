'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Image as ImageIcon } from 'lucide-react'

export default function PortfolioSection() {
  const portfolioItems = [
    { title: 'Современная лестница', description: 'Автоматическое освещение ступеней' },
    { title: 'Кухонная мебель', description: 'Подсветка рабочих зон' },
    { title: 'Гардеробная', description: 'Умное освещение шкафов' },
    { title: 'Витрина магазина', description: 'Коммерческое освещение' },
    { title: 'Домашний офис', description: 'Подсветка полок и стеллажей' },
    { title: 'Спальня', description: 'Мягкое освещение мебели' }
  ]

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Портфолио наших работ
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Примеры успешно реализованных проектов освещения
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-strong rounded-lg overflow-hidden hover:glass transition-all duration-300 hover:scale-105 group"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <ImageIcon className="w-12 h-12 text-blue-400 opacity-40 mb-3" />
                  <div className="px-4 py-2 bg-gray-800/70 rounded-lg text-center">
                    <p className="text-gray-300 text-sm">Изображение будет добавлено позже</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gradient">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 