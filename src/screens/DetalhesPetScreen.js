import { View, Text, Image, StyleSheet } from 'react-native';

export default function DetalhesPetScreen({ route }) {
  const { pet } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: pet.imagem }} style={styles.image} />
      <Text style={styles.nome}>{pet.nome}</Text>
      <Text>Espécie: {pet.especie}</Text>
      <Text>Raça: {pet.raca}</Text>
      <Text>Idade: {pet.idade}</Text>
      <Text>Sexo: {pet.sexo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  image: { width: '100%', height: 300, borderRadius: 15, marginBottom: 20 },
  nome: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
});
