import React, { Component, Fragment } from 'react'


export default class Serviceappro extends Component{
  render(){
    return (<Fragment>
      <h1>绿通服务审批{this.props.match.params.id}</h1>

    </Fragment>);
  }
  componentDidMount(){ // 接受参数的页面
    /*console.log(this.props) // 使用query接受参数
    console.log(this.props.history.location.state.id)

    console.log(this.props) // 使用state接受参数
    console.log(this.props.history.location.query.id)*/

    console.log('使用Link标签跳转，在router中写参数，使用this.props.match接收参数start')
    console.log(this.props.match.params.id)
    console.log('使用Link标签跳转，在router中写参数，使用this.props.match接收参数end')
  }
}
