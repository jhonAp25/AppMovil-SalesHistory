import React from 'react'

import { View, Text, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';


export default  function TabCustom({ state, descriptors, navigation }) {
    return (
        <View style={{ flexDirection: 'row' , position: "relative" , backgroundColor: "#050F16"}}>
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
                    style={{ flex: 3 , justifyContent: "center", alignItems: "center" }}>
                    <View 
                        style={{position : "relative" , top : -40 ,  backgroundColor :"#FF4C29" , width : 70 , height : 70 , borderRadius:35 , borderWidth: 6, borderColor: "#10212D"  , justifyContent: "center" , alignItems : "center"}} >
                      <Ionicons  name="add" color='#F3F2C9' size={30} />
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
                style={{ flex: 2 , justifyContent: "center", alignItems: "center" }}
              >
                <View style={{flexDirection: "row-reverse" , padding: 13, borderRadius: 10 , backgroundColor :"#081620" , alignItems:"center" }}>
                    {isFocused ? <Text style={{ color: '#F3F2C9' }} >  {label} </Text>: null}
                    <Ionicons  name="finger-print" color='#F3F2C9' size={30} />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      );
}



