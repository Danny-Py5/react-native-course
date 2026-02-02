import { View, Text, ScrollView, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import ScrollViewCard from 'components/ScrollViewCard';
import {
  cardData,
  newProductData,
  popularProductData,
  recentlyBookedData,
  recommendProductData,
  regularProductData,
  trendingProductData,
} from '../data/productData';
import type { Category } from '../types/categoryTypes';
import { useState } from 'react';

const Dashboard = ({ navigation }: any) => {
  const categories: Category[] = ['All', 'Recommended', 'Regular', 'Trending', 'Popular', 'New'];

  const [productToDisplay, setProductToDisplay] = useState(recommendProductData);

  const [currentItem, setCurrentItem] = useState<Category>('Recommended');
  const handleCategory = (item: Category): void | boolean => {
    if (currentItem === item) return;
    const matchingData = {
      All: [
        ...recommendProductData,
        ...regularProductData,
        ...trendingProductData,
        ...popularProductData,
        ...newProductData,
      ],
      Recommended: recommendProductData,
      Regular: regularProductData,
      Trending: trendingProductData,
      Popular: popularProductData,
      New: newProductData,
      General: cardData,
      'Recently Booked': recentlyBookedData,
    };
    if (matchingData[item]) {
      const array = matchingData[item];
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]]; // swap elements
      }
      if (array.length <= 0) return false;
      setCurrentItem((prev) => item);
      setProductToDisplay((prev) => array.reverse());
    }
  };
  return (
    <SafeAreaView className="h-full bg-white pt-10" edges={['bottom']}>
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
              {categories.map((item: Category, index: number) => (
                <Pressable
                  onPress={() => {
                    handleCategory(item);
                  }}
                  key={index + item}
                  className={`mr-2 h-10 rounded-full border-[2px] px-4 py-2 ${
                    currentItem === item ? 'bg-green-500' : 'bg-white'
                  }`}>
                  <Text
                    className={`text-center ${currentItem === item ? 'text-white' : 'text-black'}`}>
                    {item}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
          {/* CARDS */}
          {ScrollViewCard(productToDisplay)}
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
