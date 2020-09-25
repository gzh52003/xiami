import React from 'react';
import { List, InputItem, Button, NavBar } from 'antd-mobile';
import { ArrowLeftOutlined } from '@ant-design/icons';

class Login extends React.PureComponent {
    handleClick = () => {
        this.inputRef.focus();
    }
    render() {
        return (
            <div>
                <div className='menu-active'>
                    <NavBar
                        leftContent={<ArrowLeftOutlined />}
                        mode="light"
                        className="top-nav-bar"
                    >登录</NavBar>
                </div>
                <List style={{ padding: "20px 10px" }}>
                    <InputItem
                        clear
                        placeholder="请输入用户名"
                        ref={el => this.autoFocusInst = el}
                    >用户名</InputItem>
                    <InputItem
                        clear
                        placeholder="请输入密码"
                        ref={el => this.inputRef = el}
                    >密码</InputItem>   
                </List> 
                <Button type="primary" style={{margin:"20px"}}>登录</Button>
            </div>

        )
    }
}

export default Login