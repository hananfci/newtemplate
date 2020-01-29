import React, { Component } from 'react'
import { Link , Route} from 'react-router-dom'
import About from './../About'
import Home from './../Home'
import Portifolio from './../Portifolio'
import Porfile from './../Porfile'
import Socialmedia from './../Socialmedia'
import Footer from './../Footer'
import Work from './../Work'

class Index extends React.Component{
  render() {
  return (
    <div>
    <Home/>
    <Work/>
    <Portifolio/>
    <Porfile/>
    <About/>
    <Socialmedia/>
    <Footer/>
    </div>
  )
}
}
export default Index;
