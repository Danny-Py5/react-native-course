import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login({ navigation }: any) {
  const [hidden, setHidden] = useState(true);

  return (
    <SafeAreaView className=" flex-1 bg-gray-200">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1">
        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flexGrow: 1 }}>
          <View className="flex-1 items-center justify-center">
            <Text className="text-5xl font-bold">Welcome Back</Text>
            <TextInput
              placeholder="Email"
              className="mt-10 w-4/5 rounded-xl border border-gray-300 px-3"
            />
            <View className="relative mt-4 w-4/5">
              <TextInput
                placeholder="Password"
                secureTextEntry={hidden}
                className="rounded-xl border border-gray-300 px-3"
              />
              <Pressable
                className="absolute right-3 top-3"
                onPress={() => {
                  setHidden(!hidden);
                }}>
                <Text>{hidden ? 'Show' : 'Hide'}</Text>
              </Pressable>
            </View>
            <Pressable
              onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'Dashboard' }],
                });
              }}
              className="mt-6 w-4/5 rounded-xl bg-gray-900 py-3">
              <Text className="text-center font-bold text-white">Login</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
