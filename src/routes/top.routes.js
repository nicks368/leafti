import React from "react";
import 'react-native-gesture-handler';

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Populares from "../screens/search/screens/populares";
import Especies from "../screens/search/screens/especies";

const Tab = createMaterialTopTabNavigator();

export default function TopNavigator(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="populares" component={Populares} />
            <Tab.Screen name="espécies" component={Especies} />
        </Tab.Navigator>
    );
}