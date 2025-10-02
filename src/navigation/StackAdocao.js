import { createStackNavigator } from '@react-navigation/stack';
import ListaPetsScreen from '../screens/ListaPetsScreen';
import DetalhesPetScreen from '../screens/DetalhesPetScreen';

const Stack = createStackNavigator();

export default function StackAdocao() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListaPets"
        component={ListaPetsScreen}
        options={{ title: 'Pets para Adoção' }}
      />
      <Stack.Screen
        name="DetalhesPet"
        component={DetalhesPetScreen}
        options={{ title: 'Detalhes do Pet' }}
      />
    </Stack.Navigator>
  );
}
