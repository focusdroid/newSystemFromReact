import React, { Fragment } from 'react'
import ReactEcharts from "echarts-for-react";


function ColumnChart (props) {
  return(<Fragment>
    <ReactEcharts
      option={props.option}
      style={{height: '350px', width: '500px'}}/>
  </Fragment>);
}

export default ColumnChart;
