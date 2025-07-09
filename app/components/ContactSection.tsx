'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Готовы ответить на все ваши вопросы и помочь с выбором освещения
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center glass-strong rounded-lg p-6 hover:glass transition-all duration-300"
          >
            <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gradient">Телефон</h3>
            <p className="text-gray-300">+7 (495) 123-45-67</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center glass-strong rounded-lg p-6 hover:glass transition-all duration-300"
          >
            <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gradient">Email</h3>
            <p className="text-gray-300">info@etl-automatic.ru</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center glass-strong rounded-lg p-6 hover:glass transition-all duration-300"
          >
            <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gradient">Адрес</h3>
            <p className="text-gray-300">г. Москва, ул. Примерная, д. 1</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center glass-strong rounded-lg p-6 hover:glass transition-all duration-300"
          >
            <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gradient">Режим работы</h3>
            <p className="text-gray-300">Пн-Пт: 9:00-18:00</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 