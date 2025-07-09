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
      features: ['Срок службы до 50,000 часов', 'IP65 защита от влаги', 'Различные цветовые температуры', 'Энергоэффективность'],
      specs: [
        { name: 'Напряжение', value: '12V / 24V' },
        { name: 'Потребляемая мощность', value: '4.8 - 14.4 Вт/м' },
        { name: 'Цветовая температура', value: '3000K - 6500K' },
        { name: 'Степень защиты', value: 'IP20, IP65, IP67' }
      ]
    },
    {
      icon: Home,
      title: 'Системы для мебели',
      shortDescription: 'Специализированные решения для мебельного освещения',
      fullDescription: 'Комплексные системы освещения для различных типов мебели: шкафы, полки, витрины. Включают датчики открытия, диммеры и контроллеры для создания идеального освещения.',
      features: ['Датчики открытия дверей', 'Плавное включение/выключение', 'Компактные размеры', 'Простая установка'],
      specs: [
        { name: 'Тип датчиков', value: 'Инфракрасные / Геркон' },
        { name: 'Время работы после активации', value: '10 - 120 сек.' },
        { name: 'Диммирование', value: 'Да, 0-100%' },
        { name: 'Совместимость', value: 'Любой тип мебели' }
      ]
    },
    {
      icon: Lightbulb,
      title: 'Освещение лестниц',
      shortDescription: 'Автоматические системы освещения лестниц',
      fullDescription: 'Умные системы освещения лестниц с датчиками движения и плавным включением ступеней. Обеспечивают безопасность и комфорт передвижения в темное время суток.',
      features: ['Датчики движения', 'Плавное включение ступеней', 'Настраиваемые сценарии', 'Энергосбережение'],
      specs: [
        { name: 'Тип датчиков', value: 'PIR / Инфракрасные' },
        { name: 'Радиус обнаружения', value: 'до 6 метров' },
        { name: 'Световой поток', value: '280-320 лм/м' },
        { name: 'Эффект свечения', value: 'Динамический / Статический' }
      ]
    },
    {
      icon: Cpu,
      title: 'Контроллеры',
      shortDescription: 'Умные контроллеры для управления освещением',
      fullDescription: 'Современные контроллеры с микропроцессорным управлением. Поддерживают различные режимы работы, программирование сценариев и дистанционное управление.',
      features: ['Программируемые сценарии', 'Дистанционное управление', 'Защита от перегрузок', 'Компактный размер'],
      specs: [
        { name: 'Входное напряжение', value: '12V / 24V DC' },
        { name: 'Максимальная нагрузка', value: '5A на канал' },
        { name: 'Количество каналов', value: '1-4' },
        { name: 'Протоколы управления', value: 'WiFi, Bluetooth, IR' }
      ]
    },
    {
      icon: Wifi,
      title: 'Датчики движения',
      shortDescription: 'Высокочувствительные датчики для автоматизации',
      fullDescription: 'Инфракрасные датчики движения с настраиваемой чувствительностью и задержкой выключения. Надежно работают в различных условиях освещения.',
      features: ['Регулируемая чувствительность', 'Настраиваемая задержка', 'Широкий угол обзора', 'Защита от ложных срабатываний'],
      specs: [
        { name: 'Угол обзора', value: '120° - 180°' },
        { name: 'Дистанция обнаружения', value: '3-7 метров' },
        { name: 'Время задержки', value: '5-300 секунд' },
        { name: 'Рабочая температура', value: '-20°C до +45°C' }
      ]
    },
    {
      icon: Shield,
      title: 'Блоки питания',
      shortDescription: 'Надежные блоки питания для LED систем',
      fullDescription: 'Высококачественные блоки питания с защитой от перегрузок и короткого замыкания. Обеспечивают стабильную работу LED освещения.',
      features: ['Защита от перегрузок', 'Стабильное напряжение', 'Низкий нагрев', 'Долговечность'],
      specs: [
        { name: 'Входное напряжение', value: '100-240V AC' },
        { name: 'Выходное напряжение', value: '12V / 24V DC' },
        { name: 'Мощность', value: '18W - 350W' },
        { name: 'Класс защиты', value: 'IP20, IP67' }
      ]
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
              className="glass-strong rounded-lg p-6 hover:glass transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer group relative overflow-hidden"
              style={{ 
                minHeight: '280px',
                height: hoveredProduct === index ? 'auto' : '280px',
                transition: 'all 0.5s ease-in-out'
              }}
            >
              <motion.div
                animate={{ 
                  opacity: hoveredProduct === index ? 0 : 1,
                  y: hoveredProduct === index ? -20 : 0 
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 p-6 flex flex-col"
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
                
                <p className="text-gray-300 mb-4">
                  {product.shortDescription}
                </p>
              </motion.div>
              
              <motion.div
                animate={{ 
                  opacity: hoveredProduct === index ? 1 : 0,
                  y: hoveredProduct === index ? 0 : 30
                }}
                transition={{ duration: 0.3 }}
                className={`${hoveredProduct === index ? 'block' : 'hidden'}`}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mb-4"
                >
                  <product.icon className="w-12 h-12 text-blue-400" />
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-3 text-gradient">
                  {product.title}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  {product.fullDescription}
                </p>

                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Особенности:</h4>
                  <ul className="text-sm text-gray-400 space-y-1 mb-4">
                    {product.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Технические характеристики:</h4>
                  <table className="w-full text-sm">
                    <tbody>
                      {product.specs.map((spec, sIndex) => (
                        <tr key={sIndex} className={sIndex % 2 === 0 ? 'bg-gray-800/30' : ''}>
                          <td className="py-1 px-2 text-gray-300">{spec.name}</td>
                          <td className="py-1 px-2 text-gray-400">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
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