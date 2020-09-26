import React from 'react';
import { Icon } from 'antd-mobile';
import request from '../../utils/request';
import { Image } from 'antd';
import { PlayCircleOutlined, EllipsisOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { NavBar } from 'antd-mobile';

class Details extends React.PureComponent {
    state = {
        data1: [],
        data2: [],
        data3: [],
        tag: ""
    }
    async componentDidMount() {
        const { search } = this.props.location;
        this.state.tag = search.slice(1);
        const num = parseInt(Math.random() * 10 + 10);
        const res1 = await request.get(`/music?page=${num}&size=3`);
        this.setState({
            data1: res1.data
        });
        const res2 = await request.get(`/music?page=${num}&size=6`);
        this.setState({
            data2: res2.data
        });
        const res3 = await request.get(`/music?page=${num+1}&size=6`);
        this.setState({
            data3: res3.data
        });
    }
    render() {
        const { data1, data2, data3 } = this.state;
        return (
            <div style={{ width: "100%", background: "#fff" }}>
                <div className='menu-active'>
                    <NavBar
                        leftContent={<ArrowLeftOutlined />}
                        mode="light"
                        className="top-nav-bar"
                    >虾米音乐</NavBar>
                </div>
                <div style={{ width: "90%", textAlign: "left", margin: "0 auto" }}>
                    <div style={{ height: "60px" }}>
                        <h2 style={{ float: "left", width: "80%", fontWeight: "400", marginLeft: "4px" }}>最热歌曲</h2>
                        <h4 style={{ float: "left", fontWeight: "300", marginTop: "30px" }} >更多</h4>
                        <Icon type="right" style={{ marginTop: "28px" }}></Icon>
                    </div>
                    <div>
                        {
                            data1.map(item =>
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
                                        <p>{item.artists[0].name}</p>
                                    </div>
                                    <div style={{ float: "left", padding: "20px 10px" }}>
                                        <PlayCircleOutlined style={{ fontSize: "20px", color: "#ccc" }} />
                                    </div>
                                    <div style={{ float: "left", paddingTop: "20px" }}>
                                        <EllipsisOutlined style={{ fontSize: "20px", color: "#ccc" }} />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div style={{ width: "90%", height: "100px", background: "#f5f5f5", borderRadius: "5px", margin: "0 auto", position: "relative" }}>
                        <p style={{ width: "80px", height: "20px", background: "#000", color: "#fff", position: "absolute", left: "-5px", top: "-18px", textAlign: "center", lineHeight: "20px" }}>最新歌曲</p>
                        <div style={{ float: "left" }}>
                            <Image
                                src={'//pic.xiami.net/images/album/img73/573/326231465803900.jpg?x-oss-process=image/resize,limit_0,m_fill,s_300/quality,q_80/format,jpg'}
                                width={100}
                                height={100}
                            ></Image>
                        </div>
                        <div style={{ float: "left", marginLeft: "20px" }}>
                            <p style={{ color: "#333" }}>理性与感性</p>
                            <p style={{ color: "#666" }}>李宗盛</p>
                            <p>评分：9.8分</p>
                        </div>
                    </div>
                    <div style={{ height: "60px" }}>
                        <h2 style={{ float: "left", width: "80%", fontWeight: "400", marginLeft: "4px" }}>最热专辑</h2>
                        <h4 style={{ float: "left", fontWeight: "300", marginTop: "30px" }} >更多</h4>
                        <Icon type="right" style={{ marginTop: "30px" }}></Icon>
                    </div>
                    <div style={{ height: "300px", width: "90%", margin: "0 auto" }}>
                        {
                            data2.map(item =>
                                <div
                                    key={item.id}
                                    style={{ height: "140px", width: "33.3%", float: "left" }}>
                                    <Image
                                        src={item.album.blurPicUrl}
                                        width={100}
                                        height={80}
                                    >
                                    </Image>
                                    <p style={{ fontSize: "14px", lineHeight: "16px", width: "100px", textAlign: "center", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.name}</p>
                                </div>
                            )
                        }
                    </div>
                    <div style={{ width: "90%", height: "100px", background: "#f5f5f5", borderRadius: "5px", margin: "0 auto", position: "relative" }}>
                        <p style={{ width: "80px", height: "20px", background: "#000", color: "#fff", position: "absolute", left: "-5px", top: "-18px", textAlign: "center", lineHeight: "20px" }}>最新专辑</p>
                        <div style={{ float: "left" }}>
                            <Image
                                src={'//pic.xiami.net/images/album/img73/573/326231465803900.jpg?x-oss-process=image/resize,limit_0,m_fill,s_300/quality,q_80/format,jpg'}
                                width={100}
                                height={100}
                            ></Image>
                        </div>
                        <div style={{ float: "left", marginLeft: "20px" }}>
                            <p style={{ color: "#333" }}>理性与感性</p>
                            <p style={{ color: "#666" }}>李宗盛</p>
                            <p>评分：9.8分</p>
                        </div>
                    </div>
                </div>
                <div style={{ width: "90%", textAlign: "left", margin: "0 auto" }}>
                <div style={{ height: "60px" }}>
                        <h2 style={{ float: "left", width: "80%", fontWeight: "400", marginLeft: "4px" }}>最热专辑</h2>
                        <h4 style={{ float: "left", fontWeight: "300", marginTop: "30px" }} >更多</h4>
                        <Icon type="right" style={{ marginTop: "30px" }}></Icon>
                    </div>
                    <div style={{ height: "300px", width: "90%", margin: "0 auto" }}>
                        {
                            data3.map(item =>
                                <div
                                    key={item.id}
                                    style={{ height: "140px", width: "33.3%", float: "left" }}>
                                    <Image
                                        src={item.album.blurPicUrl}
                                        width={100}
                                        height={80}
                                    >
                                    </Image>
                                    <p style={{ fontSize: "14px", lineHeight: "16px", width: "100px", textAlign: "center", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.name}</p>
                                </div>
                            )
                        }
                    </div>
                    <div style={{ width: "90%", height: "100px", background: "#f5f5f5", borderRadius: "5px", margin: "0 auto", position: "relative" }}>
                        <p style={{ width: "80px", height: "20px", background: "#000", color: "#fff", position: "absolute", left: "-5px", top: "-18px", textAlign: "center", lineHeight: "20px" }}>最热歌单</p>
                        <div style={{ float: "left" }}>
                            <Image
                                src={'//pic.xiami.net/images/album/img73/573/326231465803900.jpg?x-oss-process=image/resize,limit_0,m_fill,s_300/quality,q_80/format,jpg'}
                                width={100}
                                height={100}
                            ></Image>
                        </div>
                        <div style={{ float: "left", marginLeft: "20px" }}>
                            <p style={{ color: "#333" }}>理性与感性</p>
                            <p style={{ color: "#666" }}>李宗盛</p>
                            <p>评分：9.8分</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Details