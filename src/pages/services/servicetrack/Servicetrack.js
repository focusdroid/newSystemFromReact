import React, { Component, Fragment } from 'react'
// import TestEcharts from '../../../views/echarts/echartsTest/TestEcharts'
import ReactEcharts from 'echarts-for-react';

export default class Servicetrack extends Component{
  constructor(props) {
    super(props);
    this.option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      };
  }
  render(){
    return (<Fragment>
      绿通服务追踪
      <ReactEcharts
        option={this.option}
        style={{height: '350px', width: '1000px'}}/>
    </Fragment>);
  }
  componentDidMount () {
   /* console.log(this)
    console.log(this.props)
    // 通过state传递参数，在url上不显示，刷新也不会丢失参数
    console.log(this.props.location.state.id)*/
  }
}
