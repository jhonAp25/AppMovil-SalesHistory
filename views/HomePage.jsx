import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CardProfile from '../components/CardProfile'
import SummarySales from '../components/SummarySales'
import ListSales from '../components/ListSales'
import Colors from '../assets/config/Colors'

const HomePage = ({navigation}) => {
  return (
    <View style={{ backgroundColor: "#081620", flex: 1}}>
      <View>
          <CardProfile/>
      </View>

      <View style={style.content}>
        <View style={{}}>

          <View style={style.title} >
            <Text style={{ fontSize : 20 ,fontWeight: "800", color: Colors.text , fontFamily: 'Roboto' }}> Ventas</Text>             
          </View>
          
          <SummarySales/>
        
          <View style={{  }} >
            <ListSales navigation={navigation}/>
          </View>

        </View>

      </View>
    </View>
  )
}

export default HomePage


const style = StyleSheet.create({
 
    
  content:{
    flex: 1,
      borderTopRightRadius: 50,
      borderTopLeftRadius: 50,
      paddingTop:30,
      paddingLeft: 40,
      paddingRight:40,
      backgroundColor: Colors.primary,
      
   
  },  
  title :{
            
      display: 'flex',
      flexDirection : 'row',
      justifyContent : 'space-between'
  },
  
 
  
})