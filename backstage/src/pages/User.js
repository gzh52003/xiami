import React from 'react';
import { Button, Input, Popconfirm } from 'antd';
import { Table } from 'antd';
import request from '../utils/request';

const { Search } = Input;

class User extends React.PureComponent {
    state = {
        selectedRowKeys: [],
        data: [],
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
                render: (record) =>
                    <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                        <Button type={"primary"}>删除</Button>
                        <Button type={"danger"}>修改</Button>
                    </Popconfirm>
            }
        ]
    };

    handleDelete = key => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
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