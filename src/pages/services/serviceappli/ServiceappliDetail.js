// 使用redux做todolist功能
import React, { Component, Fragment } from 'react'
import { Input, Button, Card, Row, Col, List } from 'antd'
import store from '../../../store/index'
import {
  getChangeValue,
  getAddValue,
  getDeleteItem
} from '../../../store/actionCreator'

export default class ServiceappliDetail extends Component{
  constructor(props){
    super(props);
    this.state = store.getState()
    this.handlsStoreChange = this.handlsStoreChange.bind(this)
    store.subscribe(this.handlsStoreChange)

    this.handleChangeValue = this.handleChangeValue.bind(this)
    this.handlsAddValue = this.handlsAddValue.bind(this)
  }
  handlsStoreChange () {
    this.setState(store.getState())
  }
  render(){
    return (<Fragment>
      <div>
        <header>
          <h1>客户服务申请详情{this.props.location.state.id}---{this.props.location.state.name}</h1>
        </header>
        <main>
          <Card>
            <Row gutter={8}>
              <Col span={7}>
                <Input
                  placeholder='请输入内容'
                  value={this.state.inputValue}
                  onChange={this.handleChangeValue}
                />
              </Col>
              <Col span={3}>
                <Button
                  type='warning'
                  onClick={this.handlsAddValue}
                >提交</Button>
              </Col>
              <Col span={24} className='mt20'>
                <List
                  bordered
                  locale={{emptyText: '暂无数据'}}
                  dataSource={this.state.dataList}
                  renderItem={(item, index) => (<List.Item onClick={this.handleDelete.bind(this, index)}>{item}</List.Item>)}
                />
              </Col>
            </Row>
          </Card>
        </main>
      </div>
    </Fragment>);
  }
  handleChangeValue (e) {
    /*const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value
    }*/
    const action = getChangeValue(e.target.value)
    store.dispatch(action)
  }
  handlsAddValue () {
    /*const action = {
      type: ADD_ITEM_VALUE,
    }*/
    const action = getAddValue()
    store.dispatch(action)
  }
  handleDelete (i) {
    console.log(i)
    /*const action = {
      type: DELETE_ITEM_VALUE,
      i
    }*/
    const action = getDeleteItem(i)
    store.dispatch(action)
  }
}
