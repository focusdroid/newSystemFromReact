import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import meunConfig from '../../config/meunConfig'
import { Menu, Icon } from 'antd';
import './index.less'

import { setDefaultSelectedKeys } from '../../store/actionCreator'
import store from "../../store";

const SubMenu = Menu.SubMenu;

export default class Nav extends Component{
  constructor (props) {
    super(props);
    this.state = store.getState()
    this.handlsStoreChange = this.handlsStoreChange.bind(this)
    store.subscribe(this.handlsStoreChange)
  }
  handlsStoreChange () {
    this.setState(store.getState())
  }
  render(){
    return(<Fragment>
      <div className='nav-posit'>
        <div>
          <Menu
            defaultOpenKeys={[this.state.defaultOpenKeys]}
            defaultSelectedKeys={[this.state.defaultSelectedKeys]}
            theme='dark'
            mode="inline">
            {this.state.MeunTreeNode}
          </Menu>
        </div>
      </div>
    </Fragment>);
  }
  componentDidMount () {
    const MeunTreeNode = this.randerMeun(meunConfig)
    this.setState(()=> ({
      MeunTreeNode
    }))
    console.log(this.state)
  }
  randerMeun = (data) => { // 菜单渲染
    return data.map((item) => {
      if (item.children) {
        return ( //
          <SubMenu
            title={<span><Icon type={item.icon} /><span>{item.title}</span></span>} key={item.id} >
            { this.randerMeun(item.children) }
          </SubMenu>
        )
      }
      return <Menu.Item
        key={item.id}
        onClick={this.setSelectedKeys.bind(this, item.id, item.parentId)}>
        <NavLink to={item.key}>
          <span>{item.title}</span>
        </NavLink>
      </Menu.Item>
    })
  }
  setSelectedKeys (id, parentId) { // 获取leftMenu子菜单
    let obj = {id: id, parentId: parentId}
    const action = setDefaultSelectedKeys(obj)
    store.dispatch(action)
  }
}
