import { useState } from 'react'
import Header from '../header'
import Translator from './components/Translator/Translator'
import SantaliInfo from './components/SantaliInfo/SantaliInfo'


function App() {

  return (
    <>

      <Header/>
        <Translator />
        <SantaliInfo/>

    </>
  )
}

export default App
