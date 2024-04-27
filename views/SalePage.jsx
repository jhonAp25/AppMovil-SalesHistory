import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TypeProduct from '../components/TypeProduct'

const SalePage = ({navigation}) => {
  return (
    <View style={style.content}>
            
            <TypeProduct navigation={navigation}  hola='hola' />
    </View>
  )
}

export default SalePage


const style = StyleSheet.create({
  content:{
      backgroundColor: '#081620',
      height: '100vh',
      padding: 10
  }
})