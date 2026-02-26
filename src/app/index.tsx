import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  function handleCadastrar() {
    console.log("Botão clicado");

    if (senha !== confirmaSenha) {
      Alert.alert("Atenção", "Senha não confere!");
    } else {
      Alert.alert("Sucesso", "Senha confirmada!");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
      />

      <TextInput
        placeholder="Confirmar Senha"
        secureTextEntry
        style={styles.input}
        value={confirmaSenha}
        onChangeText={setConfirmaSenha}
      />

      <Button title="Cadastrar" onPress={handleCadastrar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});
