import React from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";
import AverageCalculator from "../components/AverageCalculator";
import HomeHeader from "../components/HomeHeader";
import { useNavigation } from "@react-navigation/core";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader></HomeHeader>
      <AverageCalculator></AverageCalculator>
      <Button
        title="Go to second screen"
        onPress={() => {
          navigation.navigate("IconScreen", { itemId: 10 });
        }}
      ></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //margin: 20,
    marginTop: 20,
  },
});

export default HomeScreen;
