import React from 'react';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import MusicLibrary from './MusicLibrary'
import Home from './Home'
import MV from './MV'

const tabs = [
    { title: <Badge>乐库</Badge> },
    { title: <Badge>推荐</Badge> },
    { title: <Badge>视频</Badge> },
    { title: <Badge>看点</Badge> },
];
class Find extends React.PureComponent {
    render() {
        return (
            <div style={{ height: "100%" }}>
                <Tabs tabs={tabs}
                    initialPage={0}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                        <MusicLibrary />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                        <Home/>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                        <MV/>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                        Content of fourth tab
                    </div>
                </Tabs>
                <WhiteSpace />
            </div>
        )
    }
}

export default Find