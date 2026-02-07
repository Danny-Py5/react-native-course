import { View, Text, ScrollView, FlatList, ImageBackground, Pressable } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { RootStackParamList } from 'Navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from '../styles/styles';
import React from 'react';

type WhatThisPlaceOffers = {
  title: string;
  description: string;
  materialIconName: React.ComponentProps<typeof MaterialIcons>['name'];
};

type ReviewsTypes = {
  reviewer: string;
  date: string;
  shortDescription: string;
  description: string;
  star?: number;
};

export type ProductCardDataType = {
  id: string;
  title: string;
  image: any;
  subtitle: string;
  price: string;
  rate: string;
  reviewCount: number;
  reviews: ReviewsTypes[];
  description: string;
  category: string;
  whatThisPlaceOffers: WhatThisPlaceOffers[];
};

type ProductDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ProductDetails'
>;

const ScrollViewCard = ({
  productsData,
  searching = false,
}: {
  productsData: ProductCardDataType[];
  searching?: boolean;
}) => {
  const navigation = useNavigation<ProductDetailsScreenNavigationProp>();
  return (
    <FlatList
      // key={searching ? 'grid' : 'list'}j
      horizontal={!searching}
      numColumns={searching ? 2 : 1}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerClassName={`${!searching ? 'h-[310px] items-center justify-center' : 'pb-10'} gap-4`}
      columnWrapperStyle={searching ? { gap: 16 } : undefined}
      className="flex-1"
      keyExtractor={(item, index) => item.id + index.toString()}
      data={productsData}
      renderItem={({ item }) => {
        return (
          <Pressable
            key={item.id}
            style={searching ? { flex: 1 } : undefined}
            onPress={() => {
              navigation.navigate('ProductDetails', item);
            }}>
            <ImageBackground
              key={item.id}
              style={{ width: searching ? '100%' : 250, height: searching ? 200 : '100%' }}
              className=" overflow-hidden rounded-3xl"
              resizeMode="cover"
              source={item.image}>
              <View className="relative flex flex-1 bg-black/30 p-4">
                <Feather
                  name="heart"
                  size={24}
                  color="white"
                  style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    backgroundColor: 'rgb(255, 153, 0)',
                    padding: 5,
                    borderRadius: 20,
                  }}
                />
                <View className="flex-1 justify-end">
                  <Text className={styles.title2}>{item.title}</Text>
                  <Text className={styles.textDimOnBlack}>{item.subtitle}</Text>
                  <View className="flex-row items-end gap-2">
                    <Text className={styles.title2}>${item.price}</Text>
                    <Text className={`${styles.textDimOnBlack}`}>/Per night</Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </Pressable>
        );
      }}
      ListEmptyComponent={
        searching ? (
          <Text className={`${styles.text} mt-10 text-center`}>No result found</Text>
        ) : null
      }
    />
  );
};

export default ScrollViewCard;
