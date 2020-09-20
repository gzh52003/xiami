import React,{Suspense, lazy } from 'react';

import {Image, Menu,Row,Col,Button,Input } from 'antd';

const { Search } = Input;
import { HomeOutlined, ContactsOutlined, SearchOutlined,TeamOutlined,UserOutlined, AudioOutlined} from '@ant-design/icons';

import {HashRouter,BrowserRouter,Route,Redirect,Switch,withRouter,Link,NavLink} from 'react-router-dom'

// const Mine = lazy(() => import("./pages/Mine"));//个人中心
// const Home = lazy(() => import("./pages/Home"));//发现
// const Musicircle = lazy(() => import("./pages/Musiccircle"));//音乐圈
// const Vedio = lazy(() => import("./pages/Vedio"));//媒体播放
// const Mymusic = lazy(() => import("./pages/Mymusic"));//我的音乐

import Mine from "./pages/Mine"
import Home from "./pages/Home"
import Musiccircle from "./pages/Musiccircle"
import Vedio from "./pages/Vedio"
import Mymusic from "./pages/Mymusic"
import Client from "./pages/Client"
// import Reg from "./pages/Reg"
import Login from "./pages/Login"

// @withRouter
class App extends React.PureComponent {
  state = {
    // currentUser:{},
    menu: [{
        text: '发现',
        name: 'Home',
       
        path: '/Home'
    }, 
    {
        text: '我的音乐',
        name: 'Mymusic',
    
        path: '/Mymusic'
    }, 
    // {
    //     text: '媒体播放',
    //     name: 'Vedio',
     
    //     path: '/Vedio'
    // }, 
    {
        text: '音乐人',
        name: 'Musicircle',
      
        path: '/Musicircle'
    },
    {
      text: '客户端下载',
      name: 'Client',
      
      path: '/Client'
  }
   ,
    {
      text: '会员中心',
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
      current:key
  })
  this.goto(key);
  // this.props.history.replace(path);
}
goto = (path)=>{
  this.props.history.push(path);
}
componentWillMount(){
  const {pathname} = this.props.location;
  console.log('props=',this.props)

  this.setState({
      current:pathname
  })
}


render(){
    const {menu,current} = this.state
    // console.log('App.props=',this.props)
  return (
    <div >
          <Row style={{ lineHeight:"70px" ,margin:"0,auto",color:"#fff"}}>
            <Col span={18} style={{lineHeight:"70px",}}>
              
                <Menu  style={{border:"none",margin:"0,auto",lineHeight:"70px",fontSize: 16,paddingLeft:"30px"}} onClick={this.gotoPage} selectedKeys={[current]} mode="horizontal" selectable="false">
                  <img src='https://img.alicdn.com/tfs/TB1kdkmh3DqK1RjSZSyXXaxEVXa-216-60.png'  style={{marginRight:"40px",width:"108px",height:"30px"}}/>
                  
             {
                    menu.map(item => <Menu.Item key={item.path} >
                                          
                                            {item.text}
                                </Menu.Item>)}
                    
                </Menu>
          </Col>
          <Col span={6} style={{lineHeight:"70px",}}> 
          
            <Input  style={{
              // position:"absolute",
              margin:"0,auto",
                  // marginTop:"16px",
                   borderBottom:"1px solid #4a4a4a",
                    fontSize: 16,
                    // color: '#000',
                    width:'105px',
                    // bordered:"false"
                  
                  }}  placeholder="搜索" size="large" />
           <SearchOutlined style={{fontSize: '32px',padding:'10px',margin:'0,auto', color: '#666' }} />
            <a onClick={this.goto.bind(this,'/login')} style={{color:"black",fontSize:"16px"}}>登录/注册</a>
          
          </Col>
          </Row>
          
          <Suspense>
            <Switch>
                        <Route path="/Mine" component={Mine} /> 
                        <Route path="/Home" component={Home} />
                        <Route path="/Musicircle" component={Musiccircle} />
                        <Route path="/Vedio" component={Vedio} />
                        <Route path="/Mymusic" component={Mymusic} />
                        <Route path="/Client" component={Client} />
                        <Route path="/login" component={Login} />
                        {/* <Route path="/Reg" component={Reg} /> */}
                        
                        <Route path="/notfound" render={() => <div>404</div>} />
                        <Redirect from="/" to="/Home" exact />
             </Switch>
          </Suspense>  
                               
                   

         
    </div>
  );
}
}

App = withRouter(App);

export default App;

