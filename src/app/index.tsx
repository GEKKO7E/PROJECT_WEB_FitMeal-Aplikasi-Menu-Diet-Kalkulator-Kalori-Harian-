import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  DimensionValue,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { styles } from "./styles";
import { CalorieSummary, MealItem } from "./types";

// Data Awal Ringkasan Kalori
const initialSummary: CalorieSummary = {
  consumed: 1420,
  target: 2100,
  carbs: { current: 180, target: 250 },
  protein: { current: 95, target: 120 },
  fat: { current: 38, target: 60 },
};

// Data Menu Makanan Hari Ini
const todaysMenu: MealItem[] = [
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
];

export default function Index() {
  const router = useRouter();
  const userName: string = "Danishwara";

  // --- KETENTUAN MODUL 2: useState ---
  const [summaryData, setSummaryData] =
    useState<CalorieSummary>(initialSummary);

  // --- KETENTUAN MODUL 2: useEffect ---
  useEffect(() => {
    console.log(
      "[MODUL 2] App mounted: useEffect berhasil dijalankan saat initial render.",
    );
  }, []);

  // Hitung sisa kalori & progress bar secara dinamis berdasarkan state
  const remainingCalories: number = summaryData.target - summaryData.consumed;
  const progressPercent: DimensionValue = `${Math.min(
    Math.round((summaryData.consumed / summaryData.target) * 100),
    100,
  )}%`;

  // Fungsi interaktif ketika tombol tambah menu diklik (Memperbarui State & Trigger UI Re-render)
  const handleAddMealToLog = (item: MealItem) => {
    setSummaryData((prev) => ({
      ...prev,
      consumed: prev.consumed + item.calories,
    }));
    Alert.alert(
      "FitMeal Log",
      `${item.name} (+${item.calories} kkal) berhasil ditambahkan ke asupan harian!`,
    );
  };

  // Custom Function untuk Render Item Menu
  const renderMealCard = (item: MealItem) => {
    return (
      <Pressable
        key={item.id}
        style={styles.foodCard}
        // --- KETENTUAN MODUL 2: router.push() dengan Dynamic Parameter ---
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
        <Image source={{ uri: item.imageUrl }} style={styles.foodImage} />
        <View style={styles.foodInfo}>
          <Text style={styles.categoryBadge}>{item.category}</Text>
          <Text style={styles.foodTitle} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.foodSubtitle}>
            {item.protein}g Protein • {item.timeMinutes} mnt
          </Text>

          <View style={styles.foodFooter}>
            <Text style={styles.calorieCount}>
              {item.calories} <Text style={styles.macroSub}>kkal</Text>
            </Text>

            {/* Tombol tambah cepat (mengubah state consumed) */}
            <Pressable
              style={styles.addButton}
              onPress={(e) => {
                e.stopPropagation(); // Mencegah Pressable parent ikut terpanggil
                handleAddMealToLog(item);
              }}
            >
              <Ionicons name="add" size={16} color="#0e2d1f" />
            </Pressable>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* 1. Top Header */}
      <View style={styles.header}>
        <View style={styles.brandContainer}>
          <Ionicons name="leaf-outline" size={20} color="#0e2d1f" />
          <Text style={styles.brandTitle}>FITMEAL</Text>
        </View>
        <Pressable
          style={styles.iconButton}
          onPress={() =>
            Alert.alert("Notifikasi", "Tidak ada pemberitahuan baru.")
          }
        >
          <Ionicons name="notifications-outline" size={20} color="#69736c" />
        </Pressable>
      </View>

      {/* 2. Greeting Section */}
      <View style={styles.greetingSection}>
        <Text style={styles.dateText}>SENIN, 24 OKTOBER</Text>
        <Text style={styles.greetingTitle}>Halo, {userName}.</Text>
        <Text style={styles.greetingSubtitle}>
          Target kalori harian siap dicapai hari ini.
        </Text>
      </View>

      {/* 3. Calorie Summary Card */}
      <View style={styles.cardContainer}>
        <View style={styles.calorieCard}>
          <View style={styles.calorieHeader}>
            <View>
              <Text style={styles.sectionLabel}>ASUPAN HARI INI</Text>
              <Text style={styles.calorieMainText}>
                {summaryData.consumed.toLocaleString()}{" "}
                <Text style={styles.calorieSubText}>
                  / {summaryData.target.toLocaleString()} kkal
                </Text>
              </Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.sectionLabel}>TERSISA</Text>
              <Text style={styles.remainingText}>{remainingCalories} kkal</Text>
            </View>
          </View>

          {/* Progress Bar Dinamis berdasarkan State */}
          <View style={styles.progressBarBg}>
            <View
              style={[styles.progressBarFill, { width: progressPercent }]}
            />
          </View>

          {/* Macronutrients Grid */}
          <View style={styles.macrosGrid}>
            <View>
              <Text style={styles.macroLabel}>Karbo</Text>
              <Text style={styles.macroValue}>
                {summaryData.carbs.current}g{" "}
                <Text style={styles.macroSub}>
                  / {summaryData.carbs.target}g
                </Text>
              </Text>
            </View>
            <View>
              <Text style={styles.macroLabel}>Protein</Text>
              <Text style={styles.macroValue}>
                {summaryData.protein.current}g{" "}
                <Text style={styles.macroSub}>
                  / {summaryData.protein.target}g
                </Text>
              </Text>
            </View>
            <View>
              <Text style={styles.macroLabel}>Lemak</Text>
              <Text style={styles.macroValue}>
                {summaryData.fat.current}g{" "}
                <Text style={styles.macroSub}>/ {summaryData.fat.target}g</Text>
              </Text>
            </View>
          </View>

          {/* Tombol Catat Makanan menggunakan router.push ke halaman lain */}
          <Pressable
            style={styles.primaryButton}
            onPress={() =>
              router.push({
                pathname: "/detail/catalog",
                params: {
                  id: "catalog",
                  name: "Katalog Makanan Sehat",
                  category: "RANGKUMAN NUTRISI",
                  calories: String(summaryData.consumed),
                  protein: String(summaryData.protein.current),
                  time: "0",
                  image:
                    "https://i.pinimg.com/1200x/c6/63/7e/c6637e891ea281f57462072e4e46da4c.jpg",
                },
              } as any)
            }
          >
            <Ionicons name="add" size={18} color="white" />
            <Text style={styles.primaryButtonText}>Catat Makanan Baru</Text>
          </Pressable>
        </View>
      </View>

      {/* 4. Section: Menu Hari Ini */}
      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.menuTitle}>Menu Hari Ini</Text>
          <Text style={styles.greetingSubtitle}>
            Pilihan seimbang & siap saji
          </Text>
        </View>
        <Pressable
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() =>
            router.push({
              pathname: "/detail/all",
              params: {
                id: "all",
                name: "Semua Menu Pilihan",
                category: "SEMUA MENU",
                calories: "0",
                protein: "0",
                time: "0",
                image:
                  "https://i.pinimg.com/1200x/c6/63/7e/c6637e891ea281f57462072e4e46da4c.jpg",
              },
            } as any)
          }
        >
          <Text style={styles.linkText}>Lihat Semua </Text>
          <Ionicons name="chevron-forward" size={12} color="#c27803" />
        </Pressable>
      </View>

      {/* Loop Rendering Menu */}
      <View style={styles.foodList}>
        {todaysMenu.map((item) => renderMealCard(item))}
      </View>

      {/* 5. Filosofi FitMeal Banner */}
      <View style={styles.philosophyBanner}>
        <Text style={styles.philosophyTag}>FILOSOFI FITMEAL</Text>
        <Text style={styles.philosophyQuote}>“Diet Sehat & Tetap Lezat.”</Text>
        <Text style={styles.philosophyDesc}>
          Pola makan yang konsisten dan seimbang tanpa rasa terbebani. Dipandu
          rancangan gizi harian yang presisi.
        </Text>
      </View>
    </ScrollView>
  );
}
