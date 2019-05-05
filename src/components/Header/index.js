import React, { Component, Fragment } from 'react'
import { Card } from 'antd'
import './index.less'

export default class Header extends Component{
  render(){
    return(<Fragment>
      <Card>
        <div>
          <div className='float-left'>
            <p>THM绿通服务系统</p>
            <p>Green communication service system</p>
          </div>
          <div className='float-right'>
            <p>机构：集团内部 <span>退出登录</span></p>
            <p>当前用户： gcmuser</p>
          </div>
        </div>
      </Card>
    </Fragment>);
  }
}
