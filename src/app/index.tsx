import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  DimensionValue,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import {
  fetchMealsFromApi,
  simulateAsyncOperation,
  toggleFavoriteService,
} from "../services/mealService";
import { styles } from "../styles";
import { CalorieSummary, MealItem } from "../types";

const initialSummary: CalorieSummary = {
  consumed: 1420,
  target: 2100,
  carbs: { current: 180, target: 250 },
  protein: { current: 95, target: 120 },
  fat: { current: 38, target: 60 },
};

export default function Index() {
  const router = useRouter();
  const userName: string = "Danishwara";

  const [summaryData, setSummaryData] =
    useState<CalorieSummary>(initialSummary);
  const [menuList, setMenuList] = useState<MealItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const loadApiData = async () => {
      try {
        setLoading(true);
        const meals = await fetchMealsFromApi();
        setMenuList(meals);
      } catch (error: any) {
        setErrorMessage(error.message || "Gagal memuat API");
      } finally {
        setLoading(false);
      }
    };

    loadApiData();
  }, []);

  const handleToggleFavorite = async (item: MealItem) => {
    const nextState = !item.isFavorite;

    setMenuList((prevList) =>
      prevList.map((meal) =>
        meal.id === item.id ? { ...meal, isFavorite: nextState } : meal,
      ),
    );

    await toggleFavoriteService(item, nextState);

    if (nextState) {
      router.push("/favorites");
    }
  };

  const handleTestPromiseDemo = () => {
    simulateAsyncOperation(true)
      .then((resultMessage) => {
        Alert.alert("Promise Success (.then)", resultMessage);
      })
      .catch((errMessage) => {
        Alert.alert("Promise Reject (.catch)", errMessage);
      });
  };

  const remainingCalories: number = summaryData.target - summaryData.consumed;
  const isOverLimit: boolean = summaryData.consumed > summaryData.target;

  const progressPercent: DimensionValue = `${Math.min(
    Math.round((summaryData.consumed / summaryData.target) * 100),
    100,
  )}%`;

  // HANDLER TAMBAH MEAL + PERINGATAN KALORI BERLEBIH
  const handleAddMealToLog = (item: MealItem) => {
    const newConsumed = summaryData.consumed + item.calories;

    setSummaryData((prev) => ({
      ...prev,
      consumed: newConsumed,
    }));

    if (newConsumed > summaryData.target) {
      const excess = newConsumed - summaryData.target;
      Alert.alert(
        "⚠️ Peringatan Kalori Berlebih!",
        `Asupan kalori harian kamu telah melebihi target sebanyak ${excess} kkal! Perhatikan konsumsi makanan kamu.`,
        [{ text: "Paham", style: "destructive" }],
      );
    } else {
      Alert.alert(
        "FitMeal Log",
        `${item.name} (+${item.calories} kkal) berhasil ditambahkan ke asupan harian!`,
      );
    }
  };

  const renderMealCard = (item: MealItem) => {
    return (
      <Pressable
        key={item.id}
        style={styles.foodCard}
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
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.categoryBadge}>{item.category}</Text>

            <Pressable
              onPress={(e) => {
                e.stopPropagation();
                handleToggleFavorite(item);
              }}
              hitSlop={8}
            >
              <Ionicons
                name={item.isFavorite ? "heart" : "heart-outline"}
                size={18}
                color={item.isFavorite ? "#e74c3c" : "#69736c"}
              />
            </Pressable>
          </View>

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

            <Pressable
              style={styles.addButton}
              onPress={(e) => {
                e.stopPropagation();
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
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.brandContainer}>
          <Ionicons name="leaf-outline" size={20} color="#0e2d1f" />
          <Text style={styles.brandTitle}>FITMEAL</Text>
        </View>
        <Pressable style={styles.iconButton} onPress={handleTestPromiseDemo}>
          <Ionicons name="flash-outline" size={20} color="#c27803" />
        </Pressable>
      </View>

      {/* Greeting */}
      <View style={styles.greetingSection}>
        <Text style={styles.dateText}>SENIN, 24 OKTOBER</Text>
        <Text style={styles.greetingTitle}>Halo, {userName}.</Text>
        <Text style={styles.greetingSubtitle}>
          Target kalori harian siap dicapai hari ini.
        </Text>
      </View>

      {/* Calorie Card */}
      <View style={styles.cardContainer}>
        <View style={styles.calorieCard}>
          {/* Banner Peringatan Jika Berlebih */}
          {isOverLimit && (
            <View
              style={{
                backgroundColor: "#fce8e6",
                padding: 10,
                borderRadius: 8,
                marginBottom: 12,
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Ionicons name="warning" size={18} color="#e74c3c" />
              <Text
                style={{ color: "#c0392b", fontSize: 12, fontWeight: "600" }}
              >
                Kalori melampaui batas harian (+{Math.abs(remainingCalories)}{" "}
                kkal)!
              </Text>
            </View>
          )}

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
              <Text
                style={[
                  styles.remainingText,
                  isOverLimit && { color: "#e74c3c" }, // Berubah warna merah jika minus
                ]}
              >
                {remainingCalories} kkal
              </Text>
            </View>
          </View>

          {/* Progress Bar (Merah jika Berlebih) */}
          <View style={styles.progressBarBg}>
            <View
              style={[
                styles.progressBarFill,
                { width: progressPercent },
                isOverLimit && { backgroundColor: "#e74c3c" },
              ]}
            />
          </View>

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

          <Pressable
            style={styles.primaryButton}
            onPress={() => router.push("/favorites")}
          >
            <Ionicons name="heart-outline" size={18} color="white" />
            <Text style={styles.primaryButtonText}>Lihat Favorit</Text>
          </Pressable>
        </View>
      </View>

      {/* Section Menu Sehat */}
      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.menuTitle}>Menu Sehat Hari Ini</Text>
          <Text style={styles.greetingSubtitle}>
            Pilihan nutrisi harian seimbang
          </Text>
        </View>
      </View>

      <View style={styles.foodList}>
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#0e2d1f"
            style={{ marginVertical: 20 }}
          />
        ) : errorMessage ? (
          <Text style={{ color: "red", textAlign: "center" }}>
            {errorMessage}
          </Text>
        ) : (
          menuList.map((item) => renderMealCard(item))
        )}
      </View>

      <View style={styles.philosophyBanner}>
        <Text style={styles.philosophyTag}>FILOSOFI FITMEAL</Text>
        <Text style={styles.philosophyQuote}>“Diet Sehat & Tetap Lezat.”</Text>
        <Text style={styles.philosophyDesc}>
          Pola makan yang konsisten dan seimbang tanpa rasa terbebani.
        </Text>
      </View>
    </ScrollView>
  );
}
