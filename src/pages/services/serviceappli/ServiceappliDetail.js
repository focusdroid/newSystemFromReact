import React, { Component, Fragment } from 'react'


export default class ServiceappliDetail extends Component{
  render(){
    return (<Fragment>
      <div>
        <header>
          <h1>客户服务申请详情{this.props.location.state.id}---{this.props.location.state.name}</h1>
        </header>
      </div>
    </Fragment>);
  }
}
