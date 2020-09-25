import React from 'react';
import { NavBar, Tabs, WhiteSpace, Badge } from 'antd-mobile';
import { ArrowLeftOutlined, PlayCircleOutlined, EllipsisOutlined } from '@ant-design/icons';
import '../../scss/Xinge.css';
import request from '../../utils/request'
import { Image } from 'antd';
const tabs = [
    { title: <Badge>新歌</Badge> },
    { title: <Badge>新碟</Badge> },
    { title: <Badge>影视原声</Badge> }
]

class Xinge extends React.PureComponent {
    state = {
        data: []
    }
    async componentDidMount() {
        const res = await request.get('/music');
        this.setState({
            data: res
        });
    }
    render() {
        const { data } = this.state;
        return (
            <div style={{ background: "#fff" }}>
                <div className='menu-active'>
                    <NavBar
                        leftContent={<ArrowLeftOutlined />}
                        mode="light"
                        className="top-nav-bar"
                    >
                        新歌新碟
                    </NavBar>
                </div>
                <Tabs tabs={tabs}
                    initialPage={0}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                        <div>
                            {
                                data.map(item =>
                                    <div
                                        key={item.id}
                                        style={{ height: "90px", width: "100%", marginBottom: "10px" }}>
                                        <div style={{ float: "left", height: "80px", width: "100px" }}>
                                            <Image
                                                src={item.album.blurPicUrl}
                                                width={100}
                                                height={80}
                                            >
                                            </Image>
                                        </div>
                                        <div style={{ float: "left", width: "160px" }}>
                                            <p>{item.name}</p>
                                            <p style={{color:"#ccc"}}>{item.artists[0].name}</p>
                                        </div>
                                        <div style={{ float: "left", padding: "30px" }}>
                                            <PlayCircleOutlined style={{fontSize:"20px",color:"#ccc" }}/>
                                        </div>
                                        <div style={{ float: "left", paddingTop: "30px" }}>
                                            <EllipsisOutlined style={{fontSize:"20px", color:"#ccc"}}/>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div>
                </Tabs>
                <WhiteSpace />
            </div>
        )
    }
}

export default Xinge