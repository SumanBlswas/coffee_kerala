import { Image, Dimensions, TouchableOpacity } from "react-native";
import { Text, View } from "./Themed";
import { FontAwesome } from "@expo/vector-icons";
import "../global.css";
import { router } from "expo-router";

const { height, width } = Dimensions.get("window");

const CoffeeCard = ({ item }: any) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 40,
        height: height * 0.4,
        width: width * 0.62,
      }}
      activeOpacity={1}
      className={"bg-yellow-700 mt-20"}
      onPress={() => router.push(`/${item._id}`)}
    >
      <View
        style={{
          shadowColor: "black",
          shadowRadius: 30,
          shadowOffset: { width: 0, height: 80 },
          shadowOpacity: 0.8,
          marginTop: -(height * 0.08),
        }}
        className="flex-row justify-center shadow-xl bg-transparent"
      >
        <Image
          source={{ uri: item.image }}
          className="h-40 w-40 bg-transparent"
        />
      </View>
      <View className={`px-5 flex-1 justify-between bg-transparent`}>
        <View className="space-y-3 mt-3 bg-transparent">
          <Text className="text-3xl text-white font-semibold z-10">
            {item.name}
          </Text>
          <View
            style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
            className="flex-row items-center rounded-3xl p-1 px-2 space-x-1 w-16"
          >
            <FontAwesome name={"star"} size={15} color="white" />
            <Text className="text-base font-semibold text-white">
              {item.stars}
            </Text>
          </View>
          <View className="flex-row space-x-1 z-10 mb-6 bg-transparent">
            <Text className="text-base text-white font-semibold opacity-60">
              Volume
            </Text>
            <Text className="text-base text-white font-semibold">
              {" "}
              {item.volume}
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "transparent",
            shadowColor: "black",
            shadowRadius: 25,
            shadowOffset: { width: 0, height: 40 },
            shadowOpacity: 0.8,
          }}
          className="flex-row justify-between items-center mb-5"
        >
          <Text className="text-white font-bold text-lg">₹ {item.price}</Text>
          <TouchableOpacity
            // onPress={() => navigation.navigate("Product", { ...item })}
            style={{
              shadowColor: "#272829",
              shadowRadius: 40,
              shadowOffset: { width: 20, height: 10 },
              shadowOpacity: 1,
            }}
            className="p-4 bg-white rounded-full z-50"
          >
            <FontAwesome name={"plus"} size={25} color={"black"} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CoffeeCard;
