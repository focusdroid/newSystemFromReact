import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'
import '../../../style/common.less'

export default class Backlog extends Component{
  constructor (props) {
    super(props);
    this.state = {
      id: 1101110
    }
    this.useJSStateMode = this.useJSStateMode.bind(this)
    this.useQueryMode = this.useQueryMode.bind(this)
  }
  render(){
    return (<Fragment>
      <div>
        <div className='mtb10'>
          <h1>待办事项</h1>
        </div>
        <main>
          <Link to={'/serviceappli/serviceappro/' + this.state.id}>
            <Card
              style={{marginBottom: '10px', cursor: 'pointer'}}
            >
              <div className='disflex jcsb'>
                <p>绿通服务审批待办（使用Link，在Route中书写形参）</p>
                <p>100</p>
              </div>
            </Card>
          </Link>
          <Link to={{pathname: '/serviceappli/servicetrack', state: {id: this.state.id}}}>
            <Card style={{marginBottom: '10px', cursor: 'pointer'}}>
              <div className='disflex jcsb'>
                <p>绿通服务追踪待办（使用Link，使用state传递参数）</p>
                <p>100</p>
              </div>
            </Card>
          </Link>
          <Card
            style={{marginBottom: '10px', cursor: 'pointer'}}
            onClick={this.useJSStateMode}
          >
            <div className='disflex jcsb'>
              <p>绿通服务报销申请待办(使用state%js的跳转传参)</p>
              <p>100</p>
            </div>
          </Card>
          <Link to={{pathname: '/serviceappli/reimburseapproval', query: {id: this.state.id}}}>
            <Card style={{marginBottom: '10px', cursor: 'pointer'}}>
              <div className='disflex jcsb'>
                <p>绿通服务报销审批待办(使用query，&使用Link跳转)</p>
                <p>100</p>
              </div>
            </Card>
          </Link>
          <Card
            style={{marginBottom: '10px', cursor: 'pointer'}}
            onClick={this.useQueryMode}
          >
            <div className='disflex jcsb'>
              <p>绿通服务报销审批待办(使用query，JS 跳转的方式进行传参)</p>
              <p>100</p>
            </div>
          </Card>
        </main>
      </div>
    </Fragment>);
  }
  useJSStateMode () {
    this.props.history.push({pathname: '/serviceappli/reimburseapp', state: {id: this.state.id}})
  }
  useQueryMode () {
    this.props.history.push({pathname: '/searchselfapply/searchselfapply', query: {id: this.state.id}})
  }
}
