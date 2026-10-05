import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

import { styles } from "./styles";


export type DietGoal = "Turun BB" | "Jaga BB" | "Tambah Otot";

export interface MealItem {
  readonly id: number; // Readonly ID
  name: string;
  category: string;
  calories: number; // Kalori (kkal)
  protein: number; // Protein (gram)
  price: number; // Harga (Rupiah)
  imageUrl: string;
  isPopular?: boolean; // Optional property
}
