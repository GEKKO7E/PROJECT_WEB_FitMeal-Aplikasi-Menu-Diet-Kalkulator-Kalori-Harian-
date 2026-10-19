import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function DetailScreen() {
  const router = useRouter();

  // --- KETENTUAN MODUL 2: useLocalSearchParams() ---
  const params = useLocalSearchParams();

  const title = params.name ? String(params.name) : "Detail Menu";
  const category = params.category ? String(params.category) : "INFORMASI";
  const calories = params.calories ? String(params.calories) : "0";
  const protein = params.protein ? String(params.protein) : "0";
  const time = params.time
    ? String(params.time)
    : params.timeMinutes
      ? String(params.timeMinutes)
      : "10";
  const image = params.image
    ? String(params.image)
    : "https://i.pinimg.com/1200x/c6/63/7e/c6637e891ea281f57462072e4e46da4c.jpg";

  return (
    <View style={detailStyles.container}>
      {/* Header dengan tombol Back */}
      <View style={detailStyles.header}>
        {/* --- KETENTUAN MODUL 2: router.back() --- */}
        <Pressable
          style={detailStyles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={20} color="#0e2d1f" />
        </Pressable>
        <Text style={detailStyles.headerTitle}>Detail Resep</Text>
        <View style={{ width: 36 }} />
      </View>

      <View style={detailStyles.content}>
        <Image source={{ uri: image }} style={detailStyles.image} />

        <View style={detailStyles.badgeContainer}>
          <Text style={detailStyles.badgeText}>{category}</Text>
        </View>

        <Text style={detailStyles.title}>{title}</Text>

        <View style={detailStyles.infoRow}>
          <View style={detailStyles.infoBox}>
            <Text style={detailStyles.infoLabel}>Kalori</Text>
            <Text style={detailStyles.infoValue}>{calories} kkal</Text>
          </View>
          <View style={detailStyles.infoBox}>
            <Text style={detailStyles.infoLabel}>Protein</Text>
            <Text style={detailStyles.infoValue}>{protein}g</Text>
          </View>
          <View style={detailStyles.infoBox}>
            <Text style={detailStyles.infoLabel}>Waktu Masak</Text>
            <Text style={detailStyles.infoValue}>{time} mnt</Text>
          </View>
        </View>

        <Text style={detailStyles.desc}>
          Menu makanan sehat pilihan yang dirancang khusus untuk mencakup
          kebutuhan nutrisi harian Anda secara presisi tanpa mengorbankan cita
          rasa.
        </Text>

        {/* --- KETENTUAN MODUL 2: Fungsi Router Tambahan (router.replace) --- */}
        <Pressable
          style={detailStyles.primaryButton}
          onPress={() => router.replace("/")}
        >
          <Text style={detailStyles.primaryButtonText}>
            Kembali ke Beranda (Replace)
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const detailStyles = StyleSheet.create({
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
    fontSize: 16,
    fontWeight: "bold",
    color: "#0e2d1f",
  },
  content: {
    padding: 24,
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 16,
    marginBottom: 16,
    backgroundColor: "#eeece5",
  },
  badgeContainer: {
    alignSelf: "flex-start",
    backgroundColor: "#fdf6ec",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#fae1cc",
  },
  badgeText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#c27803",
    letterSpacing: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0e2d1f",
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
  },
  infoBox: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#eeece5",
    alignItems: "center",
  },
  infoLabel: {
    fontSize: 11,
    color: "#69736c",
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0e2d1f",
  },
  desc: {
    fontSize: 13,
    color: "#69736c",
    lineHeight: 20,
    marginBottom: 30,
  },
  primaryButton: {
    backgroundColor: "#0e2d1f",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 14,
  },
});
