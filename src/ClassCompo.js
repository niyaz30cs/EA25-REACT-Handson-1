import React, { Component } from 'react'

class ClassCompo extends Component {
  render() {
    return (
      <div className='Class'>
        <h1>This is created using class Component</h1>
        <p>This is done using external CSS</p>
        <p style={{color:"blue"}}>This is done using inline CSS</p>
      </div>
    )
  }
}
export default ClassCompo;