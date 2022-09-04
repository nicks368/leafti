import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ongs from '../screens/ongs';
import PrimeirosPassos from '../screens/primeiros-passos';


const Stack = createNativeStackNavigator();

export default function StackOngs() {
    return (
        <Stack.Navigator
            
        >
            <Stack.Screen name="primeiros-passos" component={PrimeirosPassos} options={{headerShown: false}}/>
            <Stack.Screen name="ongs" component={Ongs} options={{headerShown: false}} />
        </Stack.Navigator>
    )
} 