import React, { Component, Fragment } from 'react'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Nav from './components/Nav/index'
import './style/common.less'

export default class Admin extends Component{
  render(){
    return(<Fragment>
      <div className='main'>
        <div className='main-nav'>
          <Nav>
          </Nav>
        </div>
        <div className='main-content'>
          <Header></Header>
          <div className='main-contented'>
            {this.props.children}
          </div>
          <Footer>
          </Footer>
        </div>
      </div>
    </Fragment>);
  }
}
