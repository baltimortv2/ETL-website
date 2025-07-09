'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RotateCcw, Share2, Download, Mail, MessageCircle, Phone } from 'lucide-react'
import StairsConfigurator from './StairsConfigurator'
import FurnitureConfigurator from './FurnitureConfigurator'

export default function ConfiguratorSection() {
  const [activeTab, setActiveTab] = useState<'stairs' | 'furniture'>('stairs')
  const [hasSelections, setHasSelections] = useState(false)

  const handleReset = () => {
    if (window.confirm('Вы уверены, что хотите сбросить все настройки?')) {
      window.location.reload()
    }
  }

  return (
    <section id="configurator" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Конфигуратор
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Создайте идеальное решение для вашего освещения
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden max-w-6xl mx-auto"
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <h3 className="text-2xl font-bold text-gradient">Конфигуратор ETL</h3>
            <div className="flex items-center space-x-4">
              {hasSelections && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleReset}
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                  title="Сбросить настройки"
                >
                  <RotateCcw className="w-5 h-5" />
                </motion.button>
              )}
            </div>
          </div>

          <div className="flex border-b border-gray-700">
            <button
              onClick={() => setActiveTab('stairs')}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-colors duration-200 ${
                activeTab === 'stairs'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              Лестницы
            </button>
            <button
              onClick={() => setActiveTab('furniture')}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-colors duration-200 ${
                activeTab === 'furniture'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              Мебель
            </button>
          </div>

          <div className="min-h-[600px]">
            <AnimatePresence mode="wait">
              {activeTab === 'stairs' && (
                <motion.div
                  key="stairs"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <StairsConfigurator onSelectionChange={setHasSelections} />
                </motion.div>
              )}
              {activeTab === 'furniture' && (
                <motion.div
                  key="furniture"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <FurnitureConfigurator onSelectionChange={setHasSelections} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 