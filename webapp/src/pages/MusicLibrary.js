import React, { Suspense } from 'react';
import { Flex, WhiteSpace, Icon } from 'antd-mobile';
import { Image } from 'antd';
import request from '../utils/request';
import {  withRouter } from 'react-router-dom';

class MusicLibrary extends React.PureComponent {
    state = {
        data1: [],
        data2: [],
        data3: [],
        data4: [],
        data5: [],
        data6: [],
    }    
    goto = (path) => {
// console.log(1111);
        this.props.history.push(path);
    }

    async componentDidMount() {
        const res1 = await request.get('/top/playlist/highquality?limit=6');
        this.setState({
            data1: res1.playlists
        });
        const res2 = await request.get('/top/playlist?limit=6');
        this.setState({
            data2: res2.playlists
        });
        const res3 = await request.get('/top/album?offset=2&limit=3');
        this.setState({
            data3: res3.albums
        });
        const res4 = await request.get('/top/album?offset=6&limit=3');
        this.setState({
            data4: res4.albums
        });
        const res5 = await request.get('/personalized/privatecontent/list');
        this.setState({
            data5: res5.result
        });
        const res6 = await request.get('/artist/list?type=1&area=7&initial=b&limit=6');
        this.setState({
            data6: res6.artists
        });
    }
    render() {
        const { data1, data2, data3, data4, data5, data6 } = this.state;
        return (
            <div style={{ height: "100%" }}>
                <Flex style={{ margin: "0 15px" }}>
                    <Flex.Item style={{ width: "150px", textAlign: "center" }}>
                        <Image
                            src='https://gw.alicdn.com/tfs/TB1DeOIMkY2gK0jSZFgXXc5OFXa-96-96.png'
                            width={50}
                            height={50}
                        >
                        </Image>
                        每日30首
                    </Flex.Item>
                    <Flex.Item>
                        <Image
                            src='https://gw.alicdn.com/tfs/TB1mWhsasVl614jSZKPXXaGjpXa-96-96.png'
                            width={50}
                            height={50}
                        >
                        </Image>
                        虾米电台
                        </Flex.Item>
                    <Flex.Item>
                        <Image
                            src='https://gw.alicdn.com/tfs/TB1u.izMfb2gK0jSZK9XXaEgFXa-96-96.png'
                            width={50}
                            height={50}
                        >
                        </Image>
                        时光晚安
                        </Flex.Item>
                    <Flex.Item>
                        <Image
                            src='https://gw.alicdn.com/tfs/TB1dC18cWNj0u4jSZFyXXXgMVXa-96-96.png'
                            width={50}
                            height={50}
                        >
                        </Image>
                        排行榜
                    </Flex.Item>
                </Flex>
                <WhiteSpace size="lg" />
                <div style={{ width: "100%", height: "350px", textAlign: "left" }}>
                    <div onClick={this.goto.bind(this,'/qufeng')}>
                        <h2 style={{ float: "left", width: "80%", fontWeight: "300" }}>曲风流派 1000+ </h2>
                        <h4 style={{ float: "left", fontWeight: "300" }} >更多<Icon type="right"></Icon></h4>
                    </div>
                    {
                        data1.map(item =>
                            <div
                                key={item.id}
                                style={{ float: "left", textAlign: "center" }}>
                                <Image
                                    src={item.coverImgUrl}
                                    width={120}
                                    height={100}
                                >
                                </Image>
                                <p>{item.tag}</p>
                            </div>
                        )
                    }
                </div>
                <div style={{ width: "100%", textAlign: "left" }}>
                    <div>
                        <h2 style={{ float: "left", width: "80%", fontWeight: "300" }}>主题分类 2000万+</h2>
                        <h4 style={{ float: "left", fontWeight: "300" }}>更多<Icon type="right"></Icon></h4>
                    </div>
                    {
                        data2.map(item =>
                            <div
                                key={item.id}
                                style={{ float: "left", textAlign: "center" }}>
                                <Image
                                    src={item.coverImgUrl}
                                    width={120}
                                    height={100}
                                >
                                </Image>
                                <p>{item.tags[0]}</p>
                            </div>
                        )
                    }
                </div>
                <div style={{ width: "100%", textAlign: "left" }}>
                    <div>
                        <h2 style={{ float: "left", width: "80%", fontWeight: "300" }}>新歌新碟</h2>
                        <h4 style={{ float: "left", fontWeight: "300" }}>更多<Icon type="right"></Icon></h4>
                    </div>
                    <div>
                        {
                            data3.map(item =>
                                <div
                                    key={item.id}
                                    style={{ height: "120px", textAlign: "center", marginBottom: "10px" }}>
                                    <Image
                                        src={item.picUrl}
                                        width={100}
                                        height={80}
                                        float={left}
                                    >
                                    </Image>
                                    <div style={{ float: "left", width: "200px", display: "inline-block", marginLeft: "120px" }}>
                                        <h6>{item.name}</h6>
                                        <p>{item.company}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div>
                        {
                            data4.map(item =>
                                <div
                                    key={item.id}
                                    style={{ float: "left", textAlign: "center" }}>
                                    <Image
                                        src={item.picUrl}
                                        width={120}
                                        height={100}
                                    >
                                    </Image>
                                    <p style={{ fontSize: "14px", lineHeight: "16px", width: "100px", textAlign: "center" }}>{item.name}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div style={{ width: "100%", textAlign: "left" }}>
                    <div>
                        <h2 style={{ float: "left", width: "80%", fontWeight: "300" }}>专题特刊</h2>
                        <h4 style={{ float: "left", fontWeight: "300" }}>更多<Icon type="right"></Icon></h4>
                    </div>
                    {
                        data5.map(item =>
                            <div
                                key={item.id}
                                style={{ float: "left", width: "110px", marginRight: "10px", textAlign: "center", overflow: "hidden" }}
                            >
                                <Image
                                    src={item.picUrl}
                                    width={80}
                                    height={80}
                                >
                                </Image>
                                <p style={{ fontSize: "14px", lineHeight: "16px", width: "100px", textAlign: "center" }}>{item.name}</p>
                            </div>
                        )
                    }
                </div>
                <div style={{ width: "100%", textAlign: "left" }}>
                    <div>
                        <h2 style={{ float: "left", width: "80%", fontWeight: "300" }}>艺人 50万+</h2>
                        <h4 style={{ float: "left", fontWeight: "300" }}>更多<Icon type="right"></Icon></h4>
                    </div>
                    {
                        data6.map(item =>
                            <div
                                key={item.id}
                                style={{ float: "left", width: "110px", marginRight: "10px", textAlign: "center", overflow: "hidden" }}
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
MusicLibrary = withRouter(MusicLibrary);
export default MusicLibrary