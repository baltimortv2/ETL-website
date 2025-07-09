'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Check, QrCode, Mail, MessageCircle, Phone, Plus, Minus, Box, BookOpen, ShoppingBag, Archive, Package } from 'lucide-react'
import QRCode from 'react-qr-code'

interface FurnitureItem {
  type: string
  count: number
  shelves: { width: number; depth: number }[]
}

interface FurnitureConfig {
  items: FurnitureItem[]
  ledType: string
  ledColor: string
  controller: string
}

interface Props {
  onSelectionChange: (hasSelections: boolean) => void
}

export default function FurnitureConfigurator({ onSelectionChange }: Props) {
  const [currentStep, setCurrentStep] = useState(1)
  const [config, setConfig] = useState<FurnitureConfig>({
    items: [],
    ledType: '',
    ledColor: '',
    controller: ''
  })
  const [selectedItemIndex, setSelectedItemIndex] = useState(0)
  const [selectedShelfIndex, setSelectedShelfIndex] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [orderNumber, setOrderNumber] = useState('')

  const steps = [
    'Выбор мебели',
    'Количество полок',
    'Размеры полок',
    'Тип ленты и оттенок',
    'Контроллер',
    'Итог и заказ'
  ]

  const furnitureTypes = [
    { name: 'Шкаф', basePrice: 5000, icon: Box },
    { name: 'Стеллаж', basePrice: 3000, icon: BookOpen },
    { name: 'Витрина', basePrice: 7000, icon: ShoppingBag },
    { name: 'Комод', basePrice: 4000, icon: Archive },
    { name: 'Тумба', basePrice: 2500, icon: Package }
  ]

  const ledTypes = [
    { name: 'Стандартная 12V', price: 600, description: 'Для внутренней подсветки' },
    { name: 'Премиум 24V', price: 900, description: 'Повышенная яркость' },
    { name: 'RGB 12V', price: 1200, description: 'Цветная подсветка' }
  ]

  const ledColors = [
    { name: 'Теплый белый', value: 'warm-white' },
    { name: 'Холодный белый', value: 'cold-white' },
    { name: 'Дневной белый', value: 'day-white' },
    { name: 'RGB', value: 'rgb' }
  ]

  const controllers = [
    { name: 'Датчик открытия', price: 1500, description: 'Включение при открытии дверей' },
    { name: 'Умный контроллер', price: 3000, description: 'Диммер и сценарии' },
    { name: 'WiFi контроллер', price: 4500, description: 'Дистанционное управление' }
  ]

  useEffect(() => {
    calculatePrice()
    checkSelections()
  }, [config])

  const calculatePrice = () => {
    let price = 0
    
    config.items.forEach(item => {
      const furniture = furnitureTypes.find(f => f.name === item.type)
      if (furniture) {
        price += furniture.basePrice * item.count
        price += item.shelves.length * 500 * item.count
      }
    })
    
    const ledType = ledTypes.find(t => t.name === config.ledType)
    const controller = controllers.find(c => c.name === config.controller)
    
    if (ledType) {
      const totalShelves = config.items.reduce((sum, item) => sum + item.shelves.length * item.count, 0)
      price += ledType.price * totalShelves
    }
    if (controller) price += controller.price

    setTotalPrice(price)
  }

  const checkSelections = () => {
    const hasSelections = config.items.length > 0 || !!config.ledType || !!config.controller
    onSelectionChange(hasSelections)
  }

  const generateOrderNumber = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    let result = 'LM-'
    
    for (let i = 0; i < 6; i++) {
      result += numbers.charAt(Math.floor(Math.random() * numbers.length))
    }
    
    return result
  }

  const addFurnitureItem = (type: string) => {
    const newItem: FurnitureItem = {
      type,
      count: 1,
      shelves: [{ width: 60, depth: 30 }]
    }
    setConfig(prev => ({
      ...prev,
      items: [...prev.items, newItem]
    }))
  }

  const updateItemCount = (index: number, count: number) => {
    const newItems = [...config.items]
    newItems[index].count = Math.max(1, count)
    setConfig(prev => ({ ...prev, items: newItems }))
  }

  const updateShelfCount = (itemIndex: number, count: number) => {
    const newItems = [...config.items]
    const currentShelves = newItems[itemIndex].shelves
    
    if (count > currentShelves.length) {
      const newShelves = [...currentShelves]
      while (newShelves.length < count) {
        newShelves.push({ width: 60, depth: 30 })
      }
      newItems[itemIndex].shelves = newShelves
    } else if (count < currentShelves.length) {
      newItems[itemIndex].shelves = currentShelves.slice(0, count)
    }
    
    setConfig(prev => ({ ...prev, items: newItems }))
  }

  const updateShelfSize = (itemIndex: number, shelfIndex: number, dimension: 'width' | 'depth', value: number) => {
    const newItems = [...config.items]
    newItems[itemIndex].shelves[shelfIndex][dimension] = value
    setConfig(prev => ({ ...prev, items: newItems }))
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return config.items.length > 0
      case 2:
        return config.items.every(item => item.shelves.length > 0)
      case 3:
        return true
      case 4:
        return config.ledType && config.ledColor
      case 5:
        return config.controller
      default:
        return true
    }
  }

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1)
    }
    if (currentStep === 5) {
      setOrderNumber(generateOrderNumber())
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderFurnitureIllustration = () => {
    if (!config.items[selectedItemIndex]) return null;
    
    const selectedItem = config.items[selectedItemIndex];
    const itemType = selectedItem.type;
    const shelvesCount = selectedItem.shelves.length;
    const currentShelf = selectedItem.shelves[selectedShelfIndex] || { width: 60, depth: 30 };
    
    return (
      <div className="bg-gray-800 rounded-lg p-4 mb-4">
        <h4 className="text-blue-400 font-semibold mb-3">Иллюстрация: {itemType} #{selectedItemIndex + 1}</h4>
        <div className="relative bg-gray-700 rounded-lg overflow-hidden" style={{ height: '200px' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Изображение мебели */}
              <div className="mb-4">
                {getFurnitureIcon(itemType, "w-16 h-16 text-blue-400 mx-auto")}
              </div>
              
              {/* Размеры */}
              <div className="text-center">
                <div className="mb-2">
                  <span className="text-gray-300">Полок: {shelvesCount}</span>
                </div>
                <div className="flex justify-center space-x-4">
                  <div className="text-center">
                    <div className="w-8 h-1 bg-blue-500 mx-auto mb-1"></div>
                    <span className="text-sm text-gray-300">{currentShelf.width} см</span>
                  </div>
                  <div className="text-center">
                    <div className="w-1 h-8 bg-blue-500 mx-auto mb-1"></div>
                    <span className="text-sm text-gray-300">{currentShelf.depth} см</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const getFurnitureIcon = (type: string, className: string = "w-12 h-12") => {
    const furniture = furnitureTypes.find(f => f.name === type);
    if (furniture) {
      const IconComponent = furniture.icon;
      return <IconComponent className={className} />;
    }
    return <Box className={className} />;
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {furnitureTypes.map((furniture, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => addFurnitureItem(furniture.name)}
                  className="p-4 bg-gray-700 rounded-lg border-2 border-gray-600 hover:border-blue-500 cursor-pointer transition-all duration-200 text-center"
                >
                  <furniture.icon className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                  <h5 className="font-semibold text-white">{furniture.name}</h5>
                  <p className="text-blue-400 text-sm">{furniture.basePrice}₽</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-blue-400 mb-4">Выбранная мебель:</h4>
              <div className="space-y-3">
                {config.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between p-4 bg-gray-700 rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      {getFurnitureIcon(item.type, "w-8 h-8 text-blue-400")}
                      <div>
                        <h5 className="font-semibold text-white">{item.type} #{index + 1}</h5>
                        <p className="text-gray-300">Количество: {item.count}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateItemCount(index, item.count - 1)}
                        className="p-1 bg-gray-600 rounded hover:bg-gray-500 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-white w-8 text-center">{item.count}</span>
                      <button
                        onClick={() => updateItemCount(index, item.count + 1)}
                        className="p-1 bg-gray-600 rounded hover:bg-gray-500 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )
      
      case 2:
        return (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-blue-400 mb-4">Настройка количества полок:</h4>
            {config.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-gray-700 rounded-lg"
              >
                <h5 className="font-semibold text-white mb-3">{item.type} #{index + 1} (x{item.count})</h5>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-300">Полок:</span>
                  <button
                    onClick={() => updateShelfCount(index, item.shelves.length - 1)}
                    className="p-1 bg-gray-600 rounded hover:bg-gray-500 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-white w-8 text-center">{item.shelves.length}</span>
                  <button
                    onClick={() => updateShelfCount(index, item.shelves.length + 1)}
                    className="p-1 bg-gray-600 rounded hover:bg-gray-500 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )
      
      case 3:
        return (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-blue-400 mb-4">Настройка размеров полок:</h4>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                {renderFurnitureIllustration()}
                
                <h5 className="font-semibold text-white mb-3">Выберите элемент:</h5>
                <div className="space-y-2">
                  {config.items.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedItemIndex(index)}
                      className={`w-full p-3 rounded-lg text-left transition-colors ${
                        selectedItemIndex === index ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
                      }`}
                    >
                      {item.type} #{index + 1}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                {config.items[selectedItemIndex] && (
                  <div>
                    <h5 className="font-semibold text-white mb-3">Полки для {config.items[selectedItemIndex].type} #{selectedItemIndex + 1}:</h5>
                    <div className="space-y-3">
                      {config.items[selectedItemIndex].shelves.map((shelf, shelfIndex) => (
                        <div
                          key={shelfIndex}
                          className={`p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                            selectedShelfIndex === shelfIndex ? 'border-blue-500 bg-blue-900/20' : 'border-gray-600'
                          }`}
                          onClick={() => setSelectedShelfIndex(shelfIndex)}
                        >
                          <h6 className="font-semibold text-white mb-2">Полка {shelfIndex + 1}</h6>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <span className="text-gray-300 w-16">Ширина:</span>
                              <input
                                type="range"
                                min="30"
                                max="120"
                                value={shelf.width}
                                onChange={(e) => updateShelfSize(selectedItemIndex, shelfIndex, 'width', parseInt(e.target.value))}
                                className="flex-1"
                              />
                              <span className="text-blue-400 w-12">{shelf.width}см</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-gray-300 w-16">Глубина:</span>
                              <input
                                type="range"
                                min="20"
                                max="60"
                                value={shelf.depth}
                                onChange={(e) => updateShelfSize(selectedItemIndex, shelfIndex, 'depth', parseInt(e.target.value))}
                                className="flex-1"
                              />
                              <span className="text-blue-400 w-12">{shelf.depth}см</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      
      case 4:
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
                    <p className="text-blue-400 font-semibold mt-2">{type.price}₽/полка</p>
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
      
      case 5:
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
      
      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-gradient mb-4">Заказ готов!</h4>
              <p className="text-gray-300 mb-6">Ваша конфигурация освещения мебели</p>
              
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
            <h3 className="text-xl font-bold text-white">Конфигуратор мебели</h3>
            <span className="text-sm text-gray-400">Шаг {currentStep} из 6</span>
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
            disabled={!canProceed() || currentStep === 6}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors duration-200 ${
              !canProceed() || currentStep === 6
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            <span>{currentStep === 5 ? 'Завершить' : 'Далее'}</span>
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
      
      <div className="w-80 bg-gray-800 p-6 border-l border-gray-700">
        <h4 className="text-lg font-semibold text-blue-400 mb-4">Выбранные параметры</h4>
        
        <div className="space-y-4 mb-6">
          <div className="p-4 bg-gray-700 rounded-lg">
            <h5 className="font-semibold text-white mb-2">Мебель</h5>
            <div className="space-y-2">
              {config.items.map((item, index) => (
                <div key={index} className="text-sm">
                  <p className="text-gray-300">{item.type} #{index + 1}</p>
                  <p className="text-gray-400">Количество: {item.count}</p>
                  <p className="text-gray-400">Полок: {item.shelves.length}</p>
                </div>
              ))}
            </div>
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