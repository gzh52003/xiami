import React from 'react';
import { BellTwoTone, EllipsisOutlined, setTwoToneColor} from '@ant-design/icons';
import { List,Button,Switch } from 'antd-mobile';

import '../App.css'
const Item = List.Item;
setTwoToneColor('#666');

class Mine extends React.PureComponent {
    
    goto = (path)=>{
        this.props.history.push(path);
        localStorage.removeItem("currentUser")
    }
    render() {
        return (
            <div style={{ marginLeft: '15px', marginTop: '10px',marginRight:'15px'}}>
                <span style={{ marginLeft: '130px' }}>个人中心</span>
                <EllipsisOutlined style={{ fontSize: '24px', float: 'right', color: 'grey'}} />
                <BellTwoTone style={{ fontSize: '24px', float: 'right' }} />
                <h1 style={{color:'grey'}}>个人中心</h1>
                <button style={{ marginRight: '15px' }} onClick={this.goto.bind(this,'/login')}>登录</ button>
                <button onClick={this.goto.bind(this,'/reg')}>注册</button>
                <div style={{marginTop:'25px'}}>
                <List>
                    <Item arrow="horizontal" extra={'尊享权益'}><i className='iconfont' id="icon">&#xe69c;</i>会员中心</Item>
                </List>
                <List>
                    <Item arrow="horizontal" extra={'签到必得会员'}><i className='iconfont' id="icon">&#xe614;</i>每日签到</Item>
                </List>
                <List>
                    <Item arrow="horizontal"><i className='iconfont' id="icon">&#xe62d;</i>养虾米</Item>
                </List>
                <List>
                    <Item arrow="horizontal"><i className='iconfont' id="icon">&#xeab0;</i>MQA高品质专区</Item>
                </List>
                <List>
                    <Item arrow="horizontal"><i className='iconfont' id="icon">&#xe6f9;</i>极速筛歌</Item>
                </List>
                <List>
                    <Item arrow="horizontal"><i className='iconfont' id="icon">&#xe609;</i>设置</Item>
                </List>
                <List>
                    <Item arrow="horizontal" extra={'虾米白'}><i className='iconfont' id="icon">&#xe617;</i>主题换肤</Item>
                </List>
                <List>
                    <Item extra={<Switch/>}><i className='iconfont' id="icon">&#xe633;</i>夜间模式</Item>
                </List>
                <List>
                    <Item arrow="horizontal"><i className='iconfont' id="icon">&#xe60e;</i>我的音乐偏好</Item>
                </List>
                <List>
                    <Item arrow="horizontal"><i className='iconfont' id="icon">&#xe675;</i>驾驶模式</Item>
                </List>
                <List>
                    <Item arrow="horizontal"><i className='iconfont' id="icon">&#xe699;</i>亲子模式</Item>
                </List>
                <List>
                    <Item arrow="horizontal"><i className='iconfont' id="icon">&#xe6fd;</i>定时关闭</Item>
                </List>
                <List>
                    <Item arrow="horizontal"><i className='iconfont' id="icon">&#xe739;</i>音乐闹钟</Item>
                </List>
                <List>
                    <Item arrow="horizontal"><i className='iconfont' id="icon">&#xe654;</i>我的赞赏</Item>
                </List>
                <List>
                    <Item arrow="horizontal" extra={'0.00'}><i className='iconfont' id="icon">&#xe63a;</i>虾币</Item>
                </List>
                <List>
                    <Item arrow="horizontal"><i className='iconfont' id="icon">&#xe61a;</i>免流听音乐</Item>
                </List>
                <List>
                    <Item arrow="horizontal"><i className='iconfont' id="icon">&#xe69b;</i>邀请好友，互得VIP会员</Item>
                </List>
                <List>
                    <Item arrow="horizontal"><i className='iconfont' id="icon">&#xe615;</i>音乐实验室</Item>
                </List>
                <List>
                    <Item arrow="horizontal" extra={'官方电话短信通知'}><i className='iconfont' id="icon">&#xe604;</i>点歌台</Item>
                </List>
                <List>
                    <Item arrow="horizontal"><i className='iconfont' id="icon_1">&#xe8af;</i>3小时公益</Item>
                </List>
                <List>
                    <Item arrow="horizontal"><i className='iconfont' id="icon">&#xe631;</i>我的客服</Item>
                </List>
                <List>
                    <Item arrow="horizontal"><i className='iconfont' id="icon">&#xe68e;</i>意见反馈</Item>
                </List>
                </div>
                <Button type="primary" style={{ marginTop: '32px',backgroundColor:'#333' }} onClick={this.goto.bind(this, '/login')} >退出APP</Button>
            </div>
        )
    }
}

export default Mine