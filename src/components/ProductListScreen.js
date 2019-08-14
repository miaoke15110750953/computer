import React  from 'react'
import {Text,View,FlatList,Image,Button,ActivityIndicator} from  'react-native'



export default class ProductListScreen extends React.Component{

    //对象属性
    static navigationOptions={
        title:"产品列表"
    }
    //静态属性 所有的组件实例公用
    static serverUrl="http://www.codeboy.com/"
    static productListUrl="http://www.codeboy.com/data/product/list.php?pno="
    pno=0   //实例属性，即将要加载的数据页号
    //构造对象方法
    constructor(){
        super()
        this.state={
            plist:[]   //商品数组    
        }

    }
    //生命周期完成加载
    componentDidMount(){
        //当组件挂载完成要异步请求服务器端商品列表数据
        this.pno++;
        fetch(ProductListScreen.productListUrl+this.pno).then((res)=>{
            return res.json()
        }).then((result)=>{
            console.log(result)
            this.setState({
                plist:result.data
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    //对象方法
    _renderItem=(data)=>{ //渲染列表项方法
        // console.log('一个列表项对应的数据：',data)
        return (
            <View style={{flexDirection:"row",padding:10,alignItems:'center'}} >
                <Image source={{uri:ProductListScreen.serverUrl+data.item.pic}} style={{width:80,height:80}} resizeMode="stretch"/>
                <View style={{flex:1}}>
                    <Text numberOfLines={1} ellipsizeMode="tail" >{data.item.title}</Text>
                    <Text style={{color:"#f00",fontWeight:"bold"}}>价格￥：{data.item.price}</Text>
                </View>
                <Button title="查看详情" onPress={()=>{this.props.navigation.navigate('productDetail',{lid:data.item.lid})}}/>
            </View>
        )
    }
    _onEndReached=()=>{
        this.pno++;
        fetch(ProductListScreen.productListUrl+this.pno).then((res)=>{
            return res.json()
        }).then((result)=>{
            //把新获得的数据放到原有数据尾部
            let plist=this.state.plist;    //已有数据
            plist=plist.concat(result.data)  //拼接新数据
            this.setState({plist})           //保存到组件状态
        }).catch((err)=>{console.log(err)})
    }

    render(){
        return (
            <FlatList data={this.state.plist} renderItem={this._renderItem} onEndReachedThreshold={0.1} onEndReached={this._onEndReached} keyExtractor={(item,index)=>index+''}> 
                
            </FlatList>
        )
    }
}
