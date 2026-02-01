import { View, Text, ScrollView, ImageBackground, Pressable } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { RootStackParamList } from 'Navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from './styles/styles';
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
  id: number;
  title: string;
  image: any;
  subtitle: string;
  price: string;
  rate: string;
  reviewCount: number;
  reviews: ReviewsTypes[];
  description: string;
  whatThisPlaceOffers: WhatThisPlaceOffers[];
};

type ProductDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ProductDetails'
>;

const ScrollViewCard = (productsData: ProductCardDataType[]) => {
  const navigation = useNavigation<ProductDetailsScreenNavigationProp>();
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerClassName="gap-4 h-[310px]  items-center justify-center"
      className="flex-row ">
      {productsData.map((data) => {
        return (
          <Pressable
            key={data.id}
            onPress={() => {
              navigation.navigate('ProductDetails', data);
            }}>
            <ImageBackground
              key={data.id}
              style={{ width: 250, height: '100%' }}
              className="overflow-hidden rounded-3xl "
              resizeMode="cover"
              source={data.image}>
              <View className="relative flex flex-1 bg-black/30 p-4">
                <Feather
                  name="heart"
                  size={24}
                  color="white"
                  style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    backgroundColor: 'rgb(0, 238, 255)',
                    padding: 5,
                    borderRadius: 20,
                  }}
                />
                <View className="flex-1 justify-end">
                  <Text className={styles.title2}>{data.title}</Text>
                  <Text className={styles.textDimOnBlack}>{data.subtitle}</Text>
                  <View className="flex-row items-end gap-2">
                    <Text className={styles.title2}>${data.price}</Text>
                    <Text className={`${styles.textDimOnBlack}`}>/Per night</Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default ScrollViewCard;
