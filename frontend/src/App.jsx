// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import AboutPage from './landing_page/about/AboutPage'
import HomePage from './landing_page/home/HomePage'
import Navbar from './landing_page/Navbar'
import PricingPage from './landing_page/pricing/PricingPage'
import ProductPage from './landing_page/products/ProductPage'
import Signup from './landing_page/signup/Signup'
import SupportPage from './landing_page/support/SupportPage'

function App() {

  return (
    <>
    <Navbar />
    <HomePage />
    {/* <AboutPage />
    <PricingPage />
    <ProductPage />
    <Signup />
    <SupportPage /> */}
    </>
  )
}

export default App;
