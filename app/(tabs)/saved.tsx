import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles/globals";

const Saved: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.titleXL]}>Saved Screen</Text>
    </View>
  );
};

export default Saved;
