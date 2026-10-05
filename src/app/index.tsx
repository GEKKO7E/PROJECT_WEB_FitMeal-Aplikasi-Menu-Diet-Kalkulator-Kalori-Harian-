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
const MEAL_LIST: MealItem[] = [
  {
    id: 1,
    name: "Dada Ayam Panggang & Salad",
    category: "Makan Siang",
    calories: 320,
    protein: 38,
    price: 32000,
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300",
    isPopular: true,
  },
  {
    id: 2,
    name: "Oatmeal Buah Pisang & Chia",
    category: "Sarapan",
    calories: 220,
    protein: 8,
    price: 18000,
    imageUrl:
      "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=300",
  },
  {
    id: 3,
    name: "Steak Salmon & Brokoli Rebus",
    category: "Makan Malam",
    calories: 450,
    protein: 42,
    price: 55000,
    imageUrl:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300",
    isPopular: true,
  },
  {
    id: 4,
    name: "Tahu Tempe Tumis Kacang Polong",
    category: "Makan Siang",
    calories: 280,
    protein: 20,
    price: 15000,
    imageUrl:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300",
  },
];

export default function FitMealApp() {
  // State untuk form input kalkulator kalori harian
  const [weight, setWeight] = useState<string>("65");
  const [height, setHeight] = useState<string>("170");
  const [targetCalories, setTargetCalories] = useState<number>(2000);

  // ==========================================
  // 4. PENERAPAN CUSTOM FUNCTIONS (Bobot 10%)
  // ==========================================

  // Custom Function 1: Menghitung kebutuhan kalori harian (BMR dasar)
  const calculateDailyCalories = (
    userWeight: number,
    userHeight: number,
  ): number => {
    // Rumus estimasi cepat kalori pemeliharaan
    const estimated = Math.round(10 * userWeight + 6.25 * userHeight - 100);
    return estimated > 0 ? estimated : 2000;
  };

  // Custom Function 2: Format angka ke mata uang Rupiah
  const formatRupiah = (amount: number): string => {
    return Rp ${amount.toLocaleString("id-ID")};
  };

  // Custom Function 3: Menentukan status & warna badge kalori
  const getCalorieStatus = (cal: number) => {
    if (cal <= 250) {
      return { label: "Low Cal", bgColor: "#dcfce7", textColor: "#15803d" };
    } else if (cal <= 400) {
      return { label: "Moderate", bgColor: "#fef9c3", textColor: "#a16207" };
    } else {
      return { label: "High Cal", bgColor: "#fee2e2", textColor: "#b91c1c" };
    }
  };
