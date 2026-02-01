import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { RootStackParamList } from 'Navigation';
import { RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles/styles';
import { MaterialIcons } from '@expo/vector-icons';
import { HR } from './HR';

type RegisterScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;

type Props = {
  route: RegisterScreenRouteProp;
};

const ProductDetails = ({ route }: Props) => {
  console.log(route.params);

  const getRandomKey = () => {
    const string = 'abcdefghijklmnopqrstuvwxyz1234567890_-';
    let key = '';
    for (let i = 0; i < 10; i++) {
      key += string.charAt(Math.floor(Math.random() * string.length));
    }
    return key;
  };

  const getReviewStar = (star: number) => {
    let starArr = [];
    for (let i = 0; i < Math.floor(star); i++) {
      starArr.push(<MaterialIcons key={i} name="star" size={15} color="#d99400" />);
    }
    if (Math.ceil(star) !== Math.floor(star)) {
      starArr.push(
        <MaterialIcons key={getRandomKey()} name="star-half" size={15} color="#d99400" />
      );
    }
    return starArr;
  };

  return (
    <SafeAreaView>
      <ScrollView className="bg-white">
        {/* parent container */}
        <View className="flex-1 gap-10 p-4">
          <View>
            <Text className={` ${styles.title} `}>{route.params.title}</Text>
            <Text className={styles.text}>{route.params.subtitle}</Text>
          </View>
          <View
            style={{ boxShadow: '0 10px 30px #99999994' }}
            className="h-[400] w-full flex-1 rounded-3xl ">
            <Image
              source={route.params.image}
              className="h-full w-full rounded-3xl object-cover"
              resizeMode="cover"
            />
          </View>
          {/* About place */}
          <View className="rounded-3xl border-[2px] border-gray-200 bg-gray-100  p-5">
            <Text style={{ color: 'black' }} className={styles.title2}>
              About this Place
            </Text>
            <Text className={styles.text}>{route.params.description}</Text>

            <View className="flex-row items-center  gap-5  px-5 pt-10 pt-10">
              <View>
                <Text className="text-5xl font-bold text-green-700">{route.params.rate}</Text>
              </View>
              <View>
                <Text className={styles.textBold}>{String(route.params.reviewCount)} reviews</Text>
                <Text className={`${styles.text} self-center`}>Highly rated by guests</Text>
              </View>
            </View>
          </View>
          {/* what this place offers */}
          <View className="rounded-3xl border-[2px] border-gray-200 bg-gray-100  p-5">
            <Text style={{ color: 'black' }} className={styles.title2}>
              What this place has
            </Text>
            <View className="mt-10 w-full gap-6 p-2">
              {route.params.whatThisPlaceOffers.map((offer, index) => {
                return (
                  <View key={index + offer.title} className=" flex-row items-center gap-6 ">
                    <View>
                      {<MaterialIcons color={'#004400'} name={offer.materialIconName} size={30} />}
                    </View>
                    <View>
                      <Text className={styles.textBold}>{offer.title}</Text>
                      <Text className={styles.text}>{offer.description}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
          {/* review */}
          <View className="rounded-3xl border-[2px] border-gray-200 bg-gray-100  p-5">
            <Text style={{ color: 'black' }} className={styles.title2}>
              Reviews
            </Text>
            <View className="mt-10 w-full gap-6 p-2">
              {route.params.reviews.map((review, index) => {
                return (
                  <View key={index} className="gap-4">
                    <View className="flex-row items-center justify-between p-1">
                      <View>
                        <Text className={styles.textBold}>{review.reviewer}</Text>
                        <Text className={styles.textSmall}>{review.date}</Text>
                      </View>
                      {review.star && (
                        <View className="flex-row gap-1">
                          {getReviewStar(review.star).map((star) => star)}
                        </View>
                      )}
                    </View>
                    <View>
                      <Text className={styles.text}>{review.description}</Text>
                    </View>
                    {index === route.params.reviews.length - 1 ? null : <HR />}
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;
