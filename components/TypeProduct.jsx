import { StyleSheet , FlatList, TouchableOpacity, View, Text, ScrollView } from 'react-native'
import React ,{useEffect, useState,useContext} from 'react'


const TypeProduct =({navigation})=>{

    const renderItem = ({ item }) => (
        <Pressable onPress={() => handleSizeClick(1)} >
            <View   style={style.item}  >
                <Image style={style.image} source = {{uri : item.imagenProducto}} alt='ropa-modelo'   />
                <Text style={{color: '#F3F2C9', textTransform: 'capitalize', fontSize: 14 , }} > nombre  </Text>
            </View>
        </Pressable>
    );



    return (
        <>
       

        <ScrollView 
                    maxHeight='100%' 
                    style={style.content} >
        
            <View 
             >
            <Text style={{fontWeight: 'bold' , fontSize : 15 ,marginTop: 30 , color: '#838A8F', textTransform:'uppercase'}}> HOLA</Text>
                    <FlatList
                        style={{flex : 1, maxHeight: 195}}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                       
                        data={t.modelo}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
            </View>
        
    
           
          
        </ScrollView>


       
        </>
        
    )
}

export default TypeProduct

const style = StyleSheet.create({
    content : {
        marginLeft: 30
        
    },
    image:{
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    item:{
        width: 150,
        height: 150,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#10202D',
        position: 'relative',
        marginHorizontal: 6,
        marginTop: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

      

        },
    nombre:{
        position: 'absolute',
        backgroundColor: '#244a8a',
        width : '100%',
        padding: 10,
        textAlign: 'center',
        color: '#fff',
       
        textTransform: 'uppercase'
        },
        titleModal:{
            color : '#879096',
          
        },

})