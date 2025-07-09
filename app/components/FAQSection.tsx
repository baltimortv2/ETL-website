'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Сколько времени занимает установка?',
      answer: 'Установка системы освещения лестниц занимает 2-4 часа, мебельного освещения - 1-2 часа в зависимости от сложности проекта.'
    },
    {
      question: 'Какая гарантия на продукцию?',
      answer: 'Мы предоставляем гарантию 3 года на LED ленты, 2 года на контроллеры и датчики, 1 год на блоки питания.'
    },
    {
      question: 'Можно ли управлять освещением со смартфона?',
      answer: 'Да, при выборе WiFi контроллера вы получаете возможность управления через мобильное приложение, включая настройку сценариев и диммирование.'
    },
    {
      question: 'Безопасно ли низковольтное освещение?',
      answer: 'Абсолютно безопасно. Мы используем напряжение 12V или 24V, что полностью исключает возможность поражения электрическим током.'
    },
    {
      question: 'Можно ли установить систему в уже готовом доме?',
      answer: 'Да, наши системы можно устанавливать в уже готовых помещениях. Мы используем специальные профили и крепления, минимизирующие строительные работы.'
    },
    {
      question: 'Какой срок службы LED лент?',
      answer: 'Качественные LED ленты служат до 50,000 часов непрерывной работы, что составляет около 15-20 лет при обычном использовании.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ответы на самые популярные вопросы о наших системах освещения
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-strong rounded-lg overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-blue-400" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 