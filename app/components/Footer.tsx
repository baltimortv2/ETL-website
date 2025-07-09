'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-8 h-8">
                <Image
                  src="/logo.svg"
                  alt="ETL Automatic"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-gradient">ETL Automatic</span>
            </div>
            <p className="text-gray-300 mb-4">
              Профессиональные решения для автоматического освещения лестниц и мебели
            </p>
            <p className="text-gray-400 text-sm">
              © 2024 ETL Automatic. Все права защищены.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Быстрые ссылки</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-white transition-colors">Главная</a>
              <a href="#products" className="block text-gray-300 hover:text-white transition-colors">Продукция</a>
              <a href="#configurator" className="block text-gray-300 hover:text-white transition-colors">Конфигуратор</a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">Контакты</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@etl-automatic.ru</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">г. Москва, ул. Примерная, д. 1</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
} 