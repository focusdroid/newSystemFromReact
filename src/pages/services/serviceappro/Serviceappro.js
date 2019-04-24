import React, { Component, Fragment } from 'react'
import { Input, Button, Card, Row, Col, List } from 'antd'
import { connect } from 'react-redux'

class Serviceappro extends Component{
  render(){
    const { inputValue2, dataList2, changeInputValue, addItemValue } = this.props
    return (<Fragment>
      <header>
        <h1>绿通服务审批</h1>
      </header>
      <main>
        <Card>
          <Row gutter={8}>
            <Col span={7}>
              <Input
                placeholder='请输入内容'
                value={inputValue2}
                onChange={changeInputValue}
              />
            </Col>
            <Col span={3}>
              <Button
                type='warning'
                onClick={addItemValue}
              >提交</Button>
            </Col>
            <Col span={24} className='mt20'>
              <List
                bordered
                locale={{emptyText: '暂无数据'}}
                dataSource={dataList2}
                renderItem={(item, i) => (<List.Item onClick={this.props.deleteItem.bind(this, i)}>{item}</List.Item>)}
              />
            </Col>
          </Row>
        </Card>
      </main>
    </Fragment>);
  }
}
// 接受store里边的值
const mapStateToProps = (state) => {
  return {
    inputValue2: state.inputValue2,
    dataList2: state.dataList2
  }
}

// 方法执行的区间
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue (e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    addItemValue () {
      const action = {
        type: 'add_item_value',
      }
      dispatch(action)
    },
    deleteItem (i) {
      console.log(i)
      const action = {
        type: 'delete_item',
        i
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Serviceappro)
