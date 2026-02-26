import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

import { Link } from "expo-router";
import { useState } from "react";
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function Signup() {
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  function handleCadastrar() {
    if (senha !== confirmaSenha) {
      Alert.alert("Atenção", "Senha não confere!");
    } else {
      Alert.alert("Sucesso", "Senha confirmada!");
      // Aqui você pode continuar com a lógica de cadastro
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: "padding", android: "height" })}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Image
            source={require("@/assets/image2.png")}
            style={styles.ilustration}
          />
          <Text style={styles.title}>Cadastrar</Text>
          <Text style={styles.subtitle}>Crie sua conta para acessar</Text>
          <View style={styles.form}>
            <Input placeholder="Nome" />
            <Input placeholder="E-mail" keyboardType="email-address" />
            <Input
              placeholder="Senha"
              secureTextEntry
              onChangeText={setSenha}
            />
            <Input
              placeholder="Confirmar Senha"
              secureTextEntry
              onChangeText={setConfirmaSenha}
            />
            <Button label="Cadastrar" onPress={handleCadastrar} />
          </View>
          <Text style={styles.footerText}>
            Já tem uma conta?
            <Link href="/" style={styles.footerLink}>
              {" "}
              Entre aqui
            </Link>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD",
    padding: 32,
  },
  ilustration: {
    width: "100%",
    height: 330,
    resizeMode: "contain",
    marginTop: 62,
  },
  footerText: {
    textAlign: "center",
    marginTop: 24,
    color: "#585860",
  },
  footerLink: {
    color: "#0929b8",
    fontWeight: 700,
  },
  form: {
    marginTop: 24,
    gap: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: 900,
  },
  subtitle: {
    fontSize: 16,
  },
});
