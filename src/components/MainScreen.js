import React  from 'react'
import {Text,View,Button,TouchableOpacity,Image,ScrollView,StyleSheet} from  'react-native'

let ss=StyleSheet.create({
    row:{
        flexDirection:'row'
    },
    col:{
        flex:1,
        padding:20,
        alignItems:'center',
        borderWidth:1,
        borderColor:"#73879c"
    },
    text:{
        color:"#73879c",
        
    },
    num:{
        color:"green",
        fontSize:20
    },
    num1:{color:"red",fontSize:20}
    
})

export default class MainScreen extends React.Component{

    //对象属性
    static navigationOptions={
        title:"主菜单",
        headerRight:(
            <TouchableOpacity onPress={()=>{}}>
                <Image source={require("../assets/user.png")} style={{width:36,height:36,borderRadius:18}}/>
            </TouchableOpacity>
        )
    }

    constructor(){
        super()
        this.state={

        }

    }

    componentDidMount(){
        //读取路由参数
        let pid=this.props.navigation.getParam('pid')
        let uname=this.props.navigation.getParam('uname')
        let age=this.props.navigation.getParam("age",20)
        console.log(pid)
        console.log(uname)
        console.log(age)
    }

    render(){
        return (
            <ScrollView>
                {/* 统计相关的组件 */}
                <View style={ss.row}>
                    <View style={ss.col}>
                        <Text style={ss.text}>上架商品总数</Text>
                        <Text style={ss.num}>24,380</Text>
                        <Text style={ss.text}>+128%较上月</Text> 
                    </View>
                    <View  style={ss.col}>
                        <Text style={ss.text}>注册用户总数</Text>   
                        <Text style={ss.num}>1,965</Text> 
                        <Text style={ss.text}>+50%较上月</Text>
                    </View> 
                </View> 
                <View style={ss.row}>
                    <View style={ss.col}>
                        <Text style={ss.text}>上架商品总数</Text>
                        <Text style={ss.num}>24,380</Text>
                        <Text style={ss.text}>+128%较上月</Text> 
                    </View>
                    <View  style={ss.col}>
                        <Text style={ss.text}>当日PC端pv量</Text>   
                        <Text style={ss.num1}>14,281</Text> 
                        <Text style={ss.text}>+50%较上月</Text>
                    </View> 
                </View> 
                <View style={ss.row}>
                    <View style={ss.col}>
                        <Text style={ss.text}>移动端PV；量</Text>
                        <Text style={ss.num1}>29,315</Text>
                        <Text style={ss.text}>+34%较上月</Text> 
                    </View>
                    <View  style={ss.col}>
                        <Text style={ss.text}>APP总下载量</Text>   
                        <Text style={ss.num}>7,422</Text> 
                        <Text style={ss.text}>+18%较上月</Text>
                    </View> 
                </View> 
                {/*功能菜单相关组件  */}
                <View>
                    <View style={ss.row}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("productList")} style={[ss.col,{borderWidth:0}]}>
                            <Image source={require('../assets/menu_product.jpg')} />
                            <Text>商品管理</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[ss.col,{borderWidth:0}]}>
                            <Image source={require('../assets/menu_user.jpg')} />
                            <Text>用户管理</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={ss.row}>
                        <TouchableOpacity style={[ss.col,{borderWidth:0}]}>
                            <Image source={require('../assets/menu_order.jpg')} />
                            <Text>订单管理</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[ss.col,{borderWidth:0}]}>
                            <Image source={require('../assets/menu_refresh.jpg')} />
                            <Text>首页管理</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        )
    }
}
