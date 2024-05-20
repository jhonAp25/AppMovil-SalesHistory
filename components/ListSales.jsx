import React from 'react'
import { RefreshControl, ScrollView } from 'react-native';
import { Text, View, Image ,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native';
import Colors from '../assets/config/Colors';


const ListSales =({navigation})=>{


    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);


    return (
        <>
        <Text style={{color: Colors.text , fontSize: 18, marginTop: 20 }}>Listado de Ventas </Text>  
        <ScrollView style={style.content} refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }  >
          
            <TouchableOpacity style={style.item} onPress={()=>navigation.push('detalleVenta')} >
                <Text style={{fontSize: 15, flex: 1, color: '#fff',}} >1</Text>
                <Text style={{fontSize: 15,color: '#fff' , flex: 2,fontFamily : 'Roboto_100Thin'}}>Nueva Venta</Text>
                <Text style={{fontSize: 15 ,color: '#F3F2C9' , fontWeight: '400' , flex: 3, textAlign :'right', fontFamily : 'Roboto_700Bold'}}>S/. 45</Text>
            </TouchableOpacity>


            <TouchableOpacity style={style.item} >
                <Text style={{fontSize: 15, flex: 1,color: '#fff',}} >2</Text>
                <Text style={{fontSize: 15,color: '#fff' , flex: 2,fontFamily : 'Roboto_100Thin'}}>Nueva Venta</Text>
                <Text style={{fontSize: 15,color: '#F3F2C9' , flex: 3, textAlign :'right', fontFamily : 'Roboto_700Bold'}}>S/. 45</Text>
            </TouchableOpacity>

        
        </ScrollView>

    </>
    )
}

export default ListSales



const style = StyleSheet.create({
    
   
  
    content:{
       
        marginTop: 20
        
    },
  
    item:{
        marginTop: 7,
        display: 'flex',
        color: '#fff',
        flexDirection: 'row',
       
        justifyContent: 'flex-end',
        borderRadius: 12,
        padding: 10
    }
    
})