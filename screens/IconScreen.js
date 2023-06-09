import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Pressable,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import ListItem from "../components/ListItem";

const IconScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  //const [listItem, setListItem] = useState([]);
  const { itemId } = route.params;

  const ITEM = [
    {
      id: "1",
      title: "First Item",
    },
    {
      id: "2",
      title: "Second Item",
    },
    {
      id: "3",
      title: "Third Item",
    },
    {
      id: "4",
      title: "Fourth Item",
    },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.area}>
      <Text style={styles.text}>Imagens</Text>
      {/* <ListItem></ListItem> */}
      {/* {
              listItem.length > 0 ? (
        <FlatList
          data={listItem}
          renderItem={({ item }) => <ListItem title={item.title} />}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <ActivityIndicator />
      )} */}
      <FlatList
        data={ITEM}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text>Voltar itemId: {itemId}</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    marginVertical: 10,
  },
  text1: {
    alignSelf: "center",
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    padding: 15,
    margin: 20,
  },
  text2: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
    margin: 10,
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
  item: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#de3c72",
    padding: 10,
    width: 200,
    height: 200,
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

export default IconScreen;
