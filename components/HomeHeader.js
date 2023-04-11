import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Vamos calcular sua média!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "stretch",
    backgroundColor: "#faf7fa",
    alignSelf: "center",
    width: "100%",
  },
  title: {
    alignSelf: "center",
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    padding: 35,
  },
});

export default HomeHeader;
