import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { fetchExercisesByBodyPart } from "../api/exerciceDB";
import { demoExercises } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import ExerciseList from "../components/ExerciseList";

export default function Exercises() {
  const router = useRouter();
  const item = useLocalSearchParams();
  const [exercises, setExercises] = React.useState([]);

  React.useEffect(() => {
    if (item) getExercises(item?.name);
  }, [item]);

  const getExercises = async (bodyPart) => {
    let data = await fetchExercisesByBodyPart(bodyPart);
    setExercises(data);
  };

  return (
    <View>
      <StatusBar style="light" />
      <Image
        source={item.image}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />

      <TouchableOpacity
        onPress={() => router.back()}
        style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
        className="bg-rose-500 mx-4 absolute flex justify-center items-center pr-1 rounded-full"
      >
        <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
      </TouchableOpacity>

      {/* exercises */}

      <View className="mx-4 space-y-3 mt-4">
        <Text
          style={{ fontSize: hp(3) }}
          className="font-semibold text-neutral-700"
        >
          {item.name} exercises
        </Text>
        <View className="mb-10">
          <ExerciseList data={exercises} />
        </View>
      </View>
    </View>
  );
}
