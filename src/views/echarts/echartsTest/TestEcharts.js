import React, { Component, Fragment } from 'react';
import ReactEcharts from 'echarts-for-react';

export default class TestEcharts extends Component{
  render(){
    return(<Fragment>
      <ReactEcharts
        option={this.getOption}
        style={{height: '350px', width: '1000px'}}/>
    </Fragment>);
  }
  getOption = () => {
    export const option = {
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
}
