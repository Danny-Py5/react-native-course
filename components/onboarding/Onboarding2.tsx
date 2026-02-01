import { View, Text, Pressable, ImageBackground } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/styles';

const Onboarding2 = ({ navigation }: any) => {
  return (
    <SafeAreaView className="flex-1" edges={[]}>
      <View className="flex-1 ">
        <ImageBackground
          source={require('../../assets/reg3.webp')}
          className="item-center h-full w-full flex-1 justify-center object-cover">
          <View
            style={{ backgroundColor: '#000000c4' }}
            className="flex-1 items-center justify-center p-10">
            <Text
              style={{ color: 'white', textAlign: 'center' }}
              className={styles.onboardingTitle}>
              Search Hotels Easily
            </Text>
            <Text
              style={{ color: 'rgb(175, 175, 175)' }}
              className=" font-gray-200 mt-10 text-center text-2xl ">
              Compare prices, locations, and ratings in seconds.
            </Text>
            <Pressable
              onPress={() => {
                navigation.navigate('Onboarding3');
              }}
              className="mt-10 flex w-3/5 items-center justify-center rounded-2xl bg-green-700 py-4">
              <Text className="text-lg font-bold text-white">Next</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding2;
