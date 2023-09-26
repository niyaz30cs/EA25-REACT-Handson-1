import React, { Component } from 'react'
import FunctionalCompo from './FunctionalCompo'
import ClassCompo from './ClassCompo'

class MainCompo extends Component {
    constructor(){
        super()
        this.state={
            functionClick:false,
            classClick:false
        }
    }
    render() {
        return (
            <div className='button'>
                <button className='btn1' onClick={(()=>this.setState({functionClick:!this.state.functionClick}))}>To see Styling in functional component</button>
                <button className='btn2' onClick={(()=>this.setState({classClick:!this.state.classClick}))}>To see Styling in class component</button>
                {this.state.functionClick &&  <FunctionalCompo/>}
                {this.state.classClick && <ClassCompo/>}
            </div>
        )
    }
}
export default MainCompo
