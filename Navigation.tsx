import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from 'components/Home';
import Setting from 'components/Setting';
import Login from 'components/Login';
import Dashboard from 'components/pages/Dashboard';
import ProductDetails from 'components/ProductDetails';
import type { ProductCardDataType } from 'components/ScrollViewCard';

export type RootStackParamList = {
  Home: undefined;
  Setting: undefined;
  Login: undefined;
  Dashboard: undefined;
  ProductDetails: ProductCardDataType;
};

const stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: true }}>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Setting" component={Setting} />
        <stack.Screen name="Login" component={Login} />
        <stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: '#ffffff' },
            headerTintColor: '#000000',
            headerTitleStyle: { fontWeight: 'bold', fontSize: 24 },
          }}
        />
        <stack.Screen name="ProductDetails" component={ProductDetails} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
