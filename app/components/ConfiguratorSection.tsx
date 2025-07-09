'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, RotateCcw, Share2, Download, Mail, MessageCircle, Phone } from 'lucide-react'
import StairsConfigurator from './StairsConfigurator'
import FurnitureConfigurator from './FurnitureConfigurator'

export default function ConfiguratorSection() {
  const [isOpen, setIsOpen] = useState(false)
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
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25"
          >
            Открыть конфигуратор
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gray-900 rounded-lg shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
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
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsOpen(false)}
                      className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <X className="w-6 h-6" />
                    </motion.button>
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

                <div className="h-[calc(90vh-200px)] overflow-auto">
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
} 