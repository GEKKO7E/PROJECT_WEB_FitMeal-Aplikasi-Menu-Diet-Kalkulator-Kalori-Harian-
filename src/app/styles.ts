import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0f172a",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#64748b",
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#334155",
  },
  listContainer: {
    gap: 15,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 16,
    elevation: 3,
    shadowColor: "#000",
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0f172a",
  },
  subtitle: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0284c7",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#0284c7",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: "center",
    gap: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  }
});