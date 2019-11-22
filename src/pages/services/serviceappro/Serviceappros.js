import React, { Component, Fragment } from 'react'
import { Card, Input, Row, Col, Table, Button } from 'antd'
import store from "../../../store";
import { getAddressList } from '../../../api/index'
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
    CardNum: 'cfq3rtqrtqr8880',
    createTime: '2019-06-18 20:59:59',
    authorization: '王旭',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
    CardNum: 'cfq3rtqrtqr8881',
    createTime: '2019-06-18 20:59:59',
    authorization: 'focusdroid',
  }
]

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: 100,
    align: 'center',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    width: 70,
    align: 'center',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
    width: 170,
    align: 'center'
  },
  {
    title: '证券号',
    dataIndex: 'CardNum',
    key: 'CardNum',
    width: 70,
    align: 'center'
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
    width: 170,
    align: 'center'
  },
  {
    title: '授权人',
    dataIndex: 'authorization',
    key: 'authorization',
    width: 170,
    align: 'center'
  }
]



export default class Serviceappros extends Component{
  constructor(props){
    super(props);
    this.state = {
      equity: '', // 权益人
      patient: '', // 就诊人
      Certificate: '', // 就诊人证件号
      Application: '', // 申请号
    }
    this.state = store.getState()
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)

    this.handleResetContent = this.handleResetContent.bind(this)
  }
  handleStoreChange () {
    this.setState(store.getState())
    console.log('-------------')
    console.log(this.state)
    console.log('-------------')
  }
  render(){
    return(
      <Fragment>
        <div className='mtb10'>
          <h1>绿通服务审批池</h1>
        </div>
        <header>
          <Card title='查询条件(r-d appro)'>
            <Row gutter={20}>
              <Col xs={24} sm={24} md={24} lg={12} xl={8}>
                <div>
                  <p>权益人</p>
                </div>
                <Input
                  value={this.state.equity}
                  placeholder="权益人"
                  allowClear={true}
                  onChange={this.getequity.bind(this)}
                />
              </Col>
              <Col xs={24} sm={24} md={24} lg={12} xl={8}>
                <div>
                  <p>就诊人</p>
                </div>
                <Input
                  value={this.state.patient}
                  placeholder="就诊人"
                  allowClear={true}
                  onChange={this.getpatient.bind(this)}
                />
              </Col>
              <Col xs={24} sm={24} md={24} lg={12} xl={8}>
                <div>
                  <p>就诊人证件号</p>
                </div>
                <Input
                  value={this.state.Certificate}
                  placeholder="就诊人证件号"
                  allowClear={true}
                  onChange={this.getCertificate.bind(this)}
                />
              </Col>
              <Col xs={24} sm={24} md={24} lg={12} xl={8}>
                <div>
                  <p>申请号</p>
                </div>
                <Input
                  value={this.state.Application}
                  placeholder="申请号"
                  allowClear={true}
                  onChange={this.getApplication.bind(this)}
                />
              </Col>
              <Col xa={24} sm={24} md={24} lg={12} xl={8} className='mt25'>
                <Button type="primary">查询</Button>
                <Button className='ml10' onClick={this.handleResetContent}>重置</Button>
              </Col>
            </Row>
          </Card>
        </header>
        <section>
          <Card title='查询结果' style={{marginTop: 20}}>
            <Table
              scroll={{ x: 1800}}
              bordered
              dataSource={dataSource}
              columns={columns}
              pagination={false}
            />
          </Card>
        </section>
      </Fragment>
    );
  }
  componentDidMount() {
    console.log(this.state)
    getAddressList().then((res) => {
      console.log(res)
    })
  }
  handleResetContent () { // 重置搜索内容
    /*equity: '', // 权益人
      patient: '', // 就诊人
      Certificate: '', // 就诊人证件号
      Application: '', // 申请号*/
    this.setState(() => ({
      equity: '',
      patient: '',
      Certificate: '',
      Application: '',
    }), () => {
      console.log(this.state.equity)
      console.log(this.state.patient)
    })
  }
  getequity (e) { // 就诊人
    let value = e.target.value
    this.setState(()=>({
      equity: value
    }), ()=>{
      console.log(this.state.equity)
    })
  }
  getpatient (e) { // 就诊人
    let value = e.target.value;
    this.setState(() => ({
      patient: value
    }), () => {
      console.log(this.state.patient)
    })
  }
  getCertificate (e) { // 就诊人证件号
    let value = e.target.value;
    this.setState(() => ({
      Certificate: value
    }), () => {
      console.log(this.state.Certificate)
    })
  }
  getApplication (e) { // Application
    let value = e.target.value;
    this.setState(() => ({
      Application: value
    }), () => {
      console.log(this.state.Application)
    })
  }
}
