import React, { Component } from 'react'
import Product from './Components/Product';
import Pure from './Components/Pure';
import './App.css'

class App extends Component {
 render(){
  return (
    <div className='App'>
      <Product/>
      <hr/>
      <Pure/>
    </div>
  )
 }
}
export default App;