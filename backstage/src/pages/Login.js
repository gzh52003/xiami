import { withRouter } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};
const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
};

const DynamicRule = () => {
    const [form] = Form.useForm();
    const [checkNick, setCheckNick] = useState(false);

    useEffect(() => {
        form.validateFields(['nickname']);
    }, [checkNick]);

    const onCheckboxChange = e => {
        setCheckNick(e.target.checked);
    };

    const onCheck = async () => {
        try {
            const values = await form.validateFields();
            console.log('Success:', values);
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    };
}
    class Login extends React.PureComponent {

        render() {
            return (
                <div style={{paddingTop:"200px"}}>
                    
                    <div style={{ paddingTop:'40px', margin:"0 auto", textAlign:"center",width:"600px",height:"400px", border:"2px solid #ccc"}}>
                        <h1>虾米后台管理系统</h1>
                        <Form  name="dynamic_rule" size={"large"} style={{marginTop:"40px"}}>
                            <Form.Item
                                {...formItemLayout}
                                name="username"
                                label="用户名"
                            >
                                <Input style={{width:"400px"}}/>
                            </Form.Item>
                            <Form.Item
                                {...formItemLayout}
                                name="password"
                                label="密码"
                            >
                                <Input style={{width:"400px"}}/>
                            </Form.Item>
                            <Form.Item {...formTailLayout}>
                                <Checkbox onChange={this.onCheckboxChange}>
                                    七天免登录
                                </Checkbox>
                            </Form.Item>
                            <Form.Item {...formTailLayout}>
                                <Button type="primary" onClick={this.onCheck}>
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>    
                    
            )
        }
    }
    Login = withRouter(Login);
    export default Login