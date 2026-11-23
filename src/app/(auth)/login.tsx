import { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { supabase } from "../../services/supabase";

export default function LoginScreen() {
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleAuth = async () => {
    // 1. Sanitasi input (.trim())
    const cleanEmail = email.trim();
    if (!cleanEmail || !password) {
      setErrorMsg("Email dan password wajib diisi!");
      return;
    }

    setLoading(true);
    setErrorMsg(null);

    try {
      if (isRegistering) {
        // Alur Registrasi
        const { error } = await supabase.auth.signUp({
          email: cleanEmail,
          password: password,
          options: {
            data: {
              full_name: name.trim() || "User",
            },
          },
        });
        if (error) throw error;
        Alert.alert("Berhasil", "Akun berhasil dibuat! Silakan masuk.");
        setIsRegistering(false);
      } else {
        // Alur Login
        const { error } = await supabase.auth.signInWithPassword({
          email: cleanEmail,
          password: password,
        });
        if (error) throw error;
      }
    } catch (err: any) {
      // Penanganan error tanpa membuat aplikasi crash
      setErrorMsg(err.message || "Terjadi kesalahan saat autentikasi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={authStyles.container}
    >
      <View style={authStyles.card}>
        <Text style={authStyles.title}>
          {isRegistering ? "Buat Akun Baru" : "Selamat Datang"}
        </Text>
        <Text style={authStyles.subtitle}>
          {isRegistering
            ? "Daftar untuk mengelola menu makanan Anda"
            : "Masuk ke aplikasi kuliner Anda"}
        </Text>

        {errorMsg ? <Text style={authStyles.errorText}>{errorMsg}</Text> : null}

        {isRegistering && (
          <TextInput
            placeholder="Nama Lengkap"
            placeholderTextColor="#888"
            style={authStyles.input}
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />
        )}

        <TextInput
          placeholder="Email"
          placeholderTextColor="#888"
          style={authStyles.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          autoCorrect={false}
        />

        <TextInput
          placeholder="Password (min 6 karakter)"
          placeholderTextColor="#888"
          style={authStyles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Pressable
          style={[authStyles.button, loading && { opacity: 0.7 }]}
          onPress={handleAuth}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={authStyles.buttonText}>
              {isRegistering ? "Daftar Sekarang" : "Masuk"}
            </Text>
          )}
        </Pressable>

        <Pressable
          onPress={() => {
            setIsRegistering(!isRegistering);
            setErrorMsg(null);
          }}
          style={authStyles.switchBtn}
        >
          <Text style={authStyles.switchText}>
            {isRegistering
              ? "Sudah punya akun? Masuk di sini"
              : "Belum punya akun? Daftar di sini"}
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#121212",
    padding: 24,
  },
  card: {
    backgroundColor: "#1E1E1E",
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#333",
  },
  title: { fontSize: 24, fontWeight: "bold", color: "#fff", marginBottom: 8 },
  subtitle: { fontSize: 14, color: "#aaa", marginBottom: 20 },
  errorText: { color: "#ff5252", marginBottom: 12, fontSize: 13 },
  input: {
    backgroundColor: "#2A2A2A",
    color: "#fff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    fontSize: 15,
  },
  button: {
    backgroundColor: "#FF5722",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  switchBtn: { marginTop: 16, alignItems: "center" },
  switchText: { color: "#FF8A65", fontSize: 14 },
});
