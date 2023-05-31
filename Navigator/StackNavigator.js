import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Welcome from "../Screens/Welcome";
import Agenda from "../Screens/Agenda";

const Stack = createStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Welcome' component={Welcome}/>
            <Stack.Screen name='Agenda' component={Agenda}/>
        </Stack.Navigator>
    )
}

export default function StackNavigator(){
    return(
    <NavigationContainer>
        <MyStack/>
    </NavigationContainer>
    )
}

