import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login";
import Profile from "../screens/profile";
import Cadastro from "../screens/cadastro";


const Stack = createNativeStackNavigator();

export default function MeuStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
        </Stack.Navigator>
    )
} 
// options={({route})=> ({id: route.params?.id,})}