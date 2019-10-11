import React, { Fragment } from 'react';
import ReactEcharts from 'echarts-for-react';


function CurveChart (props) {
  return (
    <Fragment>
      <ReactEcharts
        option={props.option}
        style={{height: '350px', width: '1200px'}}/>
    </Fragment>
  )
}

export default CurveChart;
