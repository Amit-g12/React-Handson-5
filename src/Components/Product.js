import React, { Component } from 'react'
import withFind from './hoc';


class Product extends Component {
    render(){
  return (
   
    <div className='lists'>
    
     {
        this.props.products.map(items =>{
            return(   
                <h5>{items.pName}  Rs.{items.price} {items.color}</h5>
            )
        })
     }
    </div>
   
  )
}
}
export default withFind(Product);