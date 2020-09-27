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
        data5: []
    }
    goto = (path) => {
        this.props.history.push(path);
    }

    async componentDidMount() {
        const res1 = await request.get('/music?page=1&size=6');
        this.setState({
            data1: res1
        });
        const res2 = await request.get('/music?page=2&size=6');
        this.setState({
            data2: res2
        });
        const res3 = await request.get('/music?page=5&size=3');
        this.setState({
            data3: res3
        });
        const res4 = await request.get('/music?page=6&size=3');
        this.setState({
            data4: res4
        });
        const res5 = await request.get('/music?page=7&size=3');
        this.setState({
            data5: res5
        });
    }
    render() {
        // return(<div>123</div>)
       const { data1, data2, data3, data4, data5 } = this.state;
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
                                        src={item.album.blurPicUrl}
                                        width={100}
                                        height={80}
                                    >
                                    </Image>
                                    <div style={{ position:"absolute", top:"30px", left:"0", right:"0", bottom:"0"}}>
                                            <PlayCircleOutlined style={{fontSize:"20px",color:"#fff"}} />
                                    </div>
                                </div>                                
                                <p>{item.name}</p>
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
                                        src={item.album.blurPicUrl}
                                        width={100}
                                        height={80}
                                    >
                                    </Image>
                                    <div style={{ position:"absolute", top:"30px", left:"-15px", right:"0", bottom:"0"}}>
                                            <PlayCircleOutlined style={{fontSize:"20px",color:"#fff"}} />
                                    </div>
                                </div>
                                <p style={{width:"80px",height:"20px",lineHeight:"20px", background:"#000",color:"#fff",overflow:"hidden", position:"absolute",bottom:"-14px", left:"10px"}}>{item.name}</p>
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
                                            src={item.album.blurPicUrl}
                                            width={100}
                                            height={80}
                                        >
                                        </Image>
                                    </div>
                                    <div style={{ float: "left", width: "180px" }}>
                                        <p>{item.name}</p>
                                        <p>{item.artists[0].name}</p>
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
                                        src={item.album.blurPicUrl}
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
                                    src={item.album.blurPicUrl}
                                    width={100}
                                    height={80}
                                >
                                </Image>
                                <p style={{ fontSize: "14px", lineHeight: "16px", width: "100px", textAlign: "center", overflow:"hidden",textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{item.name}</p>
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