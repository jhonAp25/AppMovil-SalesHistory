import { StyleSheet , FlatList, TouchableOpacity, View, Text, ScrollView, Pressable, Image } from 'react-native'
import React ,{useEffect, useState,useContext} from 'react'


const TypeProduct =({navigation})=>{

const DATA = [  {
    "id": 1,
    "nombre": "tipo01",
    "modelo": [
      {
        "id": 1,
        "nombre": "modelo01",
        "imagenProducto": "https://res.cloudinary.com/dod2jvyh4/image/upload/v1714429811/Shop%20Apaza/conjuto_fugocp.png"
      },
      {
        "id": 2,
        "nombre": "modelo02",
        "imagenProducto": "https://res.cloudinary.com/dod2jvyh4/image/upload/v1714429811/Shop%20Apaza/casaca_j2yclf.png"
      },
      {
        "id": 3,
        "nombre": "modelo03",
        "imagenProducto": "https://res.cloudinary.com/dod2jvyh4/image/upload/v1714429811/Shop%20Apaza/polodepor_bonovj.png"
      },
      {
        "id": 4,
        "nombre": "modelo04",
        "imagenProducto": "https://res.cloudinary.com/dod2jvyh4/image/upload/v1714429810/Shop%20Apaza/short_jgbi0e.png"
      }
    ]
  },
  {
    "id": 2,
    "nombre": "tipo02",
    "modelo": [
      {
        "id": 5,
        "nombre": "modelo05",
        "imagenProducto": "https://i.imgur.com/jgrpjpJ.png"
      },
      {
        "id": 6,
        "nombre": "modelo06",
        "imagenProducto": "https://i.imgur.com/SJDeNJn.png"
      },
      {
        "id": 7,
        "nombre": "modelo07",
        "imagenProducto": "https://i.imgur.com/R5kKJvP.png"
      },
      {
        "id": 8,
        "nombre": "modelo08",
        "imagenProducto": "https://i.imgur.com/OOjfMCM.png"
      }
    ]
  },
  {
    "id": 3,
    "nombre": "tipo03",
    "modelo": [
      {
        "id": 9,
        "nombre": "modelo09",
        "imagenProducto": "https://i.imgur.com/3C0oTzj.png"
      },
      {
        "id": 10,
        "nombre": "modelo10",
        "imagenProducto": "https://i.imgur.com/RQ4gtMg.png"
      },
      {
        "id": 11,
        "nombre": "modelo11",
        "imagenProducto": "https://i.imgur.com/Btg1UPQ.png"
      },
      {
        "id": 12,
        "nombre": "modelo12",
        "imagenProducto": "https://i.imgur.com/MwtLTBA.png"
      }
    ]
  }
] 

const DATA_modelo = [
    {
      "id": 1,
      "nombre": "modelo01",
      "imagenProducto": "https://res.cloudinary.com/dod2jvyh4/image/upload/v1714429811/Shop%20Apaza/conjuto_fugocp.png"
    },
    {
      "id": 2,
      "nombre": "modelo02",
      "imagenProducto": "https://res.cloudinary.com/dod2jvyh4/image/upload/v1714429811/Shop%20Apaza/casaca_j2yclf.png"
    },
    {
      "id": 3,
      "nombre": "modelo03",
      "imagenProducto": "https://res.cloudinary.com/dod2jvyh4/image/upload/v1714429811/Shop%20Apaza/polodepor_bonovj.png"
    },
    {
      "id": 4,
      "nombre": "modelo04",
      "imagenProducto": "https://res.cloudinary.com/dod2jvyh4/image/upload/v1714429810/Shop%20Apaza/short_jgbi0e.png"
    }
  ]


    const renderItem = ({ item }) => (
        <Pressable onPress={() => handleSizeClick(1)} >
            <View   style={style.item}  >
                <Image style={style.image} source = {{uri : item.imagenProducto}} alt='ropa-modelo'   />
                <Text style={{color: '#F3F2C9', textTransform: 'capitalize', fontSize: 14 , }} > {item.nombre} </Text>
            </View>
        </Pressable>
    );



    return (
        <>
       

        <ScrollView style={style.content} >

            {DATA.map(t=>(
        
                <View  >
                <Text style={{fontWeight: 'bold' , fontSize : 15 ,marginTop: 30 , color: '#838A8F', textTransform:'uppercase'}}> {t.nombre}</Text>
                        <FlatList
                            style={{flex : 1}}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={DATA_modelo}
                        
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                </View>
        
            ))}
           
          
        </ScrollView>


       
        </>
        
    )
}

export default TypeProduct

const style = StyleSheet.create({
    content : {
        marginLeft: 30,
    
        
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