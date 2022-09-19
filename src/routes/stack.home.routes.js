import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CommonActions } from '@react-navigation/native';
import Home from '../screens/home';
import PerfilPlanta from '../screens/perfil-planta';
import HeaderPlanta from '../components/header-planta';

const Stack = createNativeStackNavigator();

export default function StackHome() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen 
                name="PerfilPlanta" 
                component={PerfilPlanta} 
                options={({route, navigation})=> ({
                    title: route.params.nome.toUpperCase(),
                    header: ({route}) => {
                        return <HeaderPlanta title={route.params.nome.toUpperCase()} navigation={()=> {navigation.dispatch(CommonActions.goBack());}}/>
                    }
                })}
            />
            
        </Stack.Navigator>
    ) 
} 