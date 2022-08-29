import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screens/home';
import PerfilPlanta from '../screens/perfil-planta';
import FormPlanta from '../screens/form-planta';

const Stack = createNativeStackNavigator();

export default function StackHome() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen 
                name="PerfilPlanta" 
                component={PerfilPlanta} 
                options={({route})=> ({
                    title: route.params.nome,
                    headerStyle:{
                        backgroundColor: '#56AB2F',
                    },
                    headerTitleStyle:{
                        color: '#fff',
                    },
                    headerTintColor: '#fff',
                })}
            />
            <Stack.Screen 
                name="Formulário" 
                component={FormPlanta} 
                options={({route})=> ({
                    title: route.name,
                    headerStyle:{
                        backgroundColor: '#56AB2F',
                    },
                    headerTitleStyle:{
                        color: '#fff',
                    },
                    headerTintColor: '#fff',
                })}
            />
            
        </Stack.Navigator>
    )
} 