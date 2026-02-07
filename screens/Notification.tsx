import { View, Text, FlatList, ScrollView } from 'react-native';
import React from 'react';
import { styles } from '../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const Notification = () => {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={['bottom', 'top']}>
      <StatusBar style="light" backgroundColor="black" />
      <ScrollView className="flex-1">
        <View className="item-center flex-1 justify-center">
          <Text className={styles.title}>Notification</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification;
