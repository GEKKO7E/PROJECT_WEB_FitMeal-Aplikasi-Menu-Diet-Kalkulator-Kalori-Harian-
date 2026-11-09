import { MealItem } from "../types";

// Integrasi External API Makanan Sehat (DummyJSON Recipes)
export const fetchMealsFromApi = async (): Promise<MealItem[]> => {
  const response = await fetch("https://dummyjson.com/recipes?limit=6");
  if (!response.ok) {
    throw new Error("Gagal mengambil data makanan sehat dari server.");
  }
  const data = await response.json();

  return data.recipes.map((item: any) => {
    const calories = item.caloriesPerServing || 300;

    return {
      id: item.id,
      name: item.name,
      category: item.mealType?.[0]?.toUpperCase() || "SEHAT",
      calories: calories,
      protein: Math.round((calories * 0.3) / 4),
      carbs: Math.round((calories * 0.5) / 4),
      fat: Math.round((calories * 0.2) / 9),
      timeMinutes: item.prepTimeMinutes + item.cookTimeMinutes,
      imageUrl: item.image,
      isFavorite: false,
    };
  });
};

// Custom Async Function untuk Menambah / Menghapus Favorit (Promise Demo)
export const toggleFavoriteService = (
  mealName: string,
  isFav: boolean,
): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (isFav) {
        resolve(`${mealName} ditambahkan ke daftar Favorit!`);
      } else {
        resolve(`${mealName} dihapus dari daftar Favorit.`);
      }
    }, 400); // Simulasi delay async
  });
};

// Custom Async Function dengan Promise (Resolve & Reject) untuk Demo
export const simulateAsyncOperation = (isSuccess: boolean): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve("Data nutrisi harian berhasil diperbarui dari server!");
      } else {
        reject("Gagal terhubung ke database nutrisi!");
      }
    }, 1500);
  });
};
