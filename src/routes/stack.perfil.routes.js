import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CommonActions } from '@react-navigation/native';
import HeaderTermos from '../components/header-termos';
import Login from "../screens/login";
import Profile from "../screens/profile";
import Cadastro from "../screens/cadastro";
import Termos from '../screens/termos';

const Stack = createNativeStackNavigator();

export default function StackPerfil() {
    return (
        <Stack.Navigator initialRouteName='Cadastro'>
            <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} initialParams={{token: "329392"}}/>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}} />
            <Stack.Screen name="Termos" component={Termos} options={({route, navigation})=> ({
                    title: "Termos",
                    header: ({route}) => {
                        return <HeaderTermos title={"Termos"} navigation={()=> {navigation.dispatch(CommonActions.goBack());}}/>
                    }
                })} />
        </Stack.Navigator>
    )
} 
// options={({route})=> ({id: route.params?.id,})}