import React, { Component, Fragment } from 'react'
import { Card, Row, Col, Input, Select, DatePicker, Table, Divider, Tag } from 'antd'

const Option = Select.Option;
const { RangePicker } = DatePicker;

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  align: 'center',
  fixed: 'left',
  render: text => <div>
    <div>{text}</div>
    <div className='mt5 covers text-green'>查看明细</div>
    <div className='mt5 covers text-greenyellow'>流程展示</div>
    <div className='mt5 covers text-yellow'>分诊</div>
  </div>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  align: 'center',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  align: 'center',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  align: 'center',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  align: 'center',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  align: 'center',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
  align: 'center',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
  align: 'center',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
  align: 'center',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
  align: 'center',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
  align: 'center',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
  align: 'center',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
  align: 'center',
}, {
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  align: 'center',
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
  align: 'center',
  fixed: 'right',
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
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];


export default class Servicediag extends Component{
  constructor (props) {
    super(props);
    this.setState = {}
    this.handleChange = this.handleChange.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  onChange(date, dateString) {
    console.log(date, dateString);
  }
  render(){
    return (<Fragment>
      <div className='mtb10'>
        <h1>
          绿通服务分诊
        </h1>
      </div>
      <header>
        <div>
          <Card title='查询条件'>
            <div>
              <Row gutter={16}>
                <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
                  <p className="mb5">权益人</p>
                  <Input placeholder='权益人' allowClear/>
                </Col>
                <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
                  <p className="mb5">就诊人</p>
                  <Input placeholder='就诊人' allowClear/>
                </Col>
                <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
                  <p className="mb5">就诊人证件号</p>
                  <Input placeholder='就诊人证件号' allowClear/>
                </Col>
                <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
                  <p className="mb5">申请号</p>
                  <Input placeholder='申请号' allowClear/>
                </Col>
              </Row>
            </div>
            <div>
              <Row gutter={16}>
                <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
                  <p className="mb5">分公司</p>
                  <Select defaultValue="lucy" allowClear style={{width: '100%'}} onChange={this.handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </Col>
                <Col xs={24} sm={6} md={6} lg={6} xl={6} xxl={6}>
                  <p className="mb5">申请日期</p>
                  <RangePicker onChange={this.onChange} />
                </Col>
              </Row>
            </div>
          </Card>
        </div>
        {/*查询结果start*/}
        <section className='mt20'>
          <Card title='查询结果'>
            <Table
              scroll={{ x: 1800, y: 300 }}
              loading={false}
              bordered
              columns={columns}
              dataSource={data}
              pagination={false}
            />
          </Card>
        </section>
        {/*查询结果end*/}
      </header>
    </Fragment>);
  }
  handleChange(value) {
    console.log(`selected ${value}`);
  }
  onChange(date, dateString) {
    console.log(date, dateString);
  }
}
