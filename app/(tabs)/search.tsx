import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles/globals";

const Search: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.titleXL]}>Search Screen</Text>
    </View>
  );
};

export default Search;
