'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Check, QrCode, Mail, MessageCircle, Phone } from 'lucide-react'
import QRCode from 'react-qr-code'

interface StairsConfig {
  stairsCount: number
  stairsLengths: number[]
  ledType: string
  ledColor: string
  controller: string
  sensor: string
}

interface Props {
  onSelectionChange: (hasSelections: boolean) => void
}

export default function StairsConfigurator({ onSelectionChange }: Props) {
  const [currentStep, setCurrentStep] = useState(1)
  const [config, setConfig] = useState<StairsConfig>({
    stairsCount: 1,
    stairsLengths: [1],
    ledType: '',
    ledColor: '',
    controller: '',
    sensor: ''
  })
  const [totalPrice, setTotalPrice] = useState(0)
  const [orderNumber, setOrderNumber] = useState('')

  const steps = [
    'Количество лестниц',
    'Тип ленты и оттенок',
    'Контроллер',
    'Датчик',
    'Итог и заказ'
  ]

  const ledTypes = [
    { name: 'Стандартная 12V', price: 800, description: 'Базовое решение для дома' },
    { name: 'Премиум 24V', price: 1200, description: 'Повышенная яркость' },
    { name: 'RGB 12V', price: 1500, description: 'Цветная подсветка' }
  ]

  const ledColors = [
    { name: 'Теплый белый', value: 'warm-white' },
    { name: 'Холодный белый', value: 'cold-white' },
    { name: 'Дневной белый', value: 'day-white' },
    { name: 'RGB', value: 'rgb' }
  ]

  const controllers = [
    { name: 'Базовый контроллер', price: 2500, description: 'Простое управление' },
    { name: 'Умный контроллер', price: 4000, description: 'Программируемые сценарии' },
    { name: 'WiFi контроллер', price: 5500, description: 'Дистанционное управление' }
  ]

  const sensors = [
    { name: 'PIR датчик', price: 1200, description: 'Базовый датчик движения' },
    { name: 'Микроволновый датчик', price: 1800, description: 'Повышенная чувствительность' },
    { name: 'Комбинированный датчик', price: 2500, description: 'Два типа датчиков' }
  ]

  useEffect(() => {
    calculatePrice()
    checkSelections()
  }, [config])

  const calculatePrice = () => {
    let price = 0
    
    const ledType = ledTypes.find(t => t.name === config.ledType)
    const controller = controllers.find(c => c.name === config.controller)
    const sensor = sensors.find(s => s.name === config.sensor)
    
    if (ledType) {
      price += ledType.price * config.stairsLengths.reduce((sum, length) => sum + length, 0)
    }
    if (controller) price += controller.price
    if (sensor) price += sensor.price

    setTotalPrice(price)
  }

  const checkSelections = () => {
    const hasSelections = config.stairsCount > 0 || !!config.ledType || !!config.controller || !!config.sensor
    onSelectionChange(hasSelections)
  }

  const generateOrderNumber = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    let result = ''
    
    for (let i = 0; i < 2; i++) {
      result += letters.charAt(Math.floor(Math.random() * letters.length))
    }
    result += '-'
    for (let i = 0; i < 6; i++) {
      result += numbers.charAt(Math.floor(Math.random() * numbers.length))
    }
    
    return result
  }

  const handleStairsCountChange = (count: number) => {
    const newLengths = Array(count).fill(1)
    setConfig(prev => ({ ...prev, stairsCount: count, stairsLengths: newLengths }))
  }

  const handleLengthChange = (index: number, length: number) => {
    const newLengths = [...config.stairsLengths]
    newLengths[index] = length
    setConfig(prev => ({ ...prev, stairsLengths: newLengths }))
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return config.stairsCount > 0
      case 2:
        return config.ledType && config.ledColor
      case 3:
        return config.controller
      case 4:
        return config.sensor
      default:
        return true
    }
  }

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
    if (currentStep === 4) {
      setOrderNumber(generateOrderNumber())
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Количество лестниц: {config.stairsCount}
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={config.stairsCount}
                onChange={(e) => handleStairsCountChange(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
            
            <AnimatePresence>
              {config.stairsCount > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h4 className="text-lg font-semibold text-blue-400">Длина каждой лестницы (метры):</h4>
                  {config.stairsLengths.map((length, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-4"
                    >
                      <span className="text-gray-300 w-20">Лестница {index + 1}:</span>
                      <input
                        type="range"
                        min="1"
                        max="20"
                        value={length}
                        onChange={(e) => handleLengthChange(index, parseInt(e.target.value))}
                        className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <span className="text-blue-400 w-12 text-right">{length}м</span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-4">Выберите тип ленты:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ledTypes.map((type) => (
                  <motion.div
                    key={type.name}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setConfig(prev => ({ ...prev, ledType: type.name }))}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      config.ledType === type.name
                        ? 'border-blue-500 bg-blue-900/20'
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                  >
                    <h5 className="font-semibold text-white">{type.name}</h5>
                    <p className="text-gray-300 text-sm">{type.description}</p>
                    <p className="text-blue-400 font-semibold mt-2">{type.price}₽/м</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-4">Выберите оттенок:</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {ledColors.map((color) => (
                  <motion.div
                    key={color.value}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setConfig(prev => ({ ...prev, ledColor: color.value }))}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      config.ledColor === color.value
                        ? 'border-blue-500 bg-blue-900/20'
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                  >
                    <h5 className="font-semibold text-white">{color.name}</h5>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )
      
      case 3:
        return (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-blue-400 mb-4">Выберите контроллер:</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {controllers.map((controller) => (
                <motion.div
                  key={controller.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setConfig(prev => ({ ...prev, controller: controller.name }))}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    config.controller === controller.name
                      ? 'border-blue-500 bg-blue-900/20'
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                >
                  <h5 className="font-semibold text-white">{controller.name}</h5>
                  <p className="text-gray-300 text-sm">{controller.description}</p>
                  <p className="text-blue-400 font-semibold mt-2">{controller.price}₽</p>
                </motion.div>
              ))}
            </div>
          </div>
        )
      
      case 4:
        return (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-blue-400 mb-4">Выберите датчик:</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sensors.map((sensor) => (
                <motion.div
                  key={sensor.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setConfig(prev => ({ ...prev, sensor: sensor.name }))}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    config.sensor === sensor.name
                      ? 'border-blue-500 bg-blue-900/20'
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                >
                  <h5 className="font-semibold text-white">{sensor.name}</h5>
                  <p className="text-gray-300 text-sm">{sensor.description}</p>
                  <p className="text-blue-400 font-semibold mt-2">{sensor.price}₽</p>
                </motion.div>
              ))}
            </div>
          </div>
        )
      
      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-gradient mb-4">Заказ готов!</h4>
              <p className="text-gray-300 mb-6">Ваша конфигурация освещения лестниц</p>
              
              <div className="bg-white p-4 rounded-lg inline-block mb-6">
                <QRCode value={`ETL-${orderNumber}`} size={128} />
              </div>
              
              <p className="text-lg font-semibold text-blue-400 mb-4">Номер заказа: {orderNumber}</p>
              <p className="text-2xl font-bold text-gradient mb-6">Итого: {totalPrice.toLocaleString()}₽</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <span>Отправить на почту</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200"
                >
                  <Phone className="w-5 h-5" />
                  <span>Позвонить</span>
                </motion.button>
              </div>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="flex h-full">
      <div className="flex-1 p-6">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">Конфигуратор лестниц</h3>
            <span className="text-sm text-gray-400">Шаг {currentStep} из 5</span>
          </div>
          
          <div className="flex space-x-2 mb-6">
            {steps.map((step, index) => (
              <div key={index} className="flex-1 flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  index + 1 === currentStep
                    ? 'bg-blue-600 text-white'
                    : index + 1 < currentStep
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-700 text-gray-400'
                }`}>
                  {index + 1 < currentStep ? <Check className="w-4 h-4" /> : index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 ml-2 ${
                    index + 1 < currentStep ? 'bg-green-600' : 'bg-gray-700'
                  }`} />
                )}
              </div>
            ))}
          </div>
          
          <h4 className="text-lg font-semibold text-blue-400 mb-4">{steps[currentStep - 1]}</h4>
        </div>
        
        <div className="mb-6">
          {renderStep()}
        </div>
        
        <div className="flex justify-between">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors duration-200 ${
              currentStep === 1
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gray-600 text-white hover:bg-gray-500'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Назад</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextStep}
            disabled={!canProceed() || currentStep === 5}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors duration-200 ${
              !canProceed() || currentStep === 5
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            <span>{currentStep === 4 ? 'Завершить' : 'Далее'}</span>
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
      
      <div className="w-80 bg-gray-800 p-6 border-l border-gray-700">
        <h4 className="text-lg font-semibold text-blue-400 mb-4">Выбранные параметры</h4>
        
        <div className="space-y-4 mb-6">
          <div className="p-4 bg-gray-700 rounded-lg">
            <h5 className="font-semibold text-white mb-2">Лестницы</h5>
            <p className="text-gray-300">Количество: {config.stairsCount}</p>
            <p className="text-gray-300">Общая длина: {config.stairsLengths.reduce((sum, length) => sum + length, 0)}м</p>
          </div>
          
          {config.ledType && (
            <div className="p-4 bg-gray-700 rounded-lg">
              <h5 className="font-semibold text-white mb-2">LED лента</h5>
              <p className="text-gray-300">{config.ledType}</p>
              <p className="text-gray-300">Цвет: {ledColors.find(c => c.value === config.ledColor)?.name}</p>
            </div>
          )}
          
          {config.controller && (
            <div className="p-4 bg-gray-700 rounded-lg">
              <h5 className="font-semibold text-white mb-2">Контроллер</h5>
              <p className="text-gray-300">{config.controller}</p>
            </div>
          )}
          
          {config.sensor && (
            <div className="p-4 bg-gray-700 rounded-lg">
              <h5 className="font-semibold text-white mb-2">Датчик</h5>
              <p className="text-gray-300">{config.sensor}</p>
            </div>
          )}
        </div>
        
        <div className="border-t border-gray-600 pt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-white">Итого:</span>
            <span className="text-xl font-bold text-gradient">{totalPrice.toLocaleString()}₽</span>
          </div>
        </div>
      </div>
    </div>
  )
} 