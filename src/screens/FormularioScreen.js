import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function FormularioScreen() {
  const [nome, setNome, senha, setSenha] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <Text>Cadastro para Adoção</Text>
      <TextInput
        placeholder="Seu nome"
        value={nome}
        onChangeText={setNome}
        style={{ borderWidth: 1, padding: 10, marginTop: 10 }}
      />
      <TextInput
        placeholder="Senha"
        value={senha}
        
        onChangeText={setSenha}
        style={{ borderWidth: 1, padding: 10, marginTop: 10 }}
      />



      <Button title="Enviar" onPress={() => alert('Enviado!')} />
    </View>
  );
}
