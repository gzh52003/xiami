import React from 'react';
import { NavBar } from 'antd-mobile';
import { ArrowLeftOutlined } from '@ant-design/icons';
import '../../scss/Fenlei.css'

class Fenlei extends React.PureComponent {
    render() {
        return (
            <div style={{ background: "#fff" }}>
                <div className='menu-active'>
                    <NavBar
                        leftContent={<ArrowLeftOutlined />}
                        mode="light"
                        className="top-nav-bar"
                    >
                        选择分类
                    </NavBar>
                </div>
                <div>
                    <h2>推荐</h2>
                    <div class="fenlei">
                        <i>经典</i>
                        <i>抖音</i>
                        <i>节奏</i>
                        <i>影视</i>
                    </div>
                </div>
                <div>
                    <h2>语种</h2>
                    <div class="fenlei">
                        <i>华语</i>
                        <i>粤语</i>
                        <i>韩语</i>
                        <i>欧美</i>
                        <i>日语</i>
                        <i>小语种</i>
                        <i>法语</i>
                        <i>北欧</i>
                        <i>国语</i>
                        <i>闽南语</i>
                        <i>客家语</i>
                        <i>英语</i>
                    </div>
                </div>
                <div>
                    <h2>主题</h2>
                    <div class="fenlei">
                        <i>经典</i>
                        <i>粤语</i>
                        <i>OST</i>
                        <i>回忆</i>
                        <i>节奏</i>
                        <i>循环</i>
                        <i>青春</i>
                        <i>女声</i>
                        <i>钢琴</i>
                        <i>动漫</i>
                        <i>儿歌</i>
                        <i>神曲</i>
                        <i>佛教</i>
                        <i>翻唱</i>
                        <i>电影</i>
                        <i>电视剧</i>
                    </div>
                </div>
                <div>
                    <h2>场景</h2>
                    <div class="fenlei">
                        <i>爱情</i>
                        <i>BGM</i>
                        <i>睡眠</i>
                        <i>运动</i>
                        <i>跑步</i>
                        <i>酒吧</i>
                        <i>夜晚</i>
                        <i>失恋</i>
                        <i>夏天</i>
                        <i>咖啡</i>
                        <i>旅行</i>
                        <i>车载</i>
                        <i>KTV</i>
                        <i>工作</i>
                        <i>学习</i>
                        <i>午后</i>
                        <i>暗恋</i>
                        <i>阅读</i>
                        <i>健身</i>
                    </div>
                </div>
                <div>
                    <h2>心情</h2>
                    <div class="fenlei">
                        <i>抒情</i>
                        <i>安静</i>
                        <i>伤感</i>
                        <i>舒缓</i>
                        <i>清新</i>
                        <i>治愈</i>
                        <i>唯美</i>
                        <i>感动</i>
                        <i>快乐</i>
                        <i>温暖</i>
                        <i>轻快</i>
                        <i>慵懒</i>
                        <i>浪漫</i>
                        <i>寂寞</i>
                        <i>振奋</i>
                        <i>思念</i>
                        <i>车载</i>
                        <i>失恋</i>
                        <i>吉他</i>
                        <i>温暖</i>
                        <i>励志</i>
                        <i>爱情</i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Fenlei