'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Play, Video } from 'lucide-react'

export default function VideoSection() {
  return (
    <section id="video" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Видео о наших продуктах
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Посмотрите, как работают наши системы освещения в реальных условиях
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-strong rounded-lg p-6 hover:glass transition-all duration-300 group"
          >
            <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Video className="w-16 h-16 text-blue-400 opacity-30 mb-4" />
                <div className="px-4 py-2 bg-gray-800/80 rounded-lg text-center">
                  <p className="text-gray-300">Видео будет доступно позже</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300"></div>
              <Play className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-200 z-10" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gradient">Освещение лестниц</h3>
            <p className="text-gray-300">Демонстрация работы автоматического освещения лестниц с датчиками движения</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-strong rounded-lg p-6 hover:glass transition-all duration-300 group"
          >
            <div className="aspect-video bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Video className="w-16 h-16 text-blue-400 opacity-30 mb-4" />
                <div className="px-4 py-2 bg-gray-800/80 rounded-lg text-center">
                  <p className="text-gray-300">Видео будет доступно позже</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-200"></div>
              <Play className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-200 z-10" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gradient">Подсветка мебели</h3>
            <p className="text-gray-300">Умное освещение мебели с датчиками открытия и настраиваемыми сценариями</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 