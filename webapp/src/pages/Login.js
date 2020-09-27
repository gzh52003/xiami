import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import '../App.css'
import request from '@/utils/request';
import CryptoJS from 'crypto-js';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};
const tailLayout = {
    wrapperCol: { offset: 6, span: 18 },
};


function Login(props) {
    const onFinish = async ({ username, password, mdl }) => {
        console.log(username, password, mdl);
        password = CryptoJS.SHA256(password);
        password = CryptoJS.enc.Hex.stringify(password)
        const data = await request.get('/login/user', {
            username,
            password,
            mdl
        });
        if (data.code === 1) {
            // 跳转到我的页面
            props.history.push('/mine')
            // 把用户信息存入本地（数据持久化）
            localStorage.setItem('currentUser', JSON.stringify(data.data));
        }
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const rules = {
        username:[{ required: true, message: '用户名必填' }],
        password:[{ required: true, message: '密码必填' }]
    }

    return (
        <div className="container" style={{ marginLeft: '50px'}}>
            <h1 style={{ margin: '38px 0' }}>快捷登录</h1>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={rules.username}
                    style={{ marginBottom: '20px' }}
                ><Input  style={{ marginTop: '20px' }} /></Form.Item>
                <Form.Item
                    label="密码"
                    name="password"
                    rules={rules.password}
                    style={{ marginBottom: '20px', size: '100' }}
                ><Input.Password  style={{ marginTop: '20px' }}/></Form.Item>

                <Form.Item {...tailLayout} name="mdl" valuePropName="checked" style={{ margin: '30px 0' }}>
                    <Checkbox style={{ marginRight: '10px' }}>下次免登陆</Checkbox>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" style={{ backgroundColor: 'red'}}>
                        登录
                </Button>
                </Form.Item>
            </Form>
            <div style={{ marginTop: '20px' }}>
                <span style={{ textAlign: 'Left' ,  marginRight: '110px' }}>忘记密码？</span>
                <span style={{ textAlign: 'Right'}}>注册</span>
            </div>
        </div>
    )
}

export default Login;