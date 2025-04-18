import { useState } from 'react'
import Header from './components/Header_1/Header'
import Translator from './components/Translator/Translator'
import Footer from './components/Footer/Footer'
import SantaliInfo from './components/SantaliInfo/SantaliInfo'



function App() {

  return (
    <>

      <Header/>
        <Translator />
        <SantaliInfo/>
        <Footer/>

    </>
  )
}

export default App
