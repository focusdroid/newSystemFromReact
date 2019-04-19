import React, { Component, Fragment } from 'react'
import '../../../style/common.less'
import { Card, Radio } from 'antd'

const RadioGroup = Radio.Group;

export default class Serviceappli extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: '',
    }
  }
  render(){
    return (<Fragment>
      <div className='mtb10'>
        <h1>绿通服务申请</h1>
      </div>
      <div>
        <Card title='健康服务查询'>
          <div>
            <div className='appli-radio disflex'>
              <div className='mr20'>查询方式</div>
              <div>
                <RadioGroup
                  onChange={this.onChange}
                  size='large'
                  value={this.state.value}
                >
                  <Radio value={1}>A</Radio>
                  <Radio value={2}>B</Radio>
                </RadioGroup>
              </div>
            </div>
            <div className='appli-searchcondition'>

            </div>
          </div>
        </Card>
      </div>
    </Fragment>);
  }
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

}
