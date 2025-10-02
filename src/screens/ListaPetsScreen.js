import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const pets = [
  {
    id: 1,
    nome: "Rex",
    especie: "Gordao",
    raca: "Magrin",
    idade: "2 anos",
    sexo: "Macho",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgQtZ2VqdAd2WVg92aWV8AyI6lBKMV6OYuRg&s",
  },
  {
    id: 2,
    nome: "Luna",
    especie: "Gato",
    raca: "Xgordao",
    idade: "1 ano",
    sexo: "Fêmea",
    imagem: "https://www.patasdacasa.com.br/sites/default/files/noticias/2019/10/gato-obeso-quando-o-aumento-de-peso-indica-um-problema-mais-serio.jpg",
  },
  {
    id: 3,
    nome: "Thor",
    especie: "Gato",
    raca: "LasanhaBull",
    idade: "3 anos",
    sexo: "Macho",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk3-hRvrNwCOYwNFSdN5Uwfu5XqqTKxLkxFA&s",
  },
  {
    id: 4,
    nome: "Garfield",
    especie: "Gato",
    raca: "Laranja Preguiçoso",
    idade: "5 anos",
    sexo: "Macho",
    imagem: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/11/garfield-e1699892660803.jpg?w=820&h=461&crop=1",
  },
  {
    id: 5,
    nome: "Nina",
    especie: "Gato",
    raca: "Pretin",
    idade: "4 anos",
    sexo: "Fêmea",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaQngHnGqU_V0nOrUO86AezOj2NjR0P624A&s",
  },
];

export default function ListaPetsScreen({ navigation }) {
  const [adotados, setAdotados] = useState([]);

  function toggleAdotar(id) {
    setAdotados(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const adotado = adotados.includes(item.id);

          return (
            <View style={[styles.card, adotado && { borderWidth: 3, borderColor: 'red' }]}>
              <Image source={{ uri: item.imagem }} style={styles.image} />
              <Text style={styles.nome}>{item.nome} - {item.raca}</Text>

              <View style={styles.row}>
                <TouchableOpacity
                  style={styles.buttonDetalhes}
                  onPress={() => navigation.navigate('DetalhesPet', { pet: item })}
                >
                  <Ionicons name="paw" size={20} color="#fff" />
                  <Text style={styles.buttonText}> Detalhes</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttonAdotar}
                  onPress={() => toggleAdotar(item.id)}
                >
                  <Ionicons name="heart" size={20} color="#fff" />
                  <Text style={styles.buttonText}> Quero Adotar</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#f8f8f8' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    alignItems: 'center',
    padding: 10,
  },
  image: { width: '100%', height: 200, borderRadius: 10 },
  nome: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  buttonDetalhes: {
    flexDirection: 'row',
    backgroundColor: '#FF6B6B',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonAdotar: {
    flexDirection: 'row',
    backgroundColor: '#FF3B3B',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
