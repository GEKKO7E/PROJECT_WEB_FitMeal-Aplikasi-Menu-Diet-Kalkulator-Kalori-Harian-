import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { styles } from "./styles";
import { DietGoal, MealItem } from "./types";

// Array of Objects Data FitMeal
const mealData: MealItem[] = [
  {
    id: 1,
    name: "Dada Ayam Bakar",
    category: "Makan Siang",
    calories: 350,
    protein: 40,
    price: 25000,
    imageUrl:
      "https://i.pinimg.com/736x/73/a0/75/73a0755da93a44f550acca3200593ad1.jpg",
    isPopular: true,
  },
  {
    id: 2,
    name: "Salad Sayur Telur",
    category: "Sarapan",
    calories: 250,
    protein: 15,
    price: 20000,
    imageUrl: "https://picsum.photos/201",
  },
  {
    id: 3,
    name: "Oatmeal Pisang",
    category: "Camilan",
    calories: 200,
    protein: 8,
    price: 15000,
    imageUrl: "https://picsum.photos/202",
    isPopular: true,
  },
];

export default function Index() {
  const appName: string = "FitMeal";
  const userGoal: DietGoal = "Turun BB";

  // Custom Function untuk Render Card Makanan
  const renderMealCard = (item: MealItem) => {
    return (
      <View key={item.id} style={styles.card}>
        {item.isPopular ? (
          <View
            style={{
              backgroundColor: "#fef08a",
              padding: 4,
              borderRadius: 4,
              alignSelf: "flex-start",
              marginBottom: 5,
            }}
          >
            <Text
              style={{ fontSize: 10, color: "#854d0e", fontWeight: "bold" }}
            >
              ⭐ Populer
            </Text>
          </View>
        ) : null}

        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>
          {item.category} • {item.calories} kkal
        </Text>

        <View style={styles.row}>
          <Text style={styles.price}>Rp {item.price}</Text>
          <Pressable style={styles.button}>
            <Ionicons name="add-circle" size={18} color="white" />
            <Text style={styles.buttonText}>Pilih</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{appName}</Text>
        <Text style={styles.headerSubtitle}>Target: {userGoal}</Text>
      </View>

      <TextInput placeholder="Cari menu diet..." style={styles.input} />

      <Text style={styles.sectionTitle}>Rekomendasi Menu</Text>

      <View style={styles.listContainer}>
        {/* Loop Data Menggunakan .map() */}
        {mealData.map((meal) => renderMealCard(meal))}
      </View>
    </ScrollView>
  );
}
