import React from 'react';
import request from '../utils/request'
import { Flex, WhiteSpace, Icon} from 'antd-mobile';
import { Image } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
class Find extends React.PureComponent{
    state={
       data1:[], 
       data2:[], 
       data3:[], 
      
    }
    goto = (path) => {
        this.props.history.push(path);
    }

    async componentDidMount() {
        const res1 = await request.get('/music?page=3&size=6');
        this.setState({
            data1: res1
        })
        
        const res2 = await request.get('/music?page=9&size=6');
        this.setState({
            data2: res2
        });
     
        const res3 = await request.get('/music?page=10&size=3');
        this.setState({
            data3: res3
        });
        console.log("data3=",res3.data);
    }
    render(){
        const { data1, data2, data3 } = this.state;
        return(
            <div style={{width:"100vw",height:"100vh",padding: "0 10px" }}>
                <div style={{width:"90vw",height:"100px",marginLeft:"20px"}}>
                    <img 
                    src="https://pic.xiami.net/images/common/uploadpic/44/1600790903044.jpg?x-oss-process=image/crop,y_30,h_360/quality,q_80/format,jpg"
                    style={{with:"100%",height:"100%"}}
                    ></img>
                </div>
                <Flex style={{ margin: "0 auto", width: "90%", textAlign: "center",marginTop:"10px" }}>
                    <Flex.Item style={{ width: "150px" }}>
                        <div style={{ marginLeft: "15px" }}>
                            <Image
                                src='https://gw.alicdn.com/tfs/TB1DeOIMkY2gK0jSZFgXXc5OFXa-96-96.png'
                                width={50}
                                height={50}
                            >
                            </Image>
                        </div>
                        新歌新碟
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
                        主题分类
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
                        艺人
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
                        高品质专区
                    </Flex.Item>
                </Flex>
                <WhiteSpace size="lg" />
               
                <div style={{ height: "300px", width: "90%", textAlign: "left", margin: "0 auto" }}>
                {/* onClick={this.goto.bind(this, '/qufeng')} */}
                    <div >
                        <h2 style={{ float: "left", width: "80%", fontWeight: "400", marginLeft:"4px" }}>必听歌单 </h2>
                        <h4 style={{ float: "left", fontWeight: "300", marginTop: "28px" }} >更多</h4>
                        <Icon type="right" style={{ marginTop: "26px" }}></Icon>
                    </div>
                    
                    {
                        data1.map(item =>
                            <div 
                       
                                
                                key={item.id}
                                style={{ float: "left", width: "33.3%", textAlign: "center" }}>
                                <div style={{position:"relative"}}>    
                                    <Image
                                        src={item.album.picUrl}
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
           
                <div style={{ height: "300px", width: "90%", textAlign: "left", margin: "0 auto" }}>
                {/* onClick={this.goto.bind(this, '/qufeng')} */}
                    <div >
                        <h2 style={{ float: "left", width: "80%", fontWeight: "400", marginLeft:"4px" }}>你的AI每日推荐 </h2>
                        <h4 style={{ float: "left", fontWeight: "300", marginTop: "28px" }} >更多</h4>
                        <Icon type="right" style={{ marginTop: "26px" }}></Icon>
                    </div>
                    
                    {
                        data2.map(item =>
                            <div 
                       
                                
                                key={item.id}
                                style={{ float: "left", width: "33.3%", textAlign: "center" }}>
                                <div style={{position:"relative"}}>    
                                    <Image
                                        src={item.album.picUrl}
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
           
                 <div style={{ height: "300px", width: "90%", textAlign: "left", margin: "0 auto" }}>
                 <div >
                        <h2 style={{ float: "left", width: "80%", fontWeight: "400", marginLeft:"4px" }}>猜你喜欢 </h2>
                        <h4 style={{ float: "left", fontWeight: "300", marginTop: "28px" }} >更多</h4>
                        <Icon type="right" style={{ marginTop: "26px" }}></Icon>
                 </div>
                 {
                        data3.map(item =>
                            <div 
                       
                                
                                key={item.id}
                                style={{ float: "left", textAlign: "center" }}>
                                <div style={{position:"relative" ,marginTop:"10px"}}>    
                                    <Image
                                        src={item.album.picUrl}
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
                 
            </div>
        )
    }
}

export default Find