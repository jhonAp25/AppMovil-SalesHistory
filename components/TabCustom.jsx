import React from 'react'

import { View, Text, TouchableOpacity } from 'react-native';
import Colors from '../assets/config/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default  function TabCustom({ state, descriptors, navigation }) {
    return (
        <View style={{ flexDirection: 'row' ,justifyContent: "space-between" , position: "relative" , backgroundColor: Colors.background , height: 100 , paddingRight: 40 , paddingLeft: 40 }}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
    
            const isFocused = state.index === index;
    
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
    
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };
    
            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

       
             if(label==='Sale'){
                return(
                  <TouchableOpacity
                  key={index}
                  accessibilityRole="button"
                    accessibilityState={isFocused ? { selected: true } : {}}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress ={onPress}
                    onLongPress={onLongPress}
                    style={{ justifyContent: "center", alignItems: "center" }}>
                    <View 
                        style={{position : "relative" , top : -40 ,  backgroundColor : Colors.secondary , width : 70 , height : 70 , borderRadius:35 , borderWidth: 6, borderColor: "#10212D"  , justifyContent: "center" , alignItems : "center"}} >
                      <Ionicons  name="add" color={Colors.text} size={30} />
                    </View>
                  </TouchableOpacity>
                )
                
              } 
    
            return (
              <TouchableOpacity
                key={index}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{  justifyContent: "center", alignItems: "center" }}
              >
                <View style={{flexDirection: "row-reverse" , padding: 10, borderRadius: 10 , backgroundColor :"#081620" , alignItems:"center" , justifyContent: "center" }}>
                    {isFocused ? <Text style={{ color: Colors.text , fontSize: 14 }}  >  {label} </Text>: null}
                    <Ionicons  name={ label === "Home" ? "finger-print-outline" : label === "Gastos" ? "cash-outline" : "person-outline"  } color={Colors.text}  size={30} />
                </View>
              </TouchableOpacity>
            );

           
          })}
        </View>
      );
}



