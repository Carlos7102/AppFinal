import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./welcome";
import SignIn from ".";

const Stack = createNativeStackNavigator();

export default function Rotas(){
    return(
        <Stack.Navigator>
          
            <Stack.Screen
               name="SignIn"
               component={SignIn}
                options={{ headerShown: false}}
            />

              <Stack.Screen
               name="Welcome"
               component={Welcome}
               options={{ headerShown: false}}
            />
        </Stack.Navigator>
    )
}