
import React, { Component, Fragment } from 'react'
import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';
import Nav from './components/Nav/index'
import Headers from './components/Header/index'

import './style/common.less'

const {
  Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

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
          <div className="logo" />
          <Nav></Nav>
        </Sider>
        <Layout>
          <Headers style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Fragment>);
  }
}



/*
import React, { Component, Fragment } from 'react'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Nav from './components/Nav/index'
import './style/common.less'

export default class Admin extends Component{
  render(){
    return(<Fragment>
      <div className='main'>
        <div className='main-nav'>
          <Nav>
          </Nav>
        </div>
        <div className='main-content'>
          <Header></Header>
          <div className='main-contented'>
            {this.props.children}
          </div>
          <Footer>
          </Footer>
        </div>
      </div>
    </Fragment>);
  }
}
*/
