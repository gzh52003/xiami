import React from 'react';

import { Form, Input, Button, Checkbox,Layout,Row,Col} from 'antd';


import echarts from 'echarts/lib/echarts';

// 引入柱状图
import  'echarts/lib/chart/bar';
//引入饼图
import  'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'

// const {Header,Content,Sider} = Layout

class Find extends React.PureComponent{

    componentDidMount(){
        let myEcharts = echarts.init(document.querySelector("#title"))

        myEcharts.setOption({
           title:{
               text:'歌曲类型占比',
               textStyle:{
                   color:'#333333',
                   fontSize:30,
               }
           },
           tooltip:{
               trigger:'item',
               textStyle:{
                color:'#fff',
                fontSize:10,
            }

           }
           ,

           color:['#86f546','#99dfed','#ee4467','#1f2989','#58564e','#bd7892','#b578e2'],

           series:[{
               name:'歌曲占比',
               type:'pie',
               radius:'50%,50%',//饼图的半径
               center:'50%,70%',//饼图的中心图标

               avoidLabelOverlap:false,
               
               label:{
                   nomal:{
                       show:false,
                       position:'center'
                   },
                   emphasis:{
                       //鼠标放在圆环上显示的标签样式
                       show:true,
                       textStyle:{
                        
                            Color:'black',
                            fontSize:30,
                            fontWeight:'bold'
                        
                       }
                   },
                   labelLine:{
                       normal:{show:true}
                   }
               },
               data:[
                {value:13,name:'民谣'},
                {value:17,name:'舞曲'},
                {value:8,name:'古风'},
                {value:15,name:'轻音乐'},
                {value:19,name:'电影主题曲'},
                {value:25,name:'动漫'},
                {value:3,name:'体育'},
            ],


           }]






        })
        
        let twoEcharts = echarts.init(document.querySelector('#next'))
        
        twoEcharts.setOption({
           
            title: {
                text: '虾米用户人群',
                textStyle:{
                    color:'#333333',
                    fontSize:30,
                }
            },
            tooltip: {},
            legend: {
                // data:['销量']
            },
            xAxis: {
                data: ["学生","00后","90后","80后","其他"]
            },
            yAxis: {
                splitLine:{show:false},
            },
            series: [{
                name: '占比',
                type: 'bar',
                data: [30, 10, 38, 12, 10],
                // barWidth:30,
                itemStyle:{
                    normal:{
                        color:"skyblue"
                    }
                },
            }],
            

        })

    }
    
    render(){
        return(
            <div >
                <div id='title' style={{width:500,height:500,margin:'0 auto'}}>
                </div>
                <div id='next' style={{width:500,height:500,margin:'0 auto'}}>
                </div>
            </div>
        )
    }
}

export default Find