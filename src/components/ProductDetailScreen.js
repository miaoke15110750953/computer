import React  from 'react'
import {Text,View,ScrollView,FlatList,Image,ActivityIndicator,Button,StyleSheet} from  'react-native'
import MySlides from './MySlides';
import MyProductDetail from './MyProductDetail';

let ss=StyleSheet.create({
    lname:{
        color:"#73879c",
        fontSize:15,
        borderBottomWidth:1,
        paddingVertical:15,
        borderColor:"#888"
    },
    subtitle:{
        color:"#73879c",
        fontSize:15,
        paddingVertical:15
    },
    price:{
        color:"red",
        borderBottomWidth:1,
        paddingVertical:15
    },
    image:{marginVertical:30}
})

export default class ProductDetailScreen extends React.Component{

    //对象属性
    static navigationOptions={title:"产品详情"}
    //静态属性
    
    static ProductDetailUrl='http://www.codeboy.com/data/product/details.php?lid='
     
    //构造方法
    constructor(){
        super()
        this.state={
            product:{},   //要绑定的商品数据
        
        }
        
    }
    
    //生命周期函数加载完成
    componentDidMount(){
        //获取商品列表页传过来的参数：lid
    let lid = this.props.navigation.getParam('lid');
    // console.log(lid)
        fetch(ProductDetailScreen.ProductDetailUrl+lid).then((res)=>{
            return  res.json()
        }).then((result)=>{
            console.log(result)
            this.setState({
                product:result.details, 
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    


    //渲染
    render(){
        return (
            <View style={{flex:1,padding:10}}>
                <ScrollView>
                    <Text style={ss.lname}>产品型号：{this.state.product.lname}</Text>
                    <MySlides picList={this.state.product.picList} /> 
                    <Text style={{fontSize:20}}>{this.state.product.title}</Text>
                    <Text style={ss.subtitle}>{this.state.product.subtitle}</Text>
                    <Text style={ss.price}>单价：￥{this.state.product.price}</Text>
                    {/* 把服务器获得的商品详情（html标签）渲染在自定义标签中 */}
                    <MyProductDetail content={this.state.product.details} />
                </ScrollView>    
                <Button title="删除商品" />
            </View>
        )
    }
}
