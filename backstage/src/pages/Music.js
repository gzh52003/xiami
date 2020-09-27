import React from 'react';
import { Input, Popconfirm, Button } from 'antd';
import { Table, message } from 'antd';
import request from '../utils/request';

const { Search } = Input;

class Music extends React.PureComponent {
    state = {
        selectedRowKeys: [],
        data: [],
        columns: [
            {
                title: '歌曲名',
                dataIndex: 'name',
            },
            {
                title: '演唱',
                dataIndex: 'singer',
            },
            {
                title: '出品公司',
                dataIndex: 'company',
            },
            {
                title: '操作',
                dataIndex: 'operation',
                render: (text, record) =>
                    <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                        <Button type={"primary"}>删除</Button>
                        <Button type={"danger"}>修改</Button>
                    </Popconfirm>
            }
        ]
    };

    async componentWillMount() {
        const song = await request.get('/music');
        const res = [];
        song.forEach((item, idx) => {
            res.push({
                id: item._id,
                key: idx,
                name: item.name,
                singer: item.artists[0].name,
                company: item.album.company
            })
        })
        this.setState({ data: res })
    }

    async handleDelete(key){
        const data = [...this.state.data];
        this.setState({ data: data.filter(item => item.key !== key) });
        const result = data.filter(item => item.key == key);
        const res = await request.remove(`/music/${result[0].id}`);
        console.log(res);
        if(res === "success"){
            message.success('删除成功');
        }
    };

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };
    render() {
        const { selectedRowKeys, data, columns } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };

        return (
            <div>
                <Search
                    placeholder="请输入歌曲名"
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

export default Music