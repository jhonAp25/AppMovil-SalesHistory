import React from 'react'
import { Text, View, Image ,StyleSheet} from 'react-native';
import Colors from '../assets/config/Colors';


const SummarySales =()=>{
    return (
        <View style={style.resumen}>
            <View style={{flex : 3, alignItems: "flex-start"}}>
                <View style={{flexDirection:"row" , alignItems: "baseline"}}  >
                    <Text style={{color :'#9BB9BA', marginBottom: 10,fontFamily: 'Roboto_400Regular'}} >Total de Ventas </Text>
                    <View style={style.badge}>
                        <Text style={{color: "#9B9FA2"}}>17</Text> 
                    </View>
                </View> 
                <Text style={{fontWeight: 'bold' , fontSize : 25 , marginRight : 14 , color :'#fff' }}> S/ 500</Text>
            </View>

            <View style={{flex : 1, justifyContent:'center', alignItems: 'center'}}>
                    <Image  source={require('../assets/images/point-of-sale.png')}
                            resizeMode='contain'
                            style={{width: 35, height: 35 , tintColor: Colors.text_secundary}} />
            </View> 
                
        </View>
    )

}

export default SummarySales


const style = StyleSheet.create({
    
    resumen:{
        flexDirection: 'row',
        padding:  20,
        backgroundColor: '#055052',
        marginTop: 10,
        borderRadius : 10
        },
    badge:{
        fontSize: 10,
        color:'#9B9FA2',
        width:  32,
        height: 32,
        textAlign: "center",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
        backgroundColor: '#050F16'
    }
})