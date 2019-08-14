import React  from 'react'
import {Image,View,StyleSheet,Dimensions} from  'react-native'

let ss=StyleSheet.create({
    full:{
        marginVertical:10,
        width:Dimensions.get("window").width-20,
        height:Dimensions.get("window").width-20,
    }
})
export default class MySlides extends React.Component{

    //静态属性
    static serverUrl="http://www.codeboy.com/"

    timer=null     //轮播广告定时器

    constructor(){
        super()
        this.state={
            curIndex:0     //图片数组中当前显示的图片下标
        }

    }
    
    componentWillUnmount(){
        //组件 will unmount:即将被卸载--执行资源释放
        if(this.timer){
            clearInterval(this.timer)
        }
    }

    render(){
        if(this.props.picList){
            // console.log('轮播有图片数据了')
            //服务器端返回了数据，父组件已经把图片列表传给当前轮播组件
            //启用定时器，开始轮播，启动定时器 --只启动一次
            if(this.timer===null){
                this.timer= setInterval(()=>{
                    //定时器任务，修改要显示的图片的下标
                    let i=this.state.curIndex;
                    i++;
                    if(i>=this.props.picList.length){
                        i=0;     //已经轮播完一轮 从回第一张
                    }
                    this.setState({curIndex:i})
                },2000)
            }
           
            return (
                <View>
                    <Image style={ss.full} resizeMode="stretch" source={{uri:MySlides.serverUrl+this.props.picList[this.state.curIndex].md}}/>
                </View>
            )
        }else{
            console.log('轮播尚无图片数据')
            return (
                <View>
                    <Image style={ss.full} resizeMode="stretch" source={require("../assets/loading.jpg")}/>
                </View>
            )
        }
        
    }
    
}
