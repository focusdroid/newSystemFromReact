import React, { Component, Fragment } from 'react'
import {
  Row,
  Col,
  Select,
} from 'antd'
import MovieList from '../../../config/movieList/MovieList'
import { getHotMovie, getTop250, getSoon } from '../../../api/index'

const { Option } = Select;

export default class Servicereimburseapp extends Component{
  constructor (props) {
    super(props)
    this.state = {
      Source: {}
    }
  }
  render(){
    return (<Fragment>
      豆瓣电影实时数据查看
      <Row gutter={8}>
        <Col span={8}>
          <Select defaultValue="hot" style={{width: '100%'}} onChange={this.handleChange}>
            <Option value="hot">正在热映</Option>
            <Option value="Top250">Top250</Option>
            <Option value="soon">即将上映</Option>
          </Select>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col >
          <MovieList data={this.state.Source}/>
        </Col>
      </Row>
    </Fragment>);
  }
  componentDidMount() {
    // console.log(this.props.location.state.id)
    this.getMovieSource()
  }
  getMovieSource () { // 获取电影数据
    getHotMovie().then((res) => {
      this.setState(() => ({
        Source: res.data
      }))
    })
  }
  getTopSource () {
    getTop250().then((res) => {
      this.setState(() => ({
        Source: res.data
      }))
    })
  }
  getSoonSource () {
    getSoon().then((res) => {
      this.setState(() => ({
        Source: res.data
      }))
    })
  }
  handleChange = (value) => {
    console.log(`selected ${value}`);
    if (value === 'hot') {
      this.getMovieSource()
    } else if (value === 'Top250') {
      this.getTopSource()
    } else if (value === 'soon') {
      this.getSoonSource()
    }
  }
}
