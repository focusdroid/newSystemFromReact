import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './views/login/Login'
import Register from './views/register/Register'
import Error from './views/404/Error' // 404页面
import Admin from './Admin'

import Backlog from './pages/backlog/backlog/Backlog' // 待办事项 ---> 待办事项
import Serviceappli from './pages/services/serviceappli/Serviceappli' // 健康服务操作区 ---> 绿通服务申请
import ServiceappliDetails from './pages/services/serviceappli/ServiceappliDetails'

import Serviceappro from './pages/services/serviceappro/Serviceappro' // 健康服务操作区 ---> 绿通服务审批
import Servicediag from './pages/services/servicediag/Servicediag' // 健康服务操作区 ---> 绿通服务分诊
import Servicetrack from './pages/services/servicetrack/Servicetrack' // 健康服务操作区 ---> 绿通服务追踪
import Servicereimburseapp from './pages/services/servicereimburseapp/Servicereimburseapp' // 健康服务操作区 ---> 绿通服务报销申请
import Servicereinburseapproval from './pages/services/servicereinburseapproval/Servicereinburseapproval' // 健康服务操作区 ---> 绿通服务报销审批
import Servicesearchselfapply from './pages/servicesearch/servicesearchselfapply/Servicesearchselfapply' // 绿通申请综合查询
import Servicesearchselfreim from './pages/servicesearch/servicesearchselfreim/Servicesearchselfreim' // 报销申请综合查询

import ServiceappliDetail from './pages/services/serviceappli/ServiceappliDetail' // // 健康服务操作区 ---> 绿通服务申请 --> 详情信息


export default class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/register' component={Register}></Route>
                        <Route render={() =>
                            <Admin>
                                <Switch>
                                    <Route path="/backlog/backlog" component={Backlog}></Route>
                                    <Route path="/serviceappli/serviceappli" component={Serviceappli}></Route>
                                    <Route path="/serviceappli/serviceapplidetail" component={ServiceappliDetail}></Route>
                                    <Route path="/serviceappli/serviceapplidetails" component={ServiceappliDetails}></Route>
                                    <Route path="/serviceappli/serviceappro" component={Serviceappro}></Route>
                                    <Route path="/serviceappli/Servicediag" component={Servicediag}></Route>
                                    <Route path="/serviceappli/servicetrack" component={Servicetrack}></Route>
                                    <Route path="/serviceappli/reimburseapp" component={Servicereimburseapp}></Route>
                                    <Route path="/serviceappli/reimburseapproval" component={Servicereinburseapproval}></Route>
                                    <Route path="/searchselfapply/searchselfapply" component={Servicesearchselfapply}></Route>
                                    <Route path="/searchselfapply/searchselfreim" component={Servicesearchselfreim}></Route>
                                    <Route component={Error}></Route>
                                </Switch>
                            </Admin>
                        }>
                        </Route>
                        <Route component={Error}></Route>
                    </Switch>
                </App>
            </BrowserRouter>
        );
    }
}
