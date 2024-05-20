import React from 'react'
import { Text, View, Image ,StyleSheet , TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../assets/config/Colors';





const CardProfile = () => {
    return (
        <View style={style.content}>
        <View>
            <Image  style={style.avatar}  source={{uri : 'https://picsum.photos/800/700'}} />
        </View>

        <View style={style.usuario}>
            <Text style={{color: Colors.text, fontWeight: 'bold' , fontSize: 22 , fontFamily : 'Roboto',}} >Hola Jhon Apaza</Text>
            <Text style={{color: Colors.text_secundary ,fontSize: 15, fontWeight:100 , fontFamily : 'Roboto', }} >Bienvenido de nuevo</Text>
        </View>

        <View  style={style.icono}>
            <Ionicons name='log-out-outline' color={Colors.text} size={30} />
        </View>

    </View>
    )
}


export default CardProfile



const style = StyleSheet.create({
    
    content:{
        height: 120,
        marginTop : 35,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 17,
        fontFamily: 'Roboto',
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        
        
    },
    avatar:{
        height: 50 ,
        width : 50 ,
        borderRadius : 50,
       
       
    },
    usuario : {
        alignItems : 'flex-start',
        justifyContent: "center",
        flex:1,
        marginLeft: 15
       
    },
    icono : {
        display : 'flex',
       
    }
   
    
   
    
    
})