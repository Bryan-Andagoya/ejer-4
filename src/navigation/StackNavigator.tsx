import { createStackNavigator } from "@react-navigation/stack";

import { ImagesScreen, LoginScreen, WelcomeScreen } from "../screens";

export type StackNavigatorParamList = {
  Welcome: undefined;
  Login: undefined;
  Images: undefined;
};

const Stack = createStackNavigator<StackNavigatorParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ title: "" }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Images" component={ImagesScreen} />
    </Stack.Navigator>
  );
};
