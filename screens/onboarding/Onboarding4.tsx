import { View, Text, Pressable, ImageBackground } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../styles/styles';

const Onboarding4 = ({ navigation }: any) => {
  return (
    <SafeAreaView className="flex-1" edges={[]}>
      <View className="flex-1 ">
        <ImageBackground
          source={require('../../assets/recommended1.webp')}
          className="item-center h-full w-full flex-1 justify-center object-cover">
          <View
            style={{ backgroundColor: '#000000c4' }}
            className="flex-1 items-center justify-center p-10">
            <Text
              style={{ color: 'white', textAlign: 'center' }}
              className={styles.onboardingTitle}>
              Verified Guest Reviews
            </Text>
            <Text
              style={{ color: 'rgb(175, 175, 175)' }}
              className=" font-gray-200 mt-10 text-center text-2xl ">
              Make confident choices with honest guest reviews
            </Text>
            <Pressable
              onPress={() => {
                navigation.navigate('Login');
              }}
              className="mt-10 flex w-3/5 items-center justify-center rounded-2xl bg-green-700 py-4">
              <Text className="text-lg font-bold text-white">Get started</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate('Login');
              }}
              className="mt-3 flex items-center justify-center ">
              <Text className="text-lg  text-white">Already have an account? Login</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding4;
