import React, { Component, Fragment } from 'react'
import { Layout, Breadcrumb } from 'antd';
import Nav from './components/Nav/index'
const { Header, Content, Sider } = Layout;

export default class Admin extends Component{
  constructor(props){
    super(props);
    this.state = {
      collapsed: false,
    }
  }
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render(){
    return(
      <Fragment>
        <Layout style={{height: 'calc(100vh)'}}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            style={{backgroundColor: '#001529'}}
          >
            <div style={{position: 'fixed'}}>
              <div className="logo">
                <img style={{display: 'block', width: 148, height: 32}} src='../public/assets/logo-ant.svg' alt=""/>
              </div>
              <Nav></Nav>
            </div>
          </Sider>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            {/*<Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
            </Menu>*/}
            <div style={{color: '#fff', display: 'flex', justifyContent: 'space-between'}}>
              <div>
                <p>THM绿通服务支持系统</p>
              </div>
              <div>
                <div>
                  <span>机构：集团总部</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;退出登录</span>
                </div>
                {/*<div>
                  <p>当前用户：gcmuser</p>
                </div>*/}
              </div>
            </div>
          </Header>
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
              {this.props.children}
            </div>
          </Content>
        </Layout>
      </Fragment>
    );
  }
}

/*

import React, { Component, Fragment } from 'react'
import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';
import Nav from './components/Nav/index'
import Headers from './components/Header/index'
// import logo from '../public/assets/logo-ant.svg'

import './style/common.less'

const {
  Header, Content, Footer, Sider,
} = Layout;

export default class Admin extends Component{
  constructor(props){
    super(props);
    this.state = {
      collapsed: false,
    }
  }
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render(){
    return(<Fragment>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div style={{position: 'fixed'}}>
            <div className="logo">
              <img style={{display: 'block', width: 148, height: 32}} src='../public/assets/logo-ant.svg' alt=""/>
            </div>
            <Nav></Nav>
          </div>
        </Sider>
        <Layout>
          <Headers />
          <Content style={{ margin: '80px 16px 0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
              <Breadcrumb.Item>User</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            泰康管理系统 ©2019
          </Footer>
        </Layout>
      </Layout>
    </Fragment>);
  }
}
*/

