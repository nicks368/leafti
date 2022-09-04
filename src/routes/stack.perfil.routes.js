import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login";
import Profile from "../screens/profile";
import Cadastro from "../screens/cadastro";


const Stack = createNativeStackNavigator();

export default function StackPerfil() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} initialParams={{token: "329392"}}/>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
        </Stack.Navigator>
    )
} 
// options={({route})=> ({id: route.params?.id,})}