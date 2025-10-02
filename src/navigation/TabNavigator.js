import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackAdocao from './StackAdocao';
import FormularioScreen from '../screens/FormularioScreen';
import SobreScreen from '../screens/SobreScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Adoção') iconName = 'paw';
          if (route.name === 'Cadastrar') iconName = 'add-circle';
          if (route.name === 'Sobre') iconName = 'information-circle';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FF6B6B',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Adoção" component={StackAdocao} options={{ headerShown: false }} />
      <Tab.Screen name="Cadastrar" component={FormularioScreen} />
      <Tab.Screen name="Sobre" component={SobreScreen} />
    </Tab.Navigator>
  );
}
