import React, { Component, Fragment } from 'react'

export default class Servicereimburseapp extends Component{
  render(){
    return (<Fragment>
      绿通服务报销申请{this.props.location.state.id}
    </Fragment>);
  }
  componentDidMount() {
    console.log(this.props.location.state.id)
  }
}
