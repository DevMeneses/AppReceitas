import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Detail from "../screens/Detail";
import Search from "../screens/Search";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: "Detalhes da receita",
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: "Veja o que encontramos",
        }}
      />
    </Stack.Navigator>
  );
}
