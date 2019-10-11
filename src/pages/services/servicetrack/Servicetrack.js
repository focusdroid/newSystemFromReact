import React, { Component, Fragment } from 'react'
import CurveChart from '../../../config/charts/CurveChart'
import RoundChart from '../../../config/charts/RoundChart'
import {
  Row,
  Col
} from 'antd'
import ColumnChart from "../../../config/charts/ColumnChart";

export default class Servicetrack extends Component{
  constructor(props) {
    super(props);
    this.state = {
      curveOption: {
        title: {
          text: '不同时间段访问峰值  h/次'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,22, 23,24]
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name:'时间段访问量：',
          data: [300, 320, 315, 300, 200, 350, 1400, 1550, 5500, 9400, 10500, 9500, 8700, 9859, 8956, 7899, 5844, 9955, 15522, 23000, 8544, 7100, 5515, 2000],
          type: 'line',
          areaStyle: {},
          smooth: true
        }]
      },
      RoundOption: {
        backgroundColor: '#2c343c',
        title: {
          text: '访问内容分布',
          left: 'center',
          top: 10,
          textStyle: {
            color: '#fff'
          }
        },

        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series : [
          {
            name:'访问来源',
            type:'pie',
            radius : '70%',
            center: ['50%', '50%'],
            data:[
              {value:335, name:'国内新闻'},
              {value:310, name:'明星八卦'},
              {value:274, name:'生活日常'},
              {value:235, name:'学习阅读'},
              {value:400, name:'搜索引擎'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
              normal: {
                textStyle: {
                  color: '#fff'
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: 'rgba(255, 255, 255, 0.3)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
              }
            },
            itemStyle: {
              normal: {
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
              return Math.random() * 200;
            }
          }
        ]
      },
      ColumnOption: {
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis:  {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        series: [
          {
            name: '直接访问',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [320, 302, 301, 334, 390, 330, 320]
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [150, 212, 201, 154, 190, 330, 410]
          },
          {
            name: '搜索引擎',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
    }
  }
  render(){
    return (<Fragment>
      <CurveChart option={this.state.curveOption}/>
      <Row gutter={8}  type="flex" justify="center">
        <Col span={11}>
          <RoundChart className='mt20' option={this.state.RoundOption}/>
        </Col>
        <Col span={11}>
          <ColumnChart option={this.state.ColumnOption}/>
        </Col>
      </Row>
      <div style={{height: 100}}></div>
    </Fragment>);
  }
  componentDidMount () {
   /* console.log(this)
    console.log(this.props)
    // 通过state传递参数，在url上不显示，刷新也不会丢失参数
    console.log(this.props.location.state.id)*/
  }
}
