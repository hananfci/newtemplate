import React, { Component } from 'react'
import { Link , Route} from 'react-router-dom'
import Index from './component/Index'
import Contact from './component/Contact'
import Navbar from './component/Navbar'
import './App.css'

class App extends React.Component{
  render() {
            return (
              <div>
                
                  <Navbar/>
                <Route exact path='/' component={Index} />
                <Route  path='/Contact' component={Contact} />
    

              </div>
            )
          
         }
}





export default App;
