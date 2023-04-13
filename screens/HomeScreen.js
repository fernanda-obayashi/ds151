import React from "react";
import { StyleSheet, SafeAreaView, Pressable, Text } from "react-native";
import AverageCalculator from "../components/AverageCalculator";
import HomeHeader from "../components/HomeHeader";
import { useNavigation } from "@react-navigation/core";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader></HomeHeader>
      <AverageCalculator></AverageCalculator>
      <Pressable
        style={styles.button}
        title="Go to second screen"
        onPress={() => {
          navigation.navigate("IconScreen", { itemId: 10 });
        }}
      >
        <Text>Ir para imagens</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  button: {
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    padding: 11,
    width: "60%",
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#f7edf6",
  },
});

export default HomeScreen;
