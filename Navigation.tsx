import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from 'components/Home';
import Setting from 'components/Setting';
import Login from 'components/Login';
import Dashboard from 'components/pages/Dashboard';

const stack = createNativeStackNavigator();

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
            headerStyle: { backgroundColor: '#ffffff' },
            headerTintColor: '#000000',
            headerTitleStyle: { fontWeight: 'bold', fontSize: 24 },
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
