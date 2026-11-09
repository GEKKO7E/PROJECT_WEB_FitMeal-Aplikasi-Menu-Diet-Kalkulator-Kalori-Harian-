import { MealItem } from "../types";

export const fetchMealsFromApi = async (): Promise<MealItem[]> => {
  const response = await fetch("https://dummyjson.com/recipes?limit=6");
  if (!response.ok) {
    throw new Error("Gagal mengambil data dari server eksternal.");
  }
  const data = await response.json();

  return data.recipes.map((item: any) => ({
    id: item.id,
    name: item.name,
    category: item.mealType?.[0]?.toUpperCase() || "MAKANAN SEHAT",
    calories: item.caloriesPerServing,
    protein: Math.round(item.caloriesPerServing * 0.08),
    timeMinutes: item.prepTimeMinutes + item.cookTimeMinutes,
    imageUrl: item.image,
  }));
};

export const simulateAsyncOperation = (isSuccess: boolean): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve("Berhasil memproses operasi async!");
      } else {
        reject("Gagal memproses operasi async!");
      }
    }, 1500);
  });
};