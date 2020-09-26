import React, { Suspense } from 'react';

import Mine from './pages/Mine'
import Music from './pages/Music'
import Mymusic from './pages/Mymusic'
import Listenning from './pages/Listenning'
import Find from './pages/Find'
import Qufeng from './pages/more/Qufeng'
import Fenlei from './pages/more/Fenlei'
import Qikan from './pages/more/Qikan'
import Xinge from './pages/more/Xinge'
import Login from './pages/Login'
import Reg from './pages/Reg'
import Details from './pages/more/Details'


import { TabBar } from 'antd-mobile';
import { Route, Switch, withRouter,Redirect } from 'react-router-dom'
import { SearchOutlined, CustomerServiceOutlined,PlayCircleOutlined, UsergroupAddOutlined, AppstoreOutlined } from '@ant-design/icons';

class App extends React.Component {
  state = {
    menu: [
      {
        text: '发现',
        name: 'Find',
        icon: <SearchOutlined />,
        path: '/find'
      },
      {
        text: '我的音乐',
        name: 'Mymusic',
        icon: <CustomerServiceOutlined />,
        path: '/mymusic'
      }, {
        text: '正在播放',
        name: 'Listenning',
        icon: <PlayCircleOutlined />,
        path: '/listenning'
      },
      {
        text: '音乐圈',
        name: 'MusicCircle',
        icon: <UsergroupAddOutlined />,
        path: '/musicCircle'
      },
      {
        text: '个人中心',
        name: 'Mine',
        icon: <AppstoreOutlined />,
        path: '/mine'
      }
    ],
    selectedTab: '/find',
  }
  gotoPage = (key) => {
    this.setState({
      selectedTab: key
    })
    this.goto(key);
  }
  goto = (path) => {
    this.props.history.push(path);
  }
  componentWillMount() {
    const { pathname } = this.props.location;
    console.log(pathname);
    this.setState({
      selectedTab: pathname
    })
  }

  render() {
    const { menu, selectedTab } = this.state;
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <Suspense >
          <Switch>
            <Route path="/find" component={Find} />
            <Route path="/listenning" component={Listenning} />
            <Route path="/mine" component={Mine} />
            <Route path="/music" component={Music} />
            <Route path="/mymusic" component={Mymusic} />
            <Route path="/qufeng" component={Qufeng} />
            <Route path="/xinge" component={Xinge} />
            <Route path="/qikan" component={Qikan} />
            <Route path="/fenlei" component={Fenlei} />
            <Route path="/login" component={Login} />
            <Route path="/details" component={Details} />
            <Route path="/reg" component={Reg} />
            <Redirect from="/" to="/find" exact />
          </Switch>
        </Suspense>
        
        <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0, zIndex:'-1'}}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
          >
            {
              menu.map(item =>
                <TabBar.Item
                  title={item.text}
                  key={item.path}
                  icon={item.icon}
                  onPress={this.gotoPage.bind(this, item.path)} selectedKeys={[selectedTab]}
              ></TabBar.Item>
              )
            }
          </TabBar>
        </div>
      </div>

    );
  }
}
App = withRouter(App);
export default App;

