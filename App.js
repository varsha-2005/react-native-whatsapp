import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Choose an icon library
import LogIn from './screens/LogIn';
import SignUp from './screens/SignUp';
import About from './screens/About';
import Profile from './screens/Profile';
import Chat from './screens/Chat';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  function BottomTabs() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'ChatsScreen') {
              iconName = focused ? 'chat' : 'chat-bubble-outline';
            } else if (route.name === 'ProfileScreen') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#25d366',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen name='ChatsScreen' component={Chat} />
        <Tab.Screen name='ProfileScreen' component={Profile}  />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='BottomNav' component={BottomTabs} options={{ headerShown: false }} />
        <Stack.Screen name='AboutScreen' component={About} />
        <Stack.Screen name='Login' component={LogIn} options={{ headerShown: false }} />
        <Stack.Screen name='Signup' component={SignUp} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
