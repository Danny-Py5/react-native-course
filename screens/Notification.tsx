import { View, Text, FlatList, ScrollView } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const Notification = () => {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={['bottom', 'top']}>
      <StatusBar style="dark" backgroundColor="white" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="flex-1">
        <View className="flex-1 items-center justify-center">
          <MaterialIcons name="notifications-off" size={100} color="black" />
          <Text className={styles.title}>No Notification Yet</Text>
          <Text className={styles.text}>Your notification will appear when you booked</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification;
