import { View, Text, ScrollView, TextInput, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import ScrollViewCard from 'components/ScrollViewCard';
import { cardData, recentlyBookedData } from '../../data/productData';

const Dashboard = ({ navigation }: any) => {
  return (
    <SafeAreaView className="h-full bg-white pt-10" edges={[]}>
      <ScrollView className="flex-1">
        <View className="flex w-full flex-row items-center justify-between  px-5">
          <View className="h-12 w-12 items-center justify-center rounded-full bg-green-500 ">
            <Feather name="award" size={24} color="white" />
          </View>
          <View>
            <Feather name="bell" size={24} color="black" />
          </View>
        </View>
        <View className="flex h-full flex-1 gap-4 p-5">
          <Text className={styles.title}>Hello Daniel 👋</Text>
          <TextInput className={styles.searchInput} placeholder="Search." />

          <View className="relative flex  h-[50px] items-center justify-center">
            <ScrollView
              horizontal={true}
              className="h-full flex-row gap-4 p-1"
              contentContainerClassName="justify-center items-center"
              showsHorizontalScrollIndicator={false}>
              {['All', 'Recommended', 'Regular', 'Trending', 'Popular', 'New'].map(
                (item, index) => (
                  <Pressable
                    key={index + item}
                    className="mr-2  h-10 rounded-full border-none bg-green-500 px-4 py-2">
                    <Text className="text-center text-white">{item}</Text>
                  </Pressable>
                )
              )}
            </ScrollView>
          </View>
          {/* CARDS */}
          {ScrollViewCard(cardData)}
          {/* RECENTLY ADDED */}
          <View className="mt-4">
            <Text className={styles.titleSmall}>Recently Booked</Text>

            {ScrollViewCard(recentlyBookedData)}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = {
  title: 'text-4xl font-bold',
  searchInput: 'rounded-lg border-none border-gray-300 bg-gray-200 p-5',
  titleSmall: 'text-2xl font-bold',
  title2: 'text-3xl font-bold text-white',
  textDimOnBlack: 'text-white/70 text-lg ',
  text: 'text-lg font-medium text-gray-700',
};

export default Dashboard;
