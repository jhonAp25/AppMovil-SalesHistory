import { StatusBar } from "expo-status-bar";
import { View, ViewBase } from "react-native"
import { Pressable, Text } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';


const HeaderCustom =({name})=>{
    return (
        <>
       
        <View  style={{ backgroundColor:'#081620'  ,height:90, justifyContent:'space-between', alignItems:'center', borderBottomWidth:1, borderColor:'#000', flexDirection:'row' ,paddingRight:18 ,paddingLeft:18, paddingTop: 15}}  >
            <Text style={{ textAlign:'center', color:'#fff', fontFamily:'roboto_400Regular', fontWeight: "800", fontSize:20 }}  >{name}</Text>
            {name==='Nueva Venta'
            ?<Pressable position='relative'  >
                <Ionicons  name="cart-outline" color='#FFF' size={28} />    
                <View style={{ backgroundColor :'#CF4040',position:'absolute', padding:1 ,top:-10 ,right:-10,justifyContent:'center' ,alignItems:'center' , width:23,height:23, borderRadius: 20}}>
                    <Text style={{fontSize:13 ,color:'#fff', fontFamily:'Roboto_100Thin'}}  >2</Text>
                </View>
            
            </Pressable> 
            
            : null  }
        </View>  
    </>
    )
}

export default HeaderCustom