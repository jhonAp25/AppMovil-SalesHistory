import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet} from 'react-native';
import HomePage from './views/HomePage';
import SalePage from './views/SalePage';
import TabCustom from './components/TabCustom';
import CostsPage from './views/CostsPage';
import ProfilePage from './views/ProfilePage';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StatusBar } from 'expo-status-bar';
import HeaderCustom from './components/HeaderCustom';

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <>
    <StatusBar style='light'   />
    <NavigationContainer >
      <Tab.Navigator   tabBar={props => <TabCustom {...props} />} >
        <Tab.Screen name="Home" component={HomePage}  options={{header: ()=> null}}   />
        <Tab.Screen name="Gastos"  component={CostsPage}   options={{header: ()=> null}}   />
        <Tab.Screen name="Perfil"  component={ProfilePage} options={{header: ()=> <HeaderCustom name='Perfil' />  }}   />
        <Tab.Screen name="Sale" component={SalePage} options={{
                                                                header: ()=> <HeaderCustom name='Nueva Venta'    />
                                                                }}   />
      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
}

