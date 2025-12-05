import CustomButton from "@/components/custom-button";
import { onboarding } from "@/constants";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

export default function Welcome() {
  const swiperRef = useRef<Swiper>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const isLastIndex = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="flex flex-1 h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => router.replace("/sign-in")}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-medium font-JakartaBold">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        showsButtons={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 rounded-full bg-[#E2E8F0] " />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1  bg-[#0286FF] rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} className="flex items-center justify-center p-5">
            <Image
              source={item.image}
              className="w-full h-[300px]"
              resizeMethod={"contain"}
            />
            <View className="flex items-center flex-row justify-center w-full mt-10">
              <Text className="text-black text-3xl font-bold mx-10 text-center">
                {item.title}
              </Text>
            </View>
            <Text className="text-[#858585] text-lg font-JakartaSemiBold mx-10 text-center mt-3">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
        title={isLastIndex ? "Get Started" : "Next"}
        className="w-11/12 my-10"
        onPress={() =>
          isLastIndex
            ? router.replace("/sign-in")
            : swiperRef.current?.scrollBy(1)
        }
      />
    </SafeAreaView>
  );
}
