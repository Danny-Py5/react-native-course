import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles/globals";

const Profile: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.titleXL]}>Profile Screen</Text>
    </View>
  );
};

export default Profile;
