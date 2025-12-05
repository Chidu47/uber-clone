import CustomButton from "@/components/custom-button";
import InputField from "@/components/custom-input";
import OAuth from "@/components/oauth";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const onSignInPress = () => {
    console.log("Sign Up Pressed");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image
            source={images.signUpCar}
            className="z-0 w-full h-[250px]"
            resizeMethod={"contain"}
          />
          <Text className="text-2xl font-JakartaSemiBold text-black absolute bottom-5 left-5">
            Welcome
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Email"
            icon={icons.email}
            placeholder="Enter your email"
            value={form.email}
            onChangeText={(text) => setform({ ...form, email: text })}
          />
          <InputField
            label="Password"
            icon={icons.lock}
            placeholder="Enter your password"
            value={form.password}
            onChangeText={(text) => setform({ ...form, password: text })}
            secureTextEntry
          />
          <CustomButton
            title="Sign In"
            className="mt-6"
            onPress={onSignInPress}
          />
          <OAuth />
          <Link
            href="/sign-up"
            className="text-lg text-general-200 text-center mt-10"
          >
            <Text>Don't have an account? </Text>
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>
        {/* //verification modal */}
      </View>
    </SafeAreaView>
  );
}
