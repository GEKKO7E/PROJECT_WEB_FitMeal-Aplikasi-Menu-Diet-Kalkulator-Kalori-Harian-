export interface MealItem {
  readonly id: number;
  name: string;
  category: string;
  calories: number;
  protein: number;
  timeMinutes: number;
  imageUrl: string;
}

export interface CalorieSummary {
  consumed: number;
  target: number;
  carbs: { current: number; target: number };
  protein: { current: number; target: number };
  fat: { current: number; target: number };
}