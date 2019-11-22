import React, { useState, useEffect  } from 'react'
import { Button, Card,  List, Typography } from 'antd'
import axios from 'axios'
import '../../style/common.less'

const MoviedDetail = (props) => {
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState('banana');
  const [datas, getSource] = useState(['1', '2', '3', '4'])

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    getData(datas)
  }, [datas]);

  return (
    <div>
      <Card size="small" title="实践React-Hook基础组件" extra={<a href="#">More</a>}>
        <div>电影信息列表{props.location.state.id}--{count}</div>
        <Button onClick={() => setCount(count+1)}>数字++</Button>
      </Card>
      <Card size="small" title="useState" extra={<a href="#">More</a>} className='mt20'>
        <div>{fruit}</div>
        <Button onClick={() => setFruit(setFruits)}>数字++</Button>
      </Card>
      <Card size="small" title="useEffect" extra={<a href="#">More</a>} className='mt20'>
        <List
          bordered
          dataSource={datas}
          renderItem={item => (
            <List.Item>
              <p>{item}</p>
            </List.Item>
          )}
        />
        <Button onClick={() => getSource(getData(datas, 'clickChangeData'))}>获取数据</Button>
      </Card>
    </div>
  )
  function getData (datas, ele) {
    if (ele === 'clickChangeData') {
      datas = datas.concat(['7', '8', '8', '10'])
      return datas
    } else {
      axios.get('http://api.github.com').then((res) => {
        datas = Array.of(res.data)
        console.log(datas)
        return datas
      })
    }
  }
  function setFruits (ele) {
    switch (ele) {
      case 'banana':
        return <Test/>
      case 'apple':
        return 'banana'
      default:
        return '火龙果'
    }
  }
}

const Test = () => {
  const [number, setNumber] = useState(0)
  return (
    <div>
      <div>123---{number}</div>
      <Button onClick={() => setNumber(setNumbers(number))}>test+1</Button>
    </div>
  )
  function setNumbers (number) {
    return number +=1
  }

}

export default MoviedDetail
