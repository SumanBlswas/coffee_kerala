import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import { Text, View } from "../components/Themed";
import { router, useLocalSearchParams } from "expo-router";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getCoffeeApiWithId } from "../redux/Coffee/coffee.action";
import { Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function CoffeePage() {
  const { width, height } = Dimensions.get("window");

  const { coffeepage } = useLocalSearchParams();
  const dispatch = useAppDispatch();
  const coffee = useAppSelector((store) => store.coffeeReducer.coffee);

  useEffect(() => {
    dispatch(getCoffeeApiWithId(`${coffeepage}`));
  }, [coffeepage]);

  console.log(coffee);

  return (
    <View style={styles.container}>
      <StatusBar style={"light"} />
      {coffee && (
        <View>
          <Image
            source={{
              uri: "https://github.com/SumanBlswas/spicy-yak-7891/assets/112753516/903bfedb-0e80-4555-a700-aed3a68b8584",
            }}
            style={{ height: height * 0.42 }}
            className="w-full absolute -top-5 rounded-b-[50px]"
            alt="hello"
          />
          <View className={"p-5 pt-10 bg-transparent"}>
            <View className={"bg-transparent flex flex-row justify-between"}>
              <TouchableOpacity
                className={
                  "bg-transparent border-2 h-10 w-10 rounded-full border-white flex justify-center items-center"
                }
                onPress={() => router.back()}
              >
                <FontAwesome name={"arrow-left"} color={"white"} size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                className={
                  "bg-transparent border-2 h-10 w-10 rounded-full border-white flex justify-center items-center"
                }
              >
                <FontAwesome name={"heart"} color={"white"} size={17} />
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-center bg-transparent">
              <Image
                source={{ uri: coffee.image }}
                className={`h-60 w-60`}
                style={{ marginTop: height * 0.1 }}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
