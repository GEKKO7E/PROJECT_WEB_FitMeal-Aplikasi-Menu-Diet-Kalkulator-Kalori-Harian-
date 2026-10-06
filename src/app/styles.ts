import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcfbf8", // surface background
  },
  
  // Header Style
  header: {
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 24,
    backgroundColor: "rgba(252, 251, 248, 0.9)",
    borderBottomWidth: 1,
    borderBottomColor: "#eeece5",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brandContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  brandTitle: {
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 2,
    color: "#0e2d1f",
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },

  // Greeting Section
  greetingSection: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 10,
  },
  dateText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#c27803",
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  greetingTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0e2d1f",
  },
  greetingSubtitle: {
    fontSize: 14,
    color: "#69736c",
    marginTop: 2,
  },

  // Calorie Card
  cardContainer: {
    paddingHorizontal: 24,
    marginVertical: 10,
  },
  calorieCard: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#eeece5",
    elevation: 2,
    shadowColor: "rgba(0,0,0,0.03)",
  },
  calorieHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  sectionLabel: {
    fontSize: 10,
    fontWeight: "600",
    color: "#69736c",
    letterSpacing: 1,
  },
  calorieMainText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0e2d1f",
  },
  calorieSubText: {
    fontSize: 13,
    color: "#69736c",
  },
  remainingText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#c27803",
    marginTop: 2,
  },
  progressBarBg: {
    height: 6,
    backgroundColor: "#f5f3ee",
    borderRadius: 3,
    overflow: "hidden",
    marginBottom: 16,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#d9822b",
    borderRadius: 3,
  },

  // Macros Grid
  macrosGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#eeece5",
  },
  macroLabel: {
    fontSize: 11,
    color: "#69736c",
  },
  macroValue: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#0e2d1f",
  },
  macroSub: {
    fontSize: 10,
    fontWeight: "normal",
    color: "#69736c",
  },

  // Action Button
  primaryButton: {
    marginTop: 16,
    backgroundColor: "#0e2d1f",
    borderRadius: 12,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  primaryButtonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 14,
  },

  // Section Header
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 8,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0e2d1f",
  },
  linkText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#c27803",
  },

  // Food Cards
  foodList: {
    paddingHorizontal: 24,
    gap: 12,
  },
  foodCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: "#eeece5",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  foodImage: {
    width: 75,
    height: 75,
    borderRadius: 12,
    backgroundColor: "#f5f3ee",
  },
  foodInfo: {
    flex: 1,
  },
  categoryBadge: {
    fontSize: 9,
    fontWeight: "700",
    color: "#c27803",
    letterSpacing: 0.8,
    marginBottom: 2,
  },
  foodTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#0e2d1f",
  },
  foodSubtitle: {
    fontSize: 12,
    color: "#69736c",
    marginTop: 2,
  },
  foodFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
  },
  calorieCount: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#0e2d1f",
  },
  addButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#eeece5",
    justifyContent: "center",
    alignItems: "center",
  },

  // Philosophy Banner
  philosophyBanner: {
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 40,
    padding: 20,
    borderRadius: 16,
    backgroundColor: "#fdf6ec",
    borderWidth: 1,
    borderColor: "#eeece5",
  },
  philosophyTag: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#c27803",
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  philosophyQuote: {
    fontSize: 17,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#0e2d1f",
  },
  philosophyDesc: {
    fontSize: 12,
    color: "#69736c",
    marginTop: 8,
    lineHeight: 18,
  },
});