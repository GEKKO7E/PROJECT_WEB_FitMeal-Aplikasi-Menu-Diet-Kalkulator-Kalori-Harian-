import { MealItem } from "../types";

let favoriteListMemory: MealItem[] = [];

// Fetch data makanan dari API
export const fetchMealsFromApi = async (): Promise<MealItem[]> => {
  const response = await fetch("https://dummyjson.com/recipes?limit=6");
  if (!response.ok) {
    throw new Error("Gagal mengambil data makanan sehat dari server.");
  }
  const data = await response.json();

  return data.recipes.map((item: any) => {
    const calories = item.caloriesPerServing || 300;
    const isFav = favoriteListMemory.some((fav) => fav.id === item.id);

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
      isFavorite: isFav,
    };
  });
};

// Tambah / Hapus Favorit dengan Promise
export const toggleFavoriteService = (
  meal: MealItem,
  isFav: boolean,
): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (isFav) {
        if (!favoriteListMemory.some((f) => f.id === meal.id)) {
          favoriteListMemory.push({ ...meal, isFavorite: true });
        }
        resolve(`${meal.name} ditambahkan ke daftar Favorit!`);
      } else {
        favoriteListMemory = favoriteListMemory.filter((f) => f.id !== meal.id);
        resolve(`${meal.name} dihapus dari Favorit.`);
      }
    }, 300);
  });
};

// Mendapatkan daftar Favorit
export const getFavoriteMeals = (): Promise<MealItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(favoriteListMemory), 200);
  });
};

// Simulasi Operation Async
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
