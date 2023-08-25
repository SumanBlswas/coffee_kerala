import {
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Text, View } from "../../components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { shallowEqual } from "react-redux";
import { getCoffeeApi } from "../../redux/Coffee/coffee.action";
import CoffeeCard from "../../components/CoffeeCard";
//@ts-ignore
import Carousel from "react-native-new-snap-carousel";

export default function HomePage() {
  const { height, width } = Dimensions.get("window");
  const coffees = useAppSelector((store) => {
    return store.coffeeReducer.coffees;
  }, shallowEqual);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCoffeeApi());
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://github.com/SumanBlswas/spicy-yak-7891/assets/112753516/2199b1f0-0597-486e-9dc3-41441e9fba7e",
        }}
        style={{ height: height * 0.23 }}
        className="w-full absolute -top-5 opacity-10"
        alt="hello"
      />
      <View className={"p-5 pt-8 bg-transparent"}>
        <SafeAreaView>
          <View
            className={
              "flex justify-between flex-row items-center bg-transparent"
            }
          >
            <Text className={"text-yellow-600"}>
              <FontAwesome name={"user-circle-o"} size={28} />
            </Text>
            <View className={"flex gap-2 flex-row items-center justify-center"}>
              <Text className={"text-yellow-600"}>
                <FontAwesome name={"map-marker"} size={23} />
              </Text>
              <Text className={"font-bold"}>New York, NYC</Text>
            </View>
            <FontAwesome name={"bell-o"} size={18} />
          </View>
          <View
            className="mx-2 shadow"
            style={{
              marginTop: height * 0.073,
              backgroundColor: "transparent",
            }}
          >
            <View className="flex-row items-center rounded-full p-1 bg-[#e6e6e6]">
              <TextInput
                placeholder="Search"
                className="p-2 pl-4 flex-1 font-semibold text-gray-700"
              />
              <TouchableOpacity className="rounded-full p-2 bg-yellow-600">
                <FontAwesome name={"search"} size={23} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
        <View className="px-2 mt-6 bg-transparent">
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={coffees}
            keyExtractor={(item) => item._id}
            className="overflow-visible"
            renderItem={({ item }) => {
              return (
                <TouchableOpacity className="rounded-full shadow mr-3 bg-yellow-600">
                  <Text className={"font-semibold p-3 mr-3 ml-3 text-white"}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={{ paddingTop: 20 }}>
          <View
            className={`overflow-visible flex justify-center bg-transparent items-center`}
          >
            <View>
              <Carousel
                containerCustomStyle={{ overflow: "visible" }}
                data={coffees}
                renderItem={({ item }: any) => <CoffeeCard item={item} />}
                firstItem={1}
                loop={true}
                inactiveSlideScale={0.75}
                inactiveSlideOpacity={0.75}
                sliderWidth={width}
                itemWidth={width * 0.63}
                slideStyle={{
                  display: "flex",
                  alignItems: "center",
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
