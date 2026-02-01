import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { RootStackParamList } from 'Navigation';
import { RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles/styles';
import { MaterialIcons } from '@expo/vector-icons';

type RegisterScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;

type Props = {
  route: RegisterScreenRouteProp;
};

const ProductDetails = ({ route }: Props) => {
  console.log(route.params);

  return (
    <SafeAreaView>
      <ScrollView className="bg-white">
        {/* parent container */}
        <View className="flex-1 gap-5 p-4">
          <View>
            <Text className={` ${styles.title} `}>{route.params.title}</Text>
            <Text className={styles.text}>{route.params.subtitle}</Text>
          </View>
          <View className="mt-10 h-[400] w-full flex-1 ">
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
                <Text className={styles.textDark}>{String(route.params.reviews)} reviews</Text>
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
                    <View>{<MaterialIcons name={offer.materialIconName} size={40} />}</View>
                    <View>
                      <Text className={styles.textDark}>{offer.title}</Text>
                      <Text className={styles.text}>{offer.description}</Text>
                    </View>
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
