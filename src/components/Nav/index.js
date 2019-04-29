import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import meunConfig from '../../config/meunConfig'
import {Layout, Menu, Icon } from 'antd';
import './index.less'
const {
  Sider,
} = Layout;
// const SubMenu = Menu.SubMenu;
const SubMenu = Menu.SubMenu;

export default class Nav extends Component{
  constructor (props) {
    super(props);
    this.state = {
      MeunTreeNode: []
    }
  }
  componentDidMount () {
    const MeunTreeNode = this.randerMeun(meunConfig)
    this.setState(()=> ({
      MeunTreeNode
    }))
  }
  randerMeun = (data) => { // 菜单渲染
    return data.map((item, i) => {
      if (item.children) {
        return ( //
            <SubMenu title={<span><Icon type={item.icon} /><span>{item.title}</span></span>} key={item.key} >
              { this.randerMeun(item.children) }
            </SubMenu>
        )
      }
      return <Menu.Item key={item.key}>
        <NavLink to={item.key}>
          <span>{item.title}</span>
        </NavLink>
      </Menu.Item>
    })
  }
  render(){
    return(<Fragment>
      <div className='nav-posit'>
        <div>
          <Menu theme='dark' mode="inline">
            {this.state.MeunTreeNode}
          </Menu>
        </div>
      </div>
    </Fragment>);
  }
}
