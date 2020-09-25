import React from 'react';
import { Flex, WhiteSpace, Icon} from 'antd-mobile';
import { Image } from 'antd';
import request from '../utils/request';
import { withRouter } from 'react-router-dom';
import { PlayCircleOutlined } from '@ant-design/icons';
class MusicLibrary extends React.PureComponent {
    state = {
        data1: [],
        data2: [],
        data3: [],
        data4: [],
        data5: [],
        data6: []
    }
    goto = (path) => {
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
        const res4 = await request.get('/top/album?offset=9&limit=3');
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
            <div style={{ height: "100%", padding: "0 10px" }}>
                <div style={{ width: "90%", height: "100px", margin: "20px auto" }} >
                    <img
                        src="//pic.xiami.net/images/common/uploadpic/52/1600421084452.jpg?x-oss-process=image/crop,y_30,h_360/quality,q_80/format,jpg"
                        style={{ width: "100%", height: "100%" }}
                    >
                    </img>
                </div>

                <Flex style={{ margin: "0 auto", width: "90%", textAlign: "center" }}>
                    <Flex.Item style={{ width: "150px" }}>
                        <div style={{ marginLeft: "15px" }}>
                            <Image
                                src='https://gw.alicdn.com/tfs/TB1DeOIMkY2gK0jSZFgXXc5OFXa-96-96.png'
                                width={50}
                                height={50}
                            >
                            </Image>
                        </div>
                        每日30首
                    </Flex.Item>
                    <Flex.Item>
                        <div style={{ marginLeft: "18px" }}>
                            <Image
                                src='https://gw.alicdn.com/tfs/TB1mWhsasVl614jSZKPXXaGjpXa-96-96.png'
                                width={50}
                                height={50}
                            >
                            </Image>
                        </div>
                        虾米电台
                        </Flex.Item>
                    <Flex.Item>
                        <div style={{ marginLeft: "18px" }}>
                            <Image
                                src='https://gw.alicdn.com/tfs/TB1u.izMfb2gK0jSZK9XXaEgFXa-96-96.png'
                                width={50}
                                height={50}
                            >
                            </Image>
                        </div>
                        时光晚安
                        </Flex.Item>
                    <Flex.Item>
                        <div style={{ marginLeft: "18px" }}>
                            <Image
                                src='https://gw.alicdn.com/tfs/TB1dC18cWNj0u4jSZFyXXXgMVXa-96-96.png'
                                width={50}
                                height={50}
                            >
                            </Image>
                        </div>
                        排行榜
                    </Flex.Item>
                </Flex>
                <WhiteSpace size="lg" />

                <div style={{ height: "300px", width: "90%", textAlign: "left", margin: "0 auto" }}>
                    <div onClick={this.goto.bind(this, '/qufeng')}>
                        <h2 style={{ float: "left", width: "80%", fontWeight: "400", marginLeft:"4px" }}>曲风流派 1000+ </h2>
                        <h4 style={{ float: "left", fontWeight: "300", marginTop: "28px" }} >更多</h4>
                        <Icon type="right" style={{ marginTop: "26px" }}></Icon>
                    </div>
                    {
                        data1.map(item =>
                            <div 
                                onClick={this.goto.bind(this, `/details?${item.tag}`)}
                                key={item.id}
                                style={{ float: "left", width: "33.3%", textAlign: "center" }}>
                                <div style={{position:"relative"}}>    
                                    <Image
                                        src={item.coverImgUrl}
                                        width={100}
                                        height={80}
                                    >
                                    </Image>
                                    <div style={{ position:"absolute", top:"30px", left:"0", right:"0", bottom:"0"}}>
                                            <PlayCircleOutlined style={{fontSize:"20px",color:"#fff"}} />
                                    </div>
                                </div>                                
                                <p>{item.tag}</p>
                            </div>
                        )
                    }
                </div>
                
                <div style={{ width: "90%", textAlign: "left", margin: "0 auto" }}>
                    <div onClick={this.goto.bind(this, '/fenlei')}>
                        <h2 style={{ float: "left", width: "80%", fontWeight: "400", marginLeft:"4px" }}>主题分类 2000万+</h2>
                        <h4 style={{ float: "left", fontWeight: "300", marginTop: "28px" }} >更多</h4>
                        <Icon type="right" style={{ marginTop: "26px" }}></Icon>
                    </div>
                    {
                        data2.map(item =>
                            <div
                                onClick={this.goto.bind(this, '/details')}
                                key={item.id}
                                style={{ float: "left", width: "33.3%", textAlign: "center", position:"relative", marginBottom:"20px" }}>
                                <div style={{position:"relative"}}>    
                                    <Image
                                        src={item.coverImgUrl}
                                        width={100}
                                        height={80}
                                    >
                                    </Image>
                                    <div style={{ position:"absolute", top:"30px", left:"0", right:"0", bottom:"0"}}>
                                            <PlayCircleOutlined style={{fontSize:"20px",color:"#fff"}} />
                                    </div>
                                </div>
                                <p style={{width:"40px",height:"20px",background:"#000",color:"#fff", position:"absolute",bottom:"-14px", left:"10px"}}>{item.tags[0]}</p>
                            </div>
                        )
                    }
                </div>
                
                <div style={{ width: "90%", textAlign: "left", margin: "0 auto" }}>
                    <div onClick={this.goto.bind(this, '/xinge')}>
                        <h2 style={{ float: "left",width:"80%", fontWeight: "400",marginLeft:"4px" }}>新歌新碟</h2>
                        <h4 style={{ float: "left", fontWeight: "300", marginTop: "28px" }} >更多</h4>
                        <Icon type="right" style={{ marginTop: "26px" }}></Icon>
                    </div>
                    <div>
                        {
                            data3.map(item =>
                                <div
                                    onClick={this.goto.bind(this, '/details')}
                                    key={item.id}
                                    style={{ height: "90px", width: "90%", marginBottom: "20px",marginLeft:"10px" }}>
                                    <div style={{ float: "left", height: "80px", width: "100px" }}>
                                        <Image
                                            src={item.picUrl}
                                            width={100}
                                            height={80}
                                        >
                                        </Image>
                                    </div>
                                    <div style={{ float: "left", width: "180px" }}>
                                        <p>{item.name}</p>
                                        <p>{item.company}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div style={{ width: "100%", textAlign: "left", margin: "0 auto" }}>
                        {
                            data4.map(item =>
                                <div
                                    onClick={this.goto.bind(this, '/details')}
                                    key={item.id}
                                    style={{ float: "left", textAlign: "center" }}>
                                    <Image
                                        src={item.picUrl}
                                        width={110}
                                        height={80}
                                    >
                                    </Image>
                                    <p style={{ fontSize: "14px", lineHeight: "16px", width: "100px", textAlign: "center", textOverflow:"ellipsis", whiteSpace:"nowrap", overflow:"hidden" }}>{item.name}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
                
                <div style={{ width: "90%", textAlign: "left", margin: "0 auto" }}>
                    <div onClick={this.goto.bind(this, '/qikan')}>
                        <h2 style={{ float: "left", width: "80%", fontWeight: "400",marginLeft:"4px" }}>专题特刊</h2>
                        <h4 style={{ float: "left", fontWeight: "300", marginTop: "28px" }} >更多</h4>
                        <Icon type="right" style={{ marginTop: "26px" }}></Icon>
                    </div>
                    {
                        data5.map(item =>
                            <div
                                key={item.id}
                                style={{ float: "left", width: "100px", marginRight: "10px", textAlign: "center", overflow: "hidden" }}
                            >
                                <Image
                                    src={item.picUrl}
                                    width={100}
                                    height={80}
                                >
                                </Image>
                                <p style={{ fontSize: "14px", lineHeight: "16px", width: "100px", textAlign: "center", overflow:"hidden",textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{item.name}</p>
                            </div>
                        )
                    }
                </div>
                
                <div style={{ width: "90%", textAlign: "left", margin: "0 auto" }}>
                    <div>
                        <h2 style={{ float: "left", width: "80%", fontWeight: "400", marginLeft:"4px" }}>艺人 50万+</h2>
                        <h4 style={{ float: "left", fontWeight: "300", marginTop: "28px" }} >更多</h4>
                        <Icon type="right" style={{ marginTop: "26px" }}></Icon>
                    </div>
                    {
                        data6.map(item =>
                            <div
                                key={item.id}
                                style={{ float: "left", width: "100px", marginRight: "10px", textAlign: "center", overflow: "hidden" }}
                            >
                                <div style={{ width: "80px", height: "80px", borderRadius: "50% 50%", overflow: "hidden" }}>
                                <div style={{position:"relative"}}>    
                                    <Image
                                        src={item.picUrl}
                                        width={80}
                                        height={80}
                                    >
                                    </Image>
                                    <div style={{ position:"absolute", top:"30px", left:"0", right:"0", bottom:"0"}}>
                                            <PlayCircleOutlined style={{fontSize:"20px",color:"#fff"}} />
                                    </div>
                                </div>
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