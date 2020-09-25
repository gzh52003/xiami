import React, { Suspense, lazy } from 'react';

import { Menu, Row, Col, Button, Input, Layout } from 'antd';

const { Header, Footer,  Sider,Content, } = Layout;

const { Search } = Input;
import { HomeOutlined, ContactsOutlined, SearchOutlined, TeamOutlined, UserOutlined, AudioOutlined } from '@ant-design/icons';

import { HashRouter, BrowserRouter, Route, Redirect, Switch, withRouter, Link, NavLink } from 'react-router-dom'

import Mine from "./pages/Mine" //个人中心
import Home from "./pages/Home" //首页
import Musiccircle from "./pages/Musiccircle" //歌曲管理
import User from './pages/User' //用户管理
import Order from "./pages/Order" //订单管理
import Reg from "./pages/Reg" //注册
import Login from "./pages/Login" //登录

// @withRouter
class App extends React.PureComponent {
  state = {
    // currentUser:{},
    menu: [{
      text: '首页',
      name: 'Home',

      path: '/Home'
    },
    {
      text: '用户管理',
      name: 'User',

      path: '/User'
    },

    {
      text: '歌曲管理',
      name: 'Musicircle',

      path: '/Musiccircle'
    },
    {
      text: '订单管理',
      name: 'Order',

      path: '/Order'
    }
      ,
    {
      text: '个人中心',
      name: 'Mine',

      path: '/Mine'
    },
      //   {
      //     text: '登录/注册',
      //     name: 'Login',

      //     path: '/Login'
      // },
    ],
    current: '/Home'
  }
  // gotoPage = ({ key }) => {
  //   this.setState({
  //     current: key
  //   })
  //   this.goto(key);
  //   // this.props.history.replace(path);
  // }
  // goto = (path) => {
  //   this.props.history.push(path);
  // }
  // componentWillMount() {
  //   const { pathname } = this.props.location;
  //   console.log('props=', this.props)

  //   this.setState({
  //     current: pathname
  //   })
  // }


  render() {
    // const { menu, current } = this.state
    // console.log('App.props=',this.props)
    return (
    
      <Switch> {/*只匹配其中一个*/}
       
         <Redirect from='/' to='/login' exact/>
         <Route path='/login' component={Login}></Route>
         <Route path='/Home' component={Home}></Route>
         <Route path='/Mine' component={Mine}></Route>
         <Route path='/Musiccircle' component={Musiccircle}></Route>
         <Route path='/Order' component={Order}></Route>
         <Route path='/User' component={User}></Route>
      </Switch>
  

    );
  }
}

App = withRouter(App);

export default App;

