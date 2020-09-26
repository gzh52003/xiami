import React,{useState,useEffect,useMemo,useContext} from 'react';

import { withRouter } from 'react-router-dom'

import { Form, Input, Button, Checkbox,Alert } from 'antd';
import {request} from '../../utils/index'
import { HomeOutlined, FileAddOutlined, ReadOutlined, AudioOutlined } from '@ant-design/icons';
import './Login.css';

const { Search } = Input;
// import { Form, Input, Button, Checkbox } from 'antd';
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 18,
  },
};


function Login(props) {
     console.log(props)
    const onFinish = async ({username,password,mdl}) => {
        // password = CryptoJS.SHA256(password);
        // password = CryptoJS.enc.Hex.stringify(password)
        // console.log(password)
        const data = await request.get('/backlogin',{
            username,
            password,
            mdl
        });
        console.log('user=',data);
        if(data.code === 1){
           
            // 把用户信息存入本地（数据持久化）
            localStorage.setItem('currentUser',JSON.stringify(data.data));
             // 跳转到我的页面
             props.history.push('./Home')
        }
      };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return <div className="header">
          
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <h1>虾米后台管理系统</h1>
            <Form.Item
                label="用户名"
                name="username"
                rules={[
                    {
                        required: true,
                        message: '请输入用户名',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="密码"
                name="password"
                rules={[
                    {
                        required: true,
                        message: '请输入密码',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>
           
            <Form.Item {...tailLayout} name="mdl" valuePropName="checked">
                <Checkbox>七天免登陆</Checkbox>
                       <Button type="danger" htmlType="submit"  style={{marginTop:"5px"}}>
                    登录
            </Button>
            </Form.Item>

        </Form>
    </div >
}


Login = withRouter(Login)

export default Login;