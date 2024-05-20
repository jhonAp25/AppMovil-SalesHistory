import React, { useEffect, useState } from 'react'
// import {Modal ,FormControl, Text, Button, Box, Image, Center, Circle, Select, Radio} from 'native-base'

import { Modal, View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';


import {  Field, useFormik , Form } from 'formik'


const DetailsProduct = ({setModalVisible,modalVisible, modelo}) => {

   // let{precioMax,color, talla,stock,  getListaPorModeloAndTalla, getListaPorModeloAndColor}=useContext(ProductoContext)
  //  let{addCarrito}=useContext(PedidoContext)

    /********************** S T A T E ************************ */
    const[cant, setCant]=useState(1)
    const[precioTotal, setPrecioTotal]=useState(10)
    const[productoSelect, setProductoSelct]=useState([{
      }])

    

    

   

    const selectColor =(id)=>{     
        getListaPorModeloAndColor(modelo.id, id)  
           
    }

    const selectTalla =(id)=>{ 
        getListaPorModeloAndTalla(modelo.id,id)
    }
    const llenadoProd=()=>{
        setProductoSelct([...productoSelect,{
            cantidad: cant,
         //   pedido: { id: 0},
            producto: {id: 1 },
            subTotal: precioTotal
          }])


     setModalVisible(!modalVisible)
    }


    // const selectProducto=()=>{
    //   llenadoProd()

    //     addCarrito({
    //         cantidad: cant,
    //      //   pedido: { id: 0},
    //         producto: {id: 1 },
    //         subTotal: precioTotal
    //       })

     
    // }
    

  
    useEffect(() => {
       
        setPrecioTotal(10 * cant)
    }, [cant])

    return (    <View style={styles.container}>
       
  
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>


              <Text style={styles.modalText}>Producto Seleccionado</Text>


              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cerrar Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    )
}

export default DetailsProduct
const styles = StyleSheet.create({
    container: {
     
    },
    centeredView: {
        
        height: "100%",
        backgroundColor: "#1a203aba",
        flex: 1,
        justifyContent: 'flex-end'
        
        
    },
    modalView: {
        width : "100%",
        height: "85%",
        
        backgroundColor: '#35383A',
        borderTopLeftRadius:30,
        borderTopRightRadius: 30,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        color: "white",
        
        elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });
  