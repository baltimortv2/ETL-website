'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

export default function MapSection() {
  return (
    <section id="map" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Как нас найти
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Наш офис и склад расположены в удобном месте Москвы
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-strong rounded-lg p-8"
        >
          <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg flex items-center justify-center border border-gray-600">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Интерактивная карта</h3>
              <p className="text-gray-300">Здесь будет размещена Яндекс карта с нашим офисом</p>
              <p className="text-blue-400 mt-2">г. Москва, ул. Примерная, д. 1</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 