'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Layers, Home, Lightbulb, Cpu, Wifi, Shield } from 'lucide-react'

export default function ProductsSection() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const products = [
    {
      icon: Layers,
      title: 'LED ленты',
      shortDescription: 'Высококачественные LED ленты для освещения',
      fullDescription: 'Профессиональные LED ленты с высокой яркостью и долговечностью. Доступны различные цветовые температуры и степени защиты. Идеально подходят для подсветки лестниц, мебели и декоративного освещения.',
      features: ['Срок службы до 50,000 часов', 'IP65 защита от влаги', 'Различные цветовые температуры', 'Энергоэффективность']
    },
    {
      icon: Home,
      title: 'Системы для мебели',
      shortDescription: 'Специализированные решения для мебельного освещения',
      fullDescription: 'Комплексные системы освещения для различных типов мебели: шкафы, полки, витрины. Включают датчики открытия, диммеры и контроллеры для создания идеального освещения.',
      features: ['Датчики открытия дверей', 'Плавное включение/выключение', 'Компактные размеры', 'Простая установка']
    },
    {
      icon: Lightbulb,
      title: 'Освещение лестниц',
      shortDescription: 'Автоматические системы освещения лестниц',
      fullDescription: 'Умные системы освещения лестниц с датчиками движения и плавным включением ступеней. Обеспечивают безопасность и комфорт передвижения в темное время суток.',
      features: ['Датчики движения', 'Плавное включение ступеней', 'Настраиваемые сценарии', 'Энергосбережение']
    },
    {
      icon: Cpu,
      title: 'Контроллеры',
      shortDescription: 'Умные контроллеры для управления освещением',
      fullDescription: 'Современные контроллеры с микропроцессорным управлением. Поддерживают различные режимы работы, программирование сценариев и дистанционное управление.',
      features: ['Программируемые сценарии', 'Дистанционное управление', 'Защита от перегрузок', 'Компактный размер']
    },
    {
      icon: Wifi,
      title: 'Датчики движения',
      shortDescription: 'Высокочувствительные датчики для автоматизации',
      fullDescription: 'Инфракрасные датчики движения с настраиваемой чувствительностью и задержкой выключения. Надежно работают в различных условиях освещения.',
      features: ['Регулируемая чувствительность', 'Настраиваемая задержка', 'Широкий угол обзора', 'Защита от ложных срабатываний']
    },
    {
      icon: Shield,
      title: 'Блоки питания',
      shortDescription: 'Надежные блоки питания для LED систем',
      fullDescription: 'Высококачественные блоки питания с защитой от перегрузок и короткого замыкания. Обеспечивают стабильную работу LED освещения.',
      features: ['Защита от перегрузок', 'Стабильное напряжение', 'Низкий нагрев', 'Долговечность']
    }
  ]

  return (
    <section id="products" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Наша продукция
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Профессиональные решения для автоматического освещения любой сложности
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="glass-strong rounded-lg p-6 hover:glass transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer hover:scale-105 group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-4"
              >
                <product.icon className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-200" />
              </motion.div>
              
              <h3 className="text-xl font-semibold mb-3 text-gradient group-hover:text-white transition-colors duration-200">
                {product.title}
              </h3>
              
              <motion.div
                initial={{ height: 'auto' }}
                animate={{ height: hoveredProduct === index ? 'auto' : 'auto' }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-gray-300 mb-4">
                  {hoveredProduct === index ? product.fullDescription : product.shortDescription}
                </p>
                
                {hoveredProduct === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2"
                  >
                    <h4 className="font-semibold text-blue-400 mb-2">Особенности:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {product.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#configurator"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25"
          >
            Создать конфигурацию
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
} 