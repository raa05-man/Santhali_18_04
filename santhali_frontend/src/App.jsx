import { useState } from 'react'
import Header from './components/Header_1/Header'
import Translator from './components/Translator/Translator'
import Footer from './components/Footer/Footer'
import SantaliInfo from './components/SantaliInfo/SantaliInfo'
import SantaliEnglishComparison from './components/SantaliEnglishComparison' ; 



function App() {

  return (
    <>

      <Header/>
        <Translator />
        <SantaliEnglishComparison/>
        <SantaliInfo/>
        <Footer/>
        
    </>
  )
}

export default App
