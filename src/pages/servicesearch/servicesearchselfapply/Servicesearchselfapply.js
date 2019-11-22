import React, { Component, Fragment } from 'react'

export default class Servicesearchselfapply extends Component{
  constructor(props){
    super(props);
    this.state = {
      getId: ''
    }
  }
  render(){
    return (<Fragment>
      绿通申请综合查询{this.state.getId}
    </Fragment>);
  }
  componentDidMount () {
    if (this.props.location.query === undefined) {
      this.setState(() => ({
        getId: 'query参数丢失,没有获取到参数'
      }))
    } else {
      this.setState(() => ({
        getId: this.props.location.query.id
      }))
    }
  }
}
