import React,{Suspense, lazy } from 'react';

import {Image, Menu,Row,Col,Button,Layout} from 'antd';

const { Header, Footer,  Content, Sider} = Layout;

// const { Search } = Input;
import { HomeOutlined, CustomerServiceOutlined , EyeOutlined ,AppstoreOutlined,TeamOutlined,UserOutlined, AudioOutlined} from '@ant-design/icons';

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
        icon:<EyeOutlined />,
        path: '/Home'
    }, 
    {
        text: '我的音乐',
        name: 'Mymusic',
        icon:<CustomerServiceOutlined />,
        path: '/Mymusic'
    }, 
    {
        text: '媒体播放',
        name: 'Vedio',
     
        path: '/Vedio'
    }, 
    {
        text: '音乐圈',
        name: 'Musicircle',
      
        path: '/Musicircle'
    },
  //   {
  //     text: '客户端下载',
  //     name: 'Client',
      
  //     path: '/Client'
  // }
  //  ,
    {
      text: '个人中心',
      name: 'Mine',
      icon:<AppstoreOutlined />,
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
      <Layout>
      {/* <Header>Header</Header> */}
      
      <Content style={{height:"100%"}}>
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
        </Content>
        
      
       
        <Footer style={{minWidth:"200px",padding:"0"}} >
       
       
          
              
                <p  style={{width:"100%",height:"40px",position:"relative",top:"0" ,backgroundColor:"ccc"}} onClick={this.gotoPage} selectedKeys={[current]} mode="horizontal" >
                  {/* <img src='https://img.alicdn.com/tfs/TB1kdkmh3DqK1RjSZSyXXaxEVXa-216-60.png'  style={{marginRight:"40px",width:"108px",height:"30px"}}/> */}
                  
             {
                    menu.map(item => <div onClick={this.goto.bind(this,item.path)} key={item.path} style={{paddingRight:"16px",color:"black",fontSize:"16px",display:"inline-block"}} >
                                             <p style={{margin:"0,auto",paddingRight:"16px",position:"absolute",bottom:"18px",display:"inline"}}>{item.icon}</p>
                                              <p style={{paddingLeft:"10px",fontSize:"14px",display:"inline"}}>{item.text}</p>
                                </div>
                                 )}
                    
                </p>
          
      
          
            {/* <input  type='text' style={{
              // position:"absolute",
              margin:"0,auto",
                  // marginTop:"16px",
                   borderBottom:"1px solid #4a4a4a",
                    fontSize: 16,
                    // color: '#000',
                    width:'105px',
                    height:"30px",
                    
                    borderBottomColor:"black"
                   
                  
                  }}    /> */}
           {/* <SearchOutlined style={{fontSize: '32px',padding:'10px',margin:'0,auto', color: '#666' }} />
            <a onClick={this.goto.bind(this,'/login')} style={{color:"black",fontSize:"16px"}}>登录/注册</a> */}
          
         
        </Footer>
        
      </Layout>
         
                               
                   

         
    </div>
  );
}
}

App = withRouter(App);

export default App;

