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
                <div style={{margin:"0 auto", textAlign:"center",width:"600px",height:"300px", border:"1px solid #ccc"}}>
                    <Form  name="dynamic_rule" size={"large"}>
                        <Form.Item
                            {...formItemLayout}
                            name="username"
                            label="用户名"
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            name="password"
                            label="密码"
                        >
                            <Input/>
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
            )
        }
    }
    Login = withRouter(Login);
    export default Login