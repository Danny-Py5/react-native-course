import { Text, View, Pressable, TextInput } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import {
  newProductData,
  recommendProductData,
  regularProductData,
  trendingProductData,
} from 'data/productData';
import ScrollViewCard, { ProductCardDataType } from '../components/ScrollViewCard';

const Search = () => {
  const [query, setQuery] = useState('');
  const allProducts = [
    ...recommendProductData,
    ...regularProductData,
    ...trendingProductData,
    ...newProductData,
  ];
  const [searchedProductsToDisplay, setSearchedProductsToDisplay] = useState<ProductCardDataType[]>(
    []
  );
  const handleSearch = () => {
    if (!query) {
      setSearchedProductsToDisplay((prev) => []);
      return;
    }
    const searchedProduct = allProducts.filter((product) => product.title.includes(query));
    setSearchedProductsToDisplay((prev) => [...searchedProduct]);
  };
  return (
    <>
      <SafeAreaView edges={['bottom', 'top']} className="flex-1 bg-white">
        <StatusBar style="dark" backgroundColor="white" />
        <View className="flex-1 gap-4 p-2">
          <View className=" flex flex-row items-center justify-between gap-2">
            <Pressable onPress={handleSearch}>
              <MaterialIcons name="search" size={24} />
            </Pressable>
            <TextInput
              value={query}
              onChangeText={setQuery}
              className="elevation-2 flex-1 rounded-full border border-gray-100 bg-gray-100 px-5 shadow-md"
              placeholder="Start typing..."
            />
            <Pressable
              onPress={() => {
                setQuery((prev) => '');
              }}>
              <Text className={styles.textBold}>Cancel</Text>
            </Pressable>
          </View>

          <View className="flex-1">
            <ScrollViewCard productsData={searchedProductsToDisplay} searching={true} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Search;
