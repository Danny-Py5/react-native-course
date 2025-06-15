import { Link } from "expo-router";
import { Text, View } from "react-native";
import { styles } from "../styles/globals";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.textdark200, styles.titleXL]}>
        Welcome!
      </Text>
      <Link href="/(tabs)/profile">Go to Profile</Link>
      <Link href="/movie/Movie ID">Go to the movie stack</Link>
    </View>
  );
}
