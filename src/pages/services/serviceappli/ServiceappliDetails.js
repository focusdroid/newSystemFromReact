import React, { Component, Fragment } from 'react'
import {
  Card, Row, Col, Input, Select, Button, message, Radio
} from 'antd'
import '../../../style/common.less'
import store from "../../../store";

const Option = Select.Option;
const RadioGroup = Radio.Group;

export default class ServiceappliDetails extends Component{
  constructor(props){
    super(props);
    this.state = {
      equityRelationship: '', // 与权益者关系
      inputRelationship: '', // 请录入关系
      patientName: '', // 就诊人姓名
      changeCityAddress: '', // 就诊人居住地
      concatName: '', // 联系人姓名
      concatPhone: '', // 联系人电话
      getselectRadioValue: '1', // 服务申请内容
      addressRegion: '', // 就诊地区
      hospitalValue: '', // 就诊医院
    }
    this.state = store.getState()
    this.handlsStoreChange = this.handlsStoreChange.bind(this)
    store.subscribe(this.handlsStoreChange)

    this.getequityRelationship = this.getequityRelationship.bind(this)
    this.getinputRelationship = this.getinputRelationship.bind(this)
    this.getpatientName = this.getpatientName.bind(this)
    this.getconcatName = this.getconcatName.bind(this)
    this.getconcatPhone = this.getconcatPhone.bind(this)
    this.VerificationConcatPhone = this.VerificationConcatPhone.bind(this)
    this.getselectRadioValue = this.getselectRadioValue.bind(this)
  }
  handlsStoreChange () {
    this.setState(store.getState())
  }
  render(){
    return (
    <Fragment>
      <div className='mtb10'>
        <h1>客户服务申请详情</h1>
      </div>
      <div>
        {/*客户服务申请信息默认显示start*/}
        <Card title='客户服务申请信息'>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={12} xl={8} className='mb20'>关联保单号：Tq39845844</Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={8} className='mb20'>服务券号：wrgbsgbff14543544</Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={8} className='mb20'>申请号：537367367367376</Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={8} className='mb20'>险种：健康险</Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={8} className='mb20'>服务项目：中级</Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={8} className='mb20'>服务方案：2019中级VIP</Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={8} className='mb20'>权益人姓名：王二小</Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={8} className='mb20'>保单生效日：2019年5月22日10:02:50</Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={8} className='mb20'>是否可转让：不可转让</Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={8} className='mb20'>客户登记：白金</Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={8} className='mb20'>服务到期时间：2020年5月22日10:03:43</Col>
          </Row>
          <Row gutter={16}>
            <Col  xs={24} sm={24} md={24} lg={12} xl={8}>
              <div>
                <p>与权益者关系</p>
              </div>
              <div>
                <Input
                  placeholder="请输入证件号码"
                  value={this.state.equityRelationship}
                  allowClear={true}
                  onChange={this.getequityRelationship}
                />
              </div>
            </Col>
            <Col  xs={24} sm={24} md={24} lg={12} xl={8}>
              <div>
                <p>与权益者关系</p>
              </div>
              <div>
                <Input
                  placeholder="请录入关系"
                  value={this.state.inputRelationship}
                  allowClear={true}
                  onChange={this.getinputRelationship}
                />
              </div>
            </Col>
            <Col  xs={24} sm={24} md={24} lg={12} xl={8}>
            <div>
              <p>与权益者关系</p>
            </div>
            <div>
              <Input
                placeholder="就诊人姓名"
                value={this.state.patientName}
                allowClear={true}
                onChange={this.getpatientName}
              />
            </div>
          </Col>
            <Col  xs={24} sm={24} md={24} lg={12} xl={8}>
              <div>
                <p>就诊人现居地</p>
              </div>
              <div>
                <Select
                  labelInValue
                  style={{ width: '100%' }}
                  onChange={this.getchangeCityAddress.bind(this)}
                >
                  {this.state.cityListVlaue.map((item)=>{
                    return <Option
                      key={item.id}
                    >{item.label}</Option>
                  })}
                </Select>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={8}>
              <div>
                <p>联系人姓名</p>
              </div>
              <div>
                <Input
                  placeholder="就诊人姓名"
                  value={this.state.concatName}
                  allowClear={true}
                  onChange={this.getconcatName}
                />
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={8}>
              <div>
                <p>联系人姓名</p>
              </div>
              <div>
                <Input
                  placeholder="就诊人电话"
                  value={this.state.concatPhone}
                  allowClear={true}
                  onChange={this.getconcatPhone}
                  onBlur={this.VerificationConcatPhone}
                />
              </div>
            </Col>
          </Row>
        </Card>
        {/*客户服务申请信息默认显示end*/}
        {/*  客户就诊信息start*/}
        <Card title='客户就诊信息' className='mt20'>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <RadioGroup onChange={this.getselectRadioValue} value={this.state.selectRadioValue}>
                <Radio value={1}>就诊通道</Radio>
                <Radio value={2}>VIP通道</Radio>
              </RadioGroup>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={8} className='mt20'>
              <div>
                <p>就诊地区</p>
              </div>
              <div>
                <Select
                  labelInValue
                  style={{ width: '100%' }}
                  onChange={this.getaddressRegion.bind(this)}
                >
                  {this.state.cityListVlaue.map((item)=>{
                    return <Option
                      key={item.id}
                    >{item.label}</Option>
                  })}
                </Select>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={8} className='mt20'>
            {/*  hospitalList*/}
              <div>
                <p>就诊医院</p>
              </div>
              <div>
                <Select
                  labelInValue
                  style={{ width: '100%' }}
                  onChange={this.gethospitalValue.bind(this)}
                >
                  {this.state.hospitalList.map((item)=>{
                    return <Option
                      key={item.id}
                    >{item.label}</Option>
                  })}
                </Select>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={8}>
              {/*<div>
                <p>科室</p>
              </div>
              <div>
                <Input
                  placeholder="科室"
                  value={this.state.addressRegion}
                  allowClear={true}
                  onChange={this.getaddressRegion}
                />
              </div>*/}
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={8}></Col>
          </Row>
        </Card>
        {/*  客户就诊信息end*/}

      </div>
    </Fragment>
    )
  }
  componentDidMount() {
    this.getthisstate()
  }
  getthisstate () {
    console.log(this.state)
  }
  getequityRelationship (e) { // 与权益者关系
    let value = e.target.value
    this.setState(() => ({
      equityRelationship: value
    }))
  }
  getinputRelationship (e) { // 请录入关系
    let value = e.target.value
    this.setState(() => ({
      inputRelationship: value
    }))
  }
  getpatientName (e) { // 就诊人姓名
    let value = e.target.value
    this.setState(() => ({
      patientName: value
    }))
  }
  getchangeCityAddress (value) { // 获取选中的居住地址
    this.setState(()=>({
      changeCityAddress: value
    }), ()=>{
      console.log(this.state.changeCityAddress)
    })
  }
  getconcatName (e) { // 联系人姓名
    let value = e.target.value
    this.setState(()=>({
      concatName: value
    }), ()=>{
      console.log(this.state.concatName)
    })
  }
  getconcatPhone (e) { // 联系人手机号
    // /^1[3456789][0-9]{9}$/.test(15701229789)
    let value = e.target.value
    this.setState(()=>({
      concatPhone: value
    }), ()=>{
      console.log(this.state.concatPhone)
    })
  }
  VerificationConcatPhone (e) { // 验证电话号码
    if (/^1[3456789][0-9]{9}$/.test(this.state.concatPhone)) {
      this.getconcatPhone(e)
    } else {
      this.setState(()=>({
        concatPhone: ''
      }), ()=>{
        message.warning('您输入正确的电话号码');
      })
    }
  }
  getselectRadioValue (e) {
    let value = e.target.value
    this.setState(()=>({
      selectRadioValue: value
    }))
  }
  getaddressRegion (value) { // 获取地区
    this.setState(()=>({
      addressRegion: value
    }), ()=>{
      console.log(this.state.addressRegion)
    })
  }
  gethospitalValue (value) { // 获取选中医院
    this.setState(()=>({
      hospitalValue: value
    }), ()=>{
      console.log(this.state.hospitalValue)
    })
  }
}
