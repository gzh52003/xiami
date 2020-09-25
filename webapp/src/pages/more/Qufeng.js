import React from 'react';
import { Menu, NavBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
import { ArrowLeftOutlined } from '@ant-design/icons';

class Qufeng extends React.PureComponent {
    state = {
        menu:
            [
                {
                    value: '1',
                    label: '最近浏览',
                },
                {
                    value: '2',
                    label: '流行',
                    children: [
                        {
                            label: '国语流行',
                            value: '1',
                        },
                        {
                            label: '粤语流行',
                            value: '2',
                        },
                        {
                            label: '欧美流行',
                            value: '3',
                        },
                        {
                            label: '电音流行',
                            value: '4',
                        },
                        {
                            label: '日本流行',
                            value: '5',
                        },
                        {
                            label: '韩国流行',
                            value: '6',
                        },
                        {
                            label: '电音流行',
                            value: '7',
                        },
                        {
                            label: '电音流行',
                            value: '8',
                        },
                        {
                            label: '电音流行',
                            value: '9',
                        },
                        {
                            label: '梦幻流行',
                            value: '10',
                        },
                        {
                            label: '流行舞曲',
                            value: '11',
                        },
                        {
                            label: '成人时代',
                            value: '12',
                        },
                        {
                            label: '网络流行',
                            value: '13',
                        },
                        {
                            label: '独立流行',
                            value: '14',
                        },
                        {
                            label: '女子团体',
                            value: '15',
                        },
                        {
                            label: '男孩团体',
                            value: '16',
                        },
                        {
                            label: '青少年流行',
                            value: '17',
                        }
                    ]
                },
                {
                    value: '3',
                    label: '摇滚',
                    children: [
                        {
                            label: '流行摇滚',
                            value: '1',
                        },
                        {
                            label: '独立摇滚',
                            value: '2',
                        },
                        {
                            label: '另类摇滚',
                            value: '3',
                        },
                        {
                            label: '英伦摇滚',
                            value: '4',
                        },
                        {
                            label: '迷幻摇滚',
                            value: '5',
                        },
                        {
                            label: '后摇',
                            value: '6',
                        },
                        {
                            label: '硬摇滚',
                            value: '7',
                        },
                        {
                            label: '电音流行',
                            value: '8',
                        },
                        {
                            label: '新迷幻',
                            value: '9',
                        },
                        {
                            label: '噪音摇滚',
                            value: '10',
                        }
                    ]
                },
                {
                    value: '4',
                    label: '民谣',
                    children: [
                        {
                            label: '当代民谣',
                            value: '1',
                        },
                        {
                            label: '独立民谣',
                            value: '2',
                        },
                        {
                            label: '城市民谣',
                            value: '3',
                        },
                        {
                            label: '民谣流行',
                            value: '4',
                        },
                        {
                            label: '传统民谣',
                            value: '5',
                        },
                        {
                            label: '校园民谣',
                            value: '6',
                        },
                        {
                            label: '新民谣',
                            value: '7',
                        },
                        {
                            label: '前卫民谣',
                            value: '8',
                        },
                    ]
                },
                {
                    value: '5',
                    label: '电子',
                    children: [
                        {
                            label: '电子舞曲',
                            value: '1',
                        },
                        {
                            label: '未来贝斯',
                            value: '2',
                        },
                        {
                            label: '浩室舞曲',
                            value: '3',
                        },
                        {
                            label: '合成器流行',
                            value: '4',
                        },
                        {
                            label: '独立电子乐',
                            value: '5',
                        },
                        {
                            label: '回响贝斯',
                            value: '6',
                        },
                        {
                            label: '陷阱舞曲',
                            value: '7',
                        },
                        {
                            label: '前卫浩室',
                            value: '8',
                        },
                        {
                            label: '未来浩室',
                            value: '9',
                        },
                        {
                            label: '电气浩室',
                            value: '10',
                        },
                        {
                            label: '蒙巴顿舞曲',
                            value: '11',
                        },
                        {
                            label: '科技舞曲',
                            value: '12',
                        }
                    ]
                },
                {
                    value: '6',
                    label: '节奏布鲁斯',
                    children: [
                        {
                            label: '当代节奏布鲁斯',
                            value: '1',
                        },
                        {
                            label: '未来放克贝斯',
                            value: '2',
                        },
                        {
                            label: '灵魂乐',
                            value: '3',
                        },
                        {
                            label: '流行灵魂乐',
                            value: '4',
                        },
                        {
                            label: '新灵魂乐',
                            value: '5',
                        },
                        {
                            label: '另类节奏布鲁斯',
                            value: '6',
                        },
                        {
                            label: '陷阱舞曲',
                            value: '7',
                        }
                    ]
                },
                {
                    value: '7',
                    label: '爵士',
                    children: [
                        {
                            label: '巴萨诺瓦',
                            value: '1',
                        },
                        {
                            label: '爵士流行',
                            value: '2',
                        },
                        {
                            label: '摇摆乐',
                            value: '3',
                        },
                        {
                            label: '柔顺爵士',
                            value: '4',
                        },
                        {
                            label: '融合爵士',
                            value: '5',
                        }
                    ]
                },
                {
                    value: '8',
                    label: '轻音乐',
                    children: [
                        {
                            label: '沙发音乐',
                            value: '1',
                        },
                        {
                            label: '异域',
                            value: '2',
                        },
                        {
                            label: '太空时代流行',
                            value: '3',
                        },
                        {
                            label: '合成器管弦乐流行流行',
                            value: '4',
                        },
                        {
                            label: '器乐流行',
                            value: '5',
                        },
                        {
                            label: '轻音乐流行',
                            value: '6',
                        },
                        {
                            label: '器乐独奏',
                            value: '7',
                        }
                    ]
                },
                {
                    value: '9',
                    label: '嘻哈（说唱）'
                },
                {
                    value: '10',
                    label: '动漫'
                },
                {
                    value: '112',
                    label: '布鲁斯'
                },
                {
                    value: '12',
                    label: '金属'
                },
                {
                    value: '13',
                    label: '朋克'
                },
                {
                    value: '14',
                    label: '世界音乐'
                },
                {
                    value: '15',
                    label: '新世纪'
                },
                {
                    value: '16',
                    label: '乡村'
                },
                {
                    value: '17',
                    label: '雷鬼'
                },
                {
                    value: '18',
                    label: '古典'
                },
                {
                    value: '19',
                    label: '唱作人'
                },
                {
                    value: '20',
                    label: '拉丁'
                },
                {
                    value: '21',
                    label: '中国特色'
                },
                {
                    value: '22',
                    label: '实验'
                },
                {
                    value: '23',
                    label: '儿童'
                },
                {
                    value: '24',
                    label: '有声书'
                },
                {
                    value: '25',
                    label: '舞台'
                }
            ]
    }
    onChange(value) {
        this.props.history.push('/details')
    }
    render() {
        const { menu } = this.state
        return (
            <div className='menu-active'>               
                <NavBar
                    leftContent={<ArrowLeftOutlined />}
                    mode="light"
                    className="top-nav-bar"
                >
                    虾米音乐
                </NavBar>
                <Menu
                    className="foo-menu"
                    data={menu}
                    height={document.documentElement.clientHeight * 1}
                    onChange={this.onChange.bind(this)}
                />
            </div>
        )
    }
}

Qufeng = withRouter(Qufeng);
export default Qufeng