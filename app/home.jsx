import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import ImageSlider from "../components/ImageSlider";
import BodyParts from "../components/BodyParts";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white space-y-5" edges={["top"]}>
      <StatusBar style="dark" />

      {/* punchline and avatar */}

      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Text
            className="font-bold tracking-wider text-neutral-700 uppercase"
            style={{ fontSize: hp(4.5) }}
          >
            ready to
          </Text>
          <Text
            className="font-bold tracking-wider text-rose-500 uppercase"
            style={{ fontSize: hp(4.5) }}
          >
            workout
          </Text>
        </View>

        <View className="flex justify-center items-center space-y-2">
          <Image
            source={require("../assets/images/avatar.png")}
            style={{ height: hp(6), width: hp(6) }}
            className="rounded-full"
          />

          <View
            style={{ height: hp(5.5), width: hp(5.5) }}
            className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
          >
            <Ionicons name="notifications" size={hp(3)} color="gray" />
          </View>
        </View>
      </View>

      {/* image slider */}

      <View>
        <ImageSlider />
      </View>

      {/* body part list */}
      <View className="flex-1">
        <BodyParts />
      </View>
    </SafeAreaView>
  );
}
