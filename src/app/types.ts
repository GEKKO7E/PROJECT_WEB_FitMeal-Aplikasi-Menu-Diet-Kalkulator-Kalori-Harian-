export type DietGoal = "Turun BB" | "Jaga BB" | "Tambah Otot";

export interface MealItem {
  readonly id: number;
  name: string;
  category: string;
  calories: number;
  protein: number;
  price: number;
  imageUrl: string;
  isPopular?: boolean;
}