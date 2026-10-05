import { Ionicons } from "@expo/vector-icons";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Codelab4() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons name="information-circle" size={40} color="red" />
        <Text style={styles.title}>Hello World</Text>
      </View>

      <View style={styles.subHeaderContainer}>
        <Text style={styles.subtitle}>Evo wthas up gess..</Text>
        <Ionicons name="hand-left" size={24} color="orange" />
      </View>

      <TextInput placeholder="Type here..." style={styles.input} />
      <Button title="Click Me" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8f2fe",
    justifyContent: "center",
    padding: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    gap: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
  },
  subHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    gap: 6,
  },
  subtitle: {
    fontSize: 16,
    color: "#333",
  },
  input: {
    borderWidth: 2,
    borderColor: "blue",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
});
