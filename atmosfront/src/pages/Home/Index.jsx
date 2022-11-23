import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Social from '../../components/Social'

import Banner from '../../components/Cphome/Banner'
import Promorlp from '../../components/Cphome/Promorlp'
import Pdestinos from '../../components/Cphome/Pdestinos'
import Secard from '../../components/Cphome/Secard'
import Planos from '../../components/Cphome/Planos'


export default function Home() {
  
  return (
    <>
      <Header/>
      <Banner/>
      <Promorlp/>
      <Pdestinos/>
      <Secard/>
      <Planos/>
      <Social/>
      <Footer/>
    </>
  )
}