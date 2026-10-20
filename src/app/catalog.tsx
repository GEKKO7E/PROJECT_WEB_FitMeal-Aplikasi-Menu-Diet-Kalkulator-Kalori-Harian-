import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

const catalogMenu = [
  {
    id: 1,
    name: "Nasi Merah Ayam Dada Bakar",
    category: "MAKAN SIANG",
    calories: 380,
    protein: 32,
    timeMinutes: 15,
    imageUrl:
      "https://i.pinimg.com/1200x/c6/63/7e/c6637e891ea281f57462072e4e46da4c.jpg",
  },
  {
    id: 2,
    name: "Gado-Gado Telur Rebus",
    category: "SARAPAN",
    calories: 320,
    protein: 18,
    timeMinutes: 10,
    imageUrl:
      "https://media.istockphoto.com/id/2194385618/id/foto/hidangan-salad-gado-gado-berwarna-warni-dengan-sayuran-telur-rebus-dan-saus-kacang-di-latar.jpg?s=612x612&w=0&k=20&c=QUBkVQMzmNduK9lnjHv295aQuIu0QXBTPVr9y1BcZOo=",
  },
  {
    id: 3,
    name: "Ikan Gurame Kukus Bumbu Kuning",
    category: "MAKAN MALAM",
    calories: 290,
    protein: 30,
    timeMinutes: 20,
    imageUrl:
      "https://www.jabarmedia.com/wp-content/uploads/2025/12/gurame-pepes.jpg",
  },
  {
    id: 4,
    name: "Smoothie Pisang Alpukat",
    category: "SNACK",
    calories: 220,
    protein: 12,
    timeMinutes: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
  },
];

export default function CatalogScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={20} color="#0e2d1f" />
        </Pressable>
        <Text style={styles.headerTitle}>Katalog Makanan</Text>
        <View style={{ width: 36 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.subtitle}>
          Pilih menu yang ingin Anda tambah ke asupan hari ini.
        </Text>

        {catalogMenu.map((item) => (
          <Pressable
            key={item.id}
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: `/detail/${item.id}`,
                params: {
                  id: String(item.id),
                  name: item.name,
                  category: item.category,
                  calories: String(item.calories),
                  protein: String(item.protein),
                  time: String(item.timeMinutes),
                  image: item.imageUrl,
                },
              } as any)
            }
          >
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <View style={styles.infoWrap}>
              <Text style={styles.badge}>{item.category}</Text>
              <Text style={styles.title} numberOfLines={1}>
                {item.name}
              </Text>
              <Text style={styles.meta}>
                {item.protein}g protein • {item.timeMinutes} menit
              </Text>

              <View style={styles.footer}>
                <Text style={styles.calories}>
                  {item.calories} <Text style={styles.caloriesSub}>kkal</Text>
                </Text>
                <View style={styles.addButton}>
                  <Ionicons name="add" size={16} color="#0e2d1f" />
                </View>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcfbf8",
  },
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
  content: {
    padding: 24,
    gap: 14,
  },
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
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: "#f5f3ee",
  },
  infoWrap: {
    flex: 1,
  },
  badge: {
    fontFamily: "Roboto",
    fontSize: 9,
    fontWeight: "700",
    color: "#c27803",
    letterSpacing: 0.8,
    marginBottom: 2,
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "700",
    color: "#0e2d1f",
  },
  meta: {
    fontFamily: "Roboto",
    fontSize: 12,
    color: "#69736c",
    marginTop: 2,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  calories: {
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "700",
    color: "#0e2d1f",
  },
  caloriesSub: {
    fontFamily: "Roboto",
    fontSize: 10,
    fontWeight: "400",
    color: "#69736c",
  },
  addButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#eeece5",
    justifyContent: "center",
    alignItems: "center",
  },
});
