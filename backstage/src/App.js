import React, { Suspense } from 'react';

import { Menu, Row, Col, Layout } from 'antd';

const { Header,  Content, Sider } = Layout;

import { Route, Redirect, Switch, withRouter } from 'react-router-dom'

import Mine from "./pages/Mine" //个人中心
import Home from "./pages/Home" //首页
import Music from "./pages/Music" //歌曲管理
import User from './pages/User' //用户管理
import Order from "./pages/Order" //订单管理
import Login from "./pages/Login/index" //登录

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
      name: 'Music',

      path: '/Music'
    },
    {
      text: ' VIP用户',
      name: 'Order',

      path: '/Order'
    }
      ,
    {
      text: '个人中心',
      name: 'Mine',

      path: '/Mine'
    },
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
    if(path=='/Login'){
       let user = localStorage.removeItem("currentUser")   
    }
    this.props.history.push(path);

  }
  componentWillMount() {
    const { pathname } = this.props.location;
    this.setState({
      current: pathname
    })
  }


  render() {
    const { menu, current } = this.state;
    let user = localStorage.getItem("currentUser");
    // console.log("user=",user)
    return (
      <div style={{height:"100%"}}>
        {user
        ?<Layout style={{height:"100%"}}>
          <Header style={{lineHeight: "60px", margin: "0,auto" }}>
            <Row style={{ fontSize: "30px", margin: "0,auto", height: "40px", color: "black" }}>
              <Col span={18} style={{ fontSize: "30px", color: "#fff", margin: "0,auto" }}>
                <img src='https://gw.alicdn.com/tfs/TB1CmmZQrrpK1RjSZTEXXcWAVXa-96-96.png' style={{ marginRight: "40px", width: "40px", height: "40px" }} />
                虾米音乐后台管理系统
              </Col>
              <Col span={6} style={{ textAlign: "right" }}>
                <a onClick={this.goto.bind(this, '/Login')} style={{ color: "#fff", fontSize: "20px", marginRight: "10px" }}>退出</a>
              </Col>
            </Row>
          </Header>
          <Layout style={{height:"100%"}}>
            <Sider style={{ width: "200px", height: "100%"}}>
              <Menu onClick={this.gotoPage} selectedKeys={[current]} mode="vertical" selectable="false" style={{height:"100%"}}>
                {
                  menu.map(item => <Menu.Item key={item.path} style={{fontSize:"20px", height:"60px", lineHeight:"60px"}}>
                    {item.text}
                  </Menu.Item>)}
              </Menu>
            </Sider>
            <Content style={{
              padding: 24,
              fontSize:"20px"
            }}>
              <Suspense>
                <Switch>
                  <Route path="/Mine" component={Mine} />
                  <Route path="/Home" component={Home} />
                  <Route path="/Music" component={Music} />
                  <Route path="/Order" component={Order} />
                  <Route path="/User" component={User} />
                  {/* <Route path="/Login" component={Login} /> */}

                  <Route path="/notfound" render={() => <div>404</div>} />
                  <Redirect from="/" to="/Home" exact />
                </Switch>
              </Suspense>  
            </Content>
          </Layout>
        </Layout>
        :<Login/>}
      </div>
    );
  }
}

App = withRouter(App);

export default App;

