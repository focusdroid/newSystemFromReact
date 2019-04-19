import React, { Component, Fragment } from 'react'
import './Error.less'

export default class Error extends Component{
  render(){
    return (<Fragment>
      <div>
        <h1 className='error'>404</h1>
        <p className='error-text'>您访问的资源不存在...</p>
      </div>
    </Fragment>);
  }
}
