import React  from 'react'
import {Text,View,Image,Dimensions} from  'react-native'
export default class MyImage extends React.Component{
    constructor(){
        super()
        this.state={ 
            originalWidth:0,     //图片原始宽度，需要异步请求才能获取
            originalHeight:0,    //图片原始高度，需要异步请求才能获取
            displayWidth:Dimensions.get('window').width-20, //图片待显示的宽度
            displayHeight:0        //图片待显示的高度，需要计算得到
        }

    }

    componentDidMount(){
        //组件加载完成后，异步获取图片的原始尺寸
        Image.getSize(this.props.picUri,(w,h)=>{
             let originalWidth=w;          //原始宽度
             let originalHeight=h;         //原始高度
             let displayWidth=this.state.displayWidth;   //显示宽度
             let displayHeight=displayWidth*originalHeight/originalWidth;   //图片要显示的高  等比例缩放
             //异步获取到数据后，保存回状态数据，就会触发重新渲染
             this.setState({
                originalHeight,
                originalWidth,
                displayHeight,
                displayWidth,
             })
        })
    }

    render(){
        return (
            <Image style={{
                width:this.state.displayWidth,
                height:this.state.displayHeight
            }} resizeMode="stretch" 
            source={{uri:this.props.picUri}}
            />
        )
    }
}
