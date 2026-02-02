import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './screens/Onboarding';
import Setting from './screens/Setting';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import ProductDetails from './screens/ProductDetails';
import type { ProductCardDataType } from 'components/ScrollViewCard';
import Onboarding2 from './screens/onboarding/Onboarding2';
import Onboarding3 from './screens/onboarding/Onboarding3';
import Onboarding4 from './screens/onboarding/Onboarding4';

export type RootStackParamList = {
  Onboarding: undefined;
  Setting: undefined;
  Login: undefined;
  Dashboard: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;
  Onboarding4: undefined;
  ProductDetails: ProductCardDataType;
};

const stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: true }}>
        <stack.Screen name="Onboarding" component={Onboarding} />
        <stack.Screen name="Onboarding2" component={Onboarding2} />
        <stack.Screen name="Onboarding3" component={Onboarding3} />
        <stack.Screen name="Onboarding4" component={Onboarding4} />
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
