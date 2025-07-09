'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Wrench, Truck, CheckCircle } from 'lucide-react'

export default function WorkflowSection() {
  const steps = [
    {
      icon: Phone,
      title: 'Консультация',
      description: 'Обсуждение требований и подбор оптимального решения'
    },
    {
      icon: Wrench,
      title: 'Проектирование',
      description: 'Создание индивидуального проекта освещения'
    },
    {
      icon: Truck,
      title: 'Доставка и монтаж',
      description: 'Быстрая доставка и профессиональная установка'
    },
    {
      icon: CheckCircle,
      title: 'Тестирование',
      description: 'Проверка работоспособности и обучение пользователя'
    }
  ]

  return (
    <section id="workflow" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Этапы работы
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Простой и понятный процесс от консультации до готового решения
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-strong rounded-lg p-6 text-center hover:glass transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-full">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gradient">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 