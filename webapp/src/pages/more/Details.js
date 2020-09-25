import React from 'react';
import { Icon } from 'antd-mobile';
import request from '../../utils/request';
import { Image } from 'antd';
import { PlayCircleOutlined, EllipsisOutlined } from '@ant-design/icons';

class Details extends React.PureComponent {
    state = {
        data1: [],
        data2: [],
        data3: []
    }
    async componentDidMount() {
        const res1 = await request.get('/top/album?offset=2&limit=3');
        this.setState({
            data1: res1.albums
        });
        const res2 = await request.get('/top/album?offset=9&limit=6');
        this.setState({
            data2: res2.albums
        });
        const res3 = await request.get('/artist/list?type=1&area=7&initial=b&limit=6');
        this.setState({
            data3: res3.artists
        });
    }
    render() {
        const { data1, data2, data3 } = this.state;
        return (
            <div style={{ padding: "0 10px", background: "#fff" }}>
                <div style={{ height: "60px" }}>
                    <h2 style={{ float: "left", width: "80%", fontWeight: "300" }}>最热歌曲</h2>
                    <h4 style={{ float: "left", fontWeight: "300" }} >更多<Icon type="right"></Icon></h4>
                </div>
                <div>
                    {
                        data1.map(item =>
                            <div
                                key={item.id}
                                style={{ height: "90px", width: "100%", marginBottom: "10px" }}>
                                <div style={{ float: "left", height: "80px", width: "100px" }}>
                                    <Image
                                        src={item.picUrl}
                                        width={100}
                                        height={80}
                                    >
                                    </Image>
                                </div>
                                <div style={{ float: "left", width: "160px" }}>
                                    <p>{item.name}</p>
                                    <p>{item.artist.name}</p>
                                </div>
                                <div style={{ float: "left", padding: "30px" }}>
                                    <PlayCircleOutlined />
                                </div>
                                <div style={{ float: "left", paddingTop: "30px" }}>
                                    <EllipsisOutlined />
                                </div>
                            </div>
                        )
                    }
                </div>
                <div style={{ width: "90%", height: "140px", background: "#ccc", borderRadius: "5px", margin: "0 auto", position: "relative" }}>
                    <p style={{ width: "80px", height: "20px", background: "#000", color: "#fff", position: "absolute", left: "-5px", top: "-18px", textAlign: "center", lineHeight: "20px" }}>最新歌曲</p>
                </div>
                <div style={{ height: "60px" }}>
                    <h2 style={{ float: "left", width: "80%", fontWeight: "300" }}>最热专辑</h2>
                    <h4 style={{ float: "left", fontWeight: "300" }} >更多<Icon type="right"></Icon></h4>
                </div>
                <div style={{ height: "300px" }}>
                    {
                        data2.map(item =>
                            <div
                                key={item.id}
                                style={{ height: "140px", width: "110px", float: "left" }}>
                                <Image
                                    src={item.picUrl}
                                    width={100}
                                    height={80}
                                >
                                </Image>
                                <p style={{ fontSize: "14px", lineHeight: "16px", width: "100px", textAlign: "center", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.name}</p>
                            </div>
                        )
                    }
                </div>
                <div style={{ width: "90%", height: "140px", background: "#ccc", borderRadius: "5px", margin: "0 auto", position: "relative" }}>
                    <p style={{ width: "80px", height: "20px", background: "#000", color: "#fff", position: "absolute", left: "-5px", top: "-18px", textAlign: "center", lineHeight: "20px" }}>最新专辑</p>
                </div>
                <div>
                    <h2 style={{ float: "left", width: "80%", fontWeight: "300" }}>相关艺人</h2>
                    <h4 style={{ float: "left", fontWeight: "300" }}>更多<Icon type="right"></Icon></h4>
                </div>
                <div style={{ height: "300px" }}>
                    {
                        data3.map(item =>
                            <div
                                key={item.id}
                                style={{ float: "left", width: "100px", marginRight: "10px", textAlign: "center", overflow: "hidden" }}
                            >
                                <div style={{ width: "80px", height: "80px", borderRadius: "50% 50%", overflow: "hidden" }}>
                                    <Image
                                        src={item.picUrl}
                                        width={80}
                                        height={80}
                                    >
                                    </Image>
                                </div>
                                <p style={{ fontSize: "14px", lineHeight: "16px", width: "100px", textAlign: "center" }}>{item.name}</p>
                            </div>
                        )
                    }
                </div>    
                    
            </div>

        )
    }
}

export default Details