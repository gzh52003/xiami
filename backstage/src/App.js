import React, { Suspense, lazy } from 'react';

import { Menu, Row, Col, Button, Input, Layout, Sider } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const { Search } = Input;
import { HomeOutlined, ContactsOutlined, SearchOutlined, TeamOutlined, UserOutlined, AudioOutlined } from '@ant-design/icons';

import { HashRouter, BrowserRouter, Route, Redirect, Switch, withRouter, Link, NavLink } from 'react-router-dom'

// const Mine = lazy(() => import("./pages/Mine"));//个人中心
// const Home = lazy(() => import("./pages/Home"));//发现
// const Musicircle = lazy(() => import("./pages/Musiccircle"));//音乐圈
// const Vedio = lazy(() => import("./pages/Vedio"));//媒体播放
// const Mymusic = lazy(() => import("./pages/Mymusic"));//我的音乐

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

      path: '/Musicircle'
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
  gotoPage = ({ key }) => {
    this.setState({
      current: key
    })
    this.goto(key);
    // this.props.history.replace(path);
  }
  goto = (path) => {
    this.props.history.push(path);
  }
  componentWillMount() {
    const { pathname } = this.props.location;
    console.log('props=', this.props)

    this.setState({
      current: pathname
    })
  }


  render() {
    const { menu, current } = this.state
    // console.log('App.props=',this.props)
    return (
      <div >

        <Layout>
          <Header style={{ background: "white", lineHeight: "60px", margin: "0,auto" }}>
            <Row style={{ fontSize: "30px", margin: "0,auto", height: "40px", color: "black" }}>
              <Col span={18} style={{ fontSize: "30px", margin: "0,auto" }}>
                <img src='https://img.alicdn.com/tfs/TB1kdkmh3DqK1RjSZSyXXaxEVXa-216-60.png' style={{ marginRight: "40px", width: "108px", height: "30px" }} />
             虾米音乐后台管理系统
             </Col>
              <Col span={6} style={{ textAlign: "right" }}>
                <a onClick={this.goto.bind(this, '/Login')} style={{ color: "black", fontSize: "20px", marginRight: "10px" }}>登录</a>
                <a onClick={this.goto.bind(this, '/Reg')} style={{ color: "black", fontSize: "20px" }}>注册</a>
              </Col>
            </Row>
          </Header>
          <Layout>
            <Sider style={{ width: "200px", height: "100%", background: "black", color: "white" }}>
              <Menu onClick={this.gotoPage} selectedKeys={[current]} mode="vertical" selectable="false">

                {
                  menu.map(item => <Menu.Item key={item.path} >

                    {item.text}
                  </Menu.Item>)}

              </Menu>
            </Sider>
            <Content style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: "#fff"
            }}>
              <Suspense>
                <Switch>
                  <Route path="/Mine" component={Mine} />
                  <Route path="/Home" component={Home} />
                  <Route path="/Musicircle" component={Musiccircle} />
                  <Route path="/Order" component={Order} />
                  <Route path="/User" component={User} />
                  <Route path="/Login" component={Login} />
                  <Route path="/Reg" component={Reg} />

                  <Route path="/notfound" render={() => <div>404</div>} />
                  <Redirect from="/" to="/Home" exact />
                </Switch>
              </Suspense>  
            </Content>
          </Layout>

        </Layout>






      </div>
    );
  }
}

App = withRouter(App);

export default App;

