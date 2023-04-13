import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ListItem = () => {
  return (
    <View>
      <View style={styles.container}>
        <MaterialIcons name="photo" size={24} color="white" />
        <Text style={styles.text}>imagem 1</Text>
      </View>
      <View style={styles.container2}>
        <MaterialIcons name="photo" size={24} color="white" />
        <Text style={styles.text}>imagem 2</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#de3c72",
    padding: 10,
    width: 150,
    height: 50,
    alignSelf: "center",
    borderRadius: 10,
    marginVertical: 10,
  },
  container2: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#e65a88",
    padding: 10,
    width: 300,
    height: 100,
    alignSelf: "center",
    borderRadius: 10,
    marginVertical: 10,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
});

export default ListItem;
