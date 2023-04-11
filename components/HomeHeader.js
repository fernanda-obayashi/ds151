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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 300,
    flex: 1,
  },
});

export default HomeHeader;
