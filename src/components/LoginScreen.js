import React  from 'react'
import {Text,View,Button,TextInput,Image,StyleSheet} from  'react-native'

let  ss=StyleSheet.create({
    contarner:{padding:40},
    input:{
        borderBottomColor:'#aaa',
        marginBottom:20,
        borderBottomWidth:1
    },
    box:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginVertical:50
    },
    appTitle:{
        fontSize:25,
        color:'#73879c'
    },
    copyRight:{
        color:'#73879c',
        textAlign:'center'
    }
})


export default class LoginScreen extends React.Component{

    //对象属性
    static navigationOptions={
        title:"管理员登录"
    }

    // 对象构造方法
    constructor(){
        super()
        this.state={
            adminName:'',
            adminPwd:'',
        }
    }
    
    //对象方法
    onAdminNameChange=(val)=>{
        this.setState({adminName:val})
    }
    
    onAdminPwdChange=(val)=>{
        this.setState({adminPwd:val})
    }


    _onPress=()=>{
        //使用ReactNavigation提供的navigate属性进行页面跳转
        //无参数跳转
        // this.props.navigation.navigate('main') 
        //带参数跳转
        // this.props.navigation.navigate('main',{pid:999,uname:"dingding"}) 
        let aname=this.state.adminName;
        let apwd=this.state.adminPwd;
        // alert(adminName+adminPwd)
        //发起异步的服务API请求，进行登录验证
        let loginUrl='http://www.codeboy.com/data/user/login.php'
        fetch(loginUrl,{
            method:'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            body:`uname=${aname}&upwd=${apwd}`
        }).then((res)=>{
            return res.json()
        }).then((result)=>{
            // console.log(result)
            if(result.code===200){
                //登录成功跳转到主界面
                this.props.navigation.navigate('main')
            }else{
                alert(result.msg)
            }
        }).catch((err)=>{
             console.log(err)
        })
    }

    render(){
        return (
            <View style={ss.contarner}>
                <TextInput value={this.state.adminName} onChangeText={this.onAdminNameChange} placeholder="请输入管理员用户名" style={ss.input} />
                <TextInput value={this.state.adminPwd} onChangeText={this.onAdminPwdChange} placeholder="请输入管理员登录密码" secureTextEntry={true} style={ss.input} />
                <Button title="登录" onPress={this._onPress} />
            
                <View style={ss.box}>
                    <Image source={require("../assets/logo.png")}/>
                    <Text style={ss.appTitle}>后台管理系统</Text>
                </View>

                <Text style={ss.copyRight}>©2017 版权所有，CODEBOY.COM</Text>
            </View>
        )
    }
}
