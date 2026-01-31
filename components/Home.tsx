import { View, Text, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Home({ navigation }: any) {
  return (
    <>
      <View className="mt-20 flex h-full w-full flex-row flex-wrap  gap-2 bg-blue-500 p-5">
        <View className="h-[150px] min-w-[150px] flex-1 rounded-2xl bg-green-400 p-4">
          <Text className="text-dark text-center text-2xl font-bold">Hello World!</Text>
        </View>
        <View className="h-[150px] min-w-[150px] flex-1 rounded-2xl bg-green-400 p-4">
          <Text className="text-dark text-center text-2xl font-bold">Hello World!</Text>
        </View>
        <View className="h-[150px] min-w-[150px] flex-1 rounded-2xl bg-green-400 p-4">
          <Text className="text-dark text-center text-2xl font-bold">Hello World!</Text>
        </View>
        <View className="h-[150px] min-w-[150px] flex-1 rounded-2xl bg-green-400 p-4">
          <Text className="text-dark text-center text-2xl font-bold">Hello World!</Text>
        </View>
        <View className="h-[150px] min-w-[150px] flex-1 rounded-2xl bg-green-400 p-4">
          <Text className="text-dark text-center text-2xl font-bold">Hello World!</Text>
        </View>
        <Pressable
          onPress={() => navigation.navigate('Setting')}
          className="h-[150px] min-w-[150px] flex-1 rounded-2xl bg-red-400 p-4">
          <Text className="text-dark text-center text-2xl font-bold">Press Me!</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </>
  );
}
