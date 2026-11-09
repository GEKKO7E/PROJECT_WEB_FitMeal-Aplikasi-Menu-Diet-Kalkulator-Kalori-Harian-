export interface MealItem {
  readonly id: number;
  name: string;
  category: string;
  calories: number;
  protein: number;
  carbs?: number;
  fat?: number;
  timeMinutes: number;
  imageUrl: string;
  isFavorite?: boolean; // Properti untuk fitur favorit
}

export interface CalorieSummary {
  consumed: number;
  target: number;
  carbs: { current: number; target: number };
  protein: { current: number; target: number };
  fat: { current: number; target: number };
}
