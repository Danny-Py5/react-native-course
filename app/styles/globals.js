import { StyleSheet } from "react-native";
import { COLORS, FONTSIZE, MARGINS } from "./constants.js";

export const styles = StyleSheet.create({
  text: {
    fontSize: FONTSIZE.medium,
    color: COLORS.color,
    fontFamily: "Arial",
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: FONTSIZE.large,
    color: COLORS.color,
    fontWeight: "bold",
    marginBottom: MARGINS.none,
  },
  titleXL: {
    fontSize: FONTSIZE.xlarge,
  },
  //   link
  link: {
    color: COLORS.accent,
    textDecorationLine: "underline",
  },

  //   color light
  textlight100: {
    color: COLORS.light.one,
  },
  textlight200: {
    color: COLORS.light.two,
  },
  textlight300: {
    color: COLORS.light.three,
  },
  //   color dark
  textdark100: {
    color: COLORS.dark.one,
  },
  textdark200: {
    color: COLORS.dark.two,
  },
  textdark300: {
    color: COLORS.dark.three,
  },
});
