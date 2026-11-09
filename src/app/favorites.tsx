import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  getFavoriteMeals,
  toggleFavoriteService,
} from "../services/mealService";
import { MealItem } from "../types";

export default function FavoritesScreen() {
  const router = useRouter();
  const [favorites, setFavorites] = useState<MealItem[]>([]);

  useEffect(() => {
    // Memuat daftar favorit dari service
    getFavoriteMeals().then((data) => setFavorites(data));
  }, []);

  const handleRemoveFavorite = async (meal: MealItem) => {
    // PASSING OBJEK 'meal' UTUH (BUKAN meal.name)
    await toggleFavoriteService(meal, false);
    setFavorites((prev) => prev.filter((item) => item.id !== meal.id));
  };

  return (
    <View style={styles.container}>
      {/* Header Halaman Favorit */}
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={20} color="#0e2d1f" />
        </Pressable>
        <Text style={styles.headerTitle}>Menu Favorit Saya</Text>
        <View style={{ width: 36 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.subtitle}>
          Daftar pilihan makanan sehat favorit yang siap kamu nikmati.
        </Text>

        {favorites.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Ionicons name="heart-dislike-outline" size={48} color="#69736c" />
            <Text style={styles.emptyText}>
              Belum ada menu favorit ditambahkan.
            </Text>
          </View>
        ) : (
          favorites.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
              <View style={styles.infoWrap}>
                <Text style={styles.badge}>{item.category}</Text>
                <Text style={styles.title} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={styles.meta}>
                  {item.protein}g protein • {item.calories} kkal
                </Text>
              </View>
              <Pressable onPress={() => handleRemoveFavorite(item)}>
                <Ionicons name="trash-outline" size={20} color="#e74c3c" />
              </Pressable>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fcfbf8" },
  header: {
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 24,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#eeece5",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#f5f3ee",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "700",
    color: "#0e2d1f",
  },
  content: { padding: 24, gap: 14 },
  subtitle: {
    fontFamily: "Roboto",
    fontSize: 13,
    color: "#69736c",
    marginBottom: 4,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: "#eeece5",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 12,
    backgroundColor: "#f5f3ee",
  },
  infoWrap: { flex: 1 },
  badge: {
    fontFamily: "Roboto",
    fontSize: 9,
    fontWeight: "700",
    color: "#c27803",
    marginBottom: 2,
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "700",
    color: "#0e2d1f",
  },
  meta: { fontFamily: "Roboto", fontSize: 12, color: "#69736c", marginTop: 2 },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    gap: 12,
  },
  emptyText: { fontFamily: "Roboto", fontSize: 14, color: "#69736c" },
});
