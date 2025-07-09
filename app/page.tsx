'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProductsSection from './components/ProductsSection'
import VideoSection from './components/VideoSection'
import WorkflowSection from './components/WorkflowSection'
import ConfiguratorSection from './components/ConfiguratorSection'
import FAQSection from './components/FAQSection'
import PortfolioSection from './components/PortfolioSection'
import ContactSection from './components/ContactSection'
import MapSection from './components/MapSection'
import Footer from './components/Footer'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Header />
      <HeroSection />
      <ProductsSection />
      <VideoSection />
      <WorkflowSection />
      <ConfiguratorSection />
      <FAQSection />
      <PortfolioSection />
      <ContactSection />
      <MapSection />
      <Footer />
    </main>
  )
} 