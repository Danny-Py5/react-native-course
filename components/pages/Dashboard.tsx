import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Dashboard = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
        <View className="h-full flex-1 items-center justify-center bg-gray-200">
          <Text className="text-4xl font-bold">Dashboard</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
