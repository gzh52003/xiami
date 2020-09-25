import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
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
     const gotohome = ()=>{}
    const onFinish = (values) => {
        console.log('Success:', values);
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
            <Form.Item
                label="用户名"
                name="用户名"
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
                name="密码"
                rules={[
                    {
                        required: true,
                        message: '请输入密码',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>
           
            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>七天免登陆</Checkbox>
                       <Button type="danger" htmlType="submit" onClick={props.gotohome} style={{marginTop:"5px"}}>
                    登录
        </Button>
            </Form.Item>

        </Form>
    </div >
}




export default Login;