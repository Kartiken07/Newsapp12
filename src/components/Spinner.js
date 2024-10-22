import React, { Component } from 'react'
import loding from './loading-cargando.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loding} alt="loding" style={{height:"3rem"
        }}></img>
      </div>
    )
  }
}

export default Spinner
