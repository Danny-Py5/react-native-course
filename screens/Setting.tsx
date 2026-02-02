import { View, Text, Pressable } from 'react-native';
import React from 'react';

const Setting = ({ navigation }: any) => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-center text-4xl font-bold">Setting</Text>
      <Pressable
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text>Go to Login page</Text>
      </Pressable>
    </View>
  );
};

export default Setting;
