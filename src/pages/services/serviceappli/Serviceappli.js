import React, { Component, Fragment } from 'react'
import '../../../style/common.less'
import {
  Card,
  Radio,
  Row,
  Col,
  Select,
  Input,
  Table,
  Divider,
  Tag,
  Button,
  message
} from 'antd'

const RadioGroup = Radio.Group;
const Option = Select.Option;

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:;">{text}</a>
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  render: tags => (
    <span>
      {tags.map(tag => {
        let color = tag.length > 5 ? 'geekblue' : 'green';
        if (tag === 'loser') {
          color = 'volcano';
        }
        return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
      })}
    </span>
  ),
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">Invite {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  disabled: false,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  disabled: true,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  disabled: true,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];

export default class Serviceappli extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectRadio: 1,
      selectRadioSwitch: false, // true-- 第一查询条件  false---第二查询条件
      documentType: [
        {cardCode: '001', cardName: '身份证'},
        {cardCode: '002', cardName: '护照'},
        {cardCode: '003', cardName: '军官证'},
        {cardCode: '004', cardName: '驾照'},
        {cardCode: '005', cardName: '户口本'},
        {cardCode: '006', cardName: '学生证'},
        {cardCode: '007', cardName: '工作证'},
        {cardCode: '008', cardName: '无证件'},
        {cardCode: '009', cardName: '其他'},
        {cardCode: '0010', cardName: 'vip'},
      ],
      cardType: '', // 证件类型
      cardTypeClear: false,
      cardNum: '', // 证件号码
      businessList: [ // 业务系列List
        {cardCode: 'CSC', cardName: 'CSC'},
        {cardCode: 'EBA', cardName: 'EBA'},
        {cardCode: 'BAS', cardName: 'BAS'}
      ],
      businessListValue: '', // 业务系列选中的值
      InsuranceList: [
        {cardCode: '01', cardName: '北京市'},
        {cardCode: '02', cardName: '上海市'},
        {cardCode: '03', cardName: '陕西省'},
        {cardCode: '04', cardName: '西安市'},
        {cardCode: '05', cardName: '深圳市'},
        {cardCode: '06', cardName: '诸葛是'}
      ],
      InsuranceValue: '', // 分公司
      InsuranceNum: '', // 保单号
      nextStep: false,
    }
    this.onSearchTypeChange = this.onSearchTypeChange.bind(this)
    this.getCardNum = this.getCardNum.bind(this)
    this.selectBusinChange = this.selectBusinChange.bind(this)
    this.selectInsuranceChange = this.selectInsuranceChange.bind(this)
    this.getInsuranceNum = this.getInsuranceNum.bind(this)
    this.handleNextStep = this.handleNextStep.bind(this)
  }
  onSelectChange = (selectedRowKeys, ele) => { // 单选按钮
    console.log(selectedRowKeys);
    console.log(ele);
    this.setState(() => ({ // 根据关键字判断是否可以跳转
      nextStep: ele[0].disabled
    }), () =>{
      console.log(this.state.nextStep)
    })
  }
  render(){
    const rowSelection = {
      type: 'radio',
      columnWidth: 100,
      columnTitle: '序号',
      onChange: this.onSelectChange
    }
    return (<Fragment>
      <div className='mtb10'>
        <h1>绿通服务申请</h1>
      </div>
      <div>
        <Card title='健康服务查询'>
          <div>
            {/*单选按钮的切换方式start*/}
            <div className='appli-radio disflex'>
              <div className='mr20'>查询方式</div>
              <div>
                <RadioGroup
                  onChange={this.onSearchTypeChange}
                  size='large'
                  value={this.state.selectRadio}
                >
                  <Radio value={1}>A</Radio>
                  <Radio value={2}>B</Radio>
                </RadioGroup>
              </div>
            </div>
            {/*单选按钮的切换方式end*/}
            {/*查询条件start*/}
            <div className='appli-searchcondition mt20'>
              <Row gutter={16}>
                <Col xs={24} sm={12} md={12} lg={12} xl={5}>
                  <div>
                    <p>证件类型</p>
                    <div className='mt5'>
                      <Select
                        disabled={this.state.selectRadioSwitch}
                        placeholder='请选择证件类型'
                        style={{ width: '100%' }}
                        onChange={this.handleChange}
                        allowClear={true}
                      >
                        {this.state.documentType.map((item) => {
                          return <Option value={item.cardCode} key={item.cardCode}>{item.cardName}</Option>
                        })}
                      </Select>
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={5}>
                  <div>
                    <div>
                      <p>证件号码</p>
                    </div>
                    <div className='mt5'>
                      <Input
                        disabled={this.state.selectRadioSwitch}
                        placeholder="请输入证件号码"
                        value={this.state.cardNum}
                        allowClear={true}
                        onChange={this.getCardNum}
                      />
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={5}>
                  <div>
                    <div>
                      <p>业务系列</p>
                    </div>
                    <div className='mt5'>
                      <Select
                        disabled={!this.state.selectRadioSwitch}
                        placeholder='请选择业务系列'
                        style={{ width: '100%' }}
                        allowClear={true}
                        onChange={this.selectBusinChange}
                      >
                        {this.state.businessList.map((item) => {
                          return <Option value={item.cardCode} key={item.cardCode}>{item.cardName}</Option>
                        })}
                      </Select>
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={9}>
                  <div>
                    <div>
                      <p>保单号码</p>
                    </div>
                    <div className='mt5'>
                      <Row gutter={8}>
                        <Col span={12}>
                          <Select
                            disabled={!this.state.selectRadioSwitch}
                            placeholder='请选择业务系列'
                            style={{ width: '100%' }}
                            allowClear={true}
                            onChange={this.selectInsuranceChange}
                          >
                            {this.state.InsuranceList.map((item) => {
                              return <Option value={item.cardCode} key={item.cardCode}>{item.cardName}</Option>
                            })}
                          </Select>
                        </Col>
                        <Col span={12}>
                          <Input
                            disabled={!this.state.selectRadioSwitch}
                            placeholder="请输入保单号查询"
                            value={this.state.InsuranceNum}
                            allowClear={true}
                            onChange={this.getInsuranceNum}
                          />
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            {/*查询条件start*/}
          </div>
        </Card>
        <div className='mt20'>
          <Card title='查询结果'>
            <Table
              columns={columns}
              bordered
              disabled={data.disabled}
              rowSelection={rowSelection}
              pagination={false}
              dataSource={data}
            />
            <Button
              size='large'
              type='success'
              className='mt10'
              style={{float: 'right'}}
              onClick={this.handleNextStep}
            > 下一步 </Button>
          </Card>
        </div>
      </div>
    </Fragment>);
  }
  handleNextStep () {
    if (this.state.nextStep) {
      this.props.history.push({pathname: '/serviceappli/serviceapplidetail', state: {id: '00101', name: 'focusdroid'}})
    } else {
      message.warning('不符合条件')
    }
  }
  onSearchTypeChange (e) { // 查询方式的单选切换
    if (e.target.value === '1' || e.target.value === 1) {
      this.setState(() => ({
        selectRadio: e.target.value,
        selectRadioSwitch: !this.state.selectRadioSwitch
      }));
    } else if (e.target.value === '2' || e.target.value === 2) {
      this.setState(() => ({
        selectRadio: e.target.value,
        selectRadioSwitch: !this.state.selectRadioSwitch
      }), () => {
        this.setState(() => ({
          cardType: '',
          cardNum: ''
        }))
      });
    }

  }
  handleChange = (value) => { // 证件类型
    this.setState(() => ({
      cardType: value
    }))
    console.log(value);
  }
  getCardNum (e) { // 获取证件号码
    let value = e.target.value
    this.setState(() => ({
      cardNum: value
    }))
  }
  selectBusinChange (type) { // 业务系列
    this.setState(() => ({
      businessListValue: type
    }))
  }
  selectInsuranceChange (type) { // 获取分公司
    this.setState(() => ({
      InsuranceValue: type
    }))
  }
  getInsuranceNum (e) { // 获取输入的保单号
    let value = e.target.value
    this.setState(() => ({
      InsuranceNum: value
    }))
  }

}
