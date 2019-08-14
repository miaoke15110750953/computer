import React  from 'react'
import {Text,View,StyleSheet,Dimensions,Image} from  'react-native'
import MyImage from './MyImage';

export default class MyProductDetail extends React.Component{
    constructor(){
        super()
        this.state={

        }

    }
    render(){
        if(this.props.content){
            //content属性已经获得了服务器端的数据
            //this.props.content形如：
        let arr=this.props.content.match(/img\/\S*\.jpg/g)
        // console.log(arr)
            return(
                <View >
                    {
                        arr.map((url,i)=>{
                            // Image.getSize((url),(w,h)={
                            //    getSize 是异步请求，map要求立即执行
                            //     w就是远程图片的宽，h就是远程图片的高
                            // })
                            return (
                                //<Image style={ss.full} source={{uri:'http://www.codeboy.com/'+url }}/>
                                 <MyImage key={i} picUri={'http://www.codeboy.com/'+url} />
                            )
                        })
                    }
                </View>
            )
        }else{
            //尚未加载content属性
            return <Text>商品加载中，请稍后。。。</Text>
        }
        
    }
}
