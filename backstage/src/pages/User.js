import React, { createRef } from 'react';
import { Button, Input, Popconfirm, Modal, Form, Select } from 'antd';
import { Table, message } from 'antd';
import request from '../utils/request';

const { Search } = Input;
const age = createRef();
const gender = createRef();

class User extends React.PureComponent {
    state = {
        gender: "",
        age:0,
        visible: false,
        selectedRowKeys: [],
        data: [],
        msg: [],
        columns: [
            {
                title: '用户名',
                dataIndex: 'name',
            },
            {
                title: '年龄',
                dataIndex: 'age',
            },
            {
                title: '性别',
                dataIndex: 'gender',
            },
            {
                title: '操作',
                dataIndex: 'operation',
                render: (text, record, index) =>
                    <div>
                        <Popconfirm title="确定删除吗？" onConfirm={() => this.handleDelete(record.key)}>
                            <Button type={"primary"}>删除</Button>
                        </Popconfirm>
                        <Button type={"danger"} onClick={() => this.showModal(record)}>修改</Button>
                        <Modal
                            visible={this.state.visible}
                            onOk={() => this.handleOk(this.state.msg)}
                            onCancel={this.handleCancel}
                            mask={false}
                            cancelText={"取消"}

                            okText={"确定"}
                        >
                            <Form
                                size={"large"}
                                labelCol={{ span: 4 }}
                                wrapperCol={{ span: 14 }}
                                layout="horizontal"
                            >
                                <Form.Item label="用户名">
                                    <Input disabled value={this.state.msg.name} />
                                </Form.Item>
                                <Form.Item label="密码">
                                    <Input disabled />
                                </Form.Item>
                                <Form.Item label="Select">
                                    <Select onChange={this.onGenderChange}>
                                        <Select.Option value="男" ref={gender}>男</Select.Option>
                                        <Select.Option value="女">女</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label="年龄">
                                    <Input ref={age} />
                                </Form.Item>
                            </Form>
                        </Modal>
                    </div>
            }
        ]
    };

    showModal(key) {
        this.setState({
            visible: true,
            msg: key
        });

    };

    onGenderChange = value => {
        this.setState({
            gender: value
        })
    };

    handleFocusInput = () => {
        this.setState({
            age: parseInt(age.current.state.value)
        })
    }
    async handleOk(key) {
        this.handleFocusInput()
        try {
            
            const res = await request.put(`/user/${key.id}`, {
                    gender: this.state.gender,
                    age: this.state.age
            })
            if (res.code === 1) {
            message.success('修改成功');
            this.setState({
                visible: false
            });
        }
        }catch(error){
            console.log(error);
        }

        
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    async handleDelete(key) {
        const data = [...this.state.data];
        this.setState({ data: data.filter(item => item.key !== key) });
        const result = data.filter(item => item.key == key);
        const res = await request.remove(`/user/${result[0].id}`);
        if (res.code === 1) {
            message.success('删除成功');
        }
    };

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };

    async componentWillMount() {
        const { data } = await request.get('/user');
        const res = [];
        data.forEach((item, idx) => {
            res.push({
                id: item._id,
                key: idx,
                name: item.username,
                age: item.age,
                gender: item.gender,

            })
        })
        this.setState({ data: res })
    }
    render() {
        const { selectedRowKeys, data, columns } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };

        return (
            <div>
                <Search
                    placeholder="请输入用户名"
                    enterButton="Search"
                    size="large"
                    style={{ width: "600px", marginLeft: "20px" }}
                    onSearch={value => console.log(value)}
                />
                <Table rowSelection={rowSelection} columns={columns} dataSource={data}
                    style={{ margin: "20px" }} />
            </div>
        )
    }
}

export default User