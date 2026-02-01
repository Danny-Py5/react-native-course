import { View, Text, ScrollView, TextInput, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import ScrollViewCard from 'components/ScrollViewCard';

const Dashboard = ({ navigation }: any) => {
  const cardData = [
    {
      id: 1,
      image: require('../../assets/OIP.webp'),
      title: 'Emerolda De Hotel',
      subtitle: 'Ports Comfort',
      price: '29',
      rate: '5.7',
      reviews: 124,
      description:
        'Experience unparalleled luxury in this breathtaking beachfront villa. Nestled on pristine white sand beaches with crystal-clear turquoise waters, this exclusive property offers the perfect escape for those seeking ultimate tranquility and sophistication.',
    },
    {
      id: 2,
      image: require('../../assets/img2.webp'),
      title: 'Grand Royale',
      subtitle: 'Correct Comfort',
      price: '89',
      rate: '4.9',
      reviews: 124,
      description:
        'Experience unparalleled luxury in this breathtaking beachfront villa. Nestled on pristine white sand beaches with crystal-clear turquoise waters, this exclusive property offers the perfect escape for those seeking ultimate tranquility and sophistication.',
    },
    {
      id: 3,
      image: require('../../assets/img3.webp'),
      title: 'Sea View Resort',
      subtitle: 'Ocean Comfort',
      price: '100',
      rate: '4.3',
      reviews: 124,
      description:
        'Indulge in ultimate luxury in this expansive suite, complete with a separate living area, premium furnishings, and panoramic city or ocean views. Perfect for VIP guests.',
    },
    {
      id: 4,
      image: require('../../assets/img4.webp'),
      title: 'Ocean Breeze',
      subtitle: 'Coastal Comfort',
      price: '120',
      rate: '4.7',
      reviews: 124,
      description:
        'Enjoy a blend of elegance and coziness in this deluxe double room. Equipped with twin beds, ambient lighting, and contemporary amenities for a restful stay.',
    },
  ];
  const recentlyBookedData = [
    {
      id: 1,
      image: require('../../assets/img5.jpg'),
      title: 'Mountain Retreat',
      subtitle: 'Hilltop Comfort',
      price: '150',
      rate: '5.7',
      reviews: 124,
      description:
        'Experience unparalleled luxury in this breathtaking beachfront villa. Nestled on pristine white sand beaches with crystal-clear turquoise waters, this exclusive property offers the perfect escape for those seeking ultimate tranquility and sophistication.',
    },
    {
      id: 2,
      image: require('../../assets/img6.webp'),
      title: 'Desert Oasis',
      subtitle: 'Sandy Comfort',
      price: '200',
      rate: '4.6',
      reviews: 124,
      description:
        'Wake up to breathtaking sea views in this spacious suite. Featuring modern décor, a plush king-size bed, and a private balcony, it’s perfect for a luxurious coastal escape.',
    },

    {
      id: 3,
      image: require('../../assets/img7.webp'),
      title: 'Forest Hideaway',
      subtitle: 'Woodland Comfort',
      price: '180',
      rate: '4.9',
      reviews: 124,
      description:
        'Designed for comfort and style, this executive room offers a king-size bed, sleek furnishings, and a work desk. Ideal for business travelers seeking relaxation after a busy day.',
    },
  ];
  return (
    <SafeAreaView className="h-full bg-white pt-5">
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
