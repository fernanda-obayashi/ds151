import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Text,
  Pressable,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import {
  app,
  db,
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "../firebase/index";

const AverageCalculator = () => {
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [result, setResult] = useState(0);

  const a = parseFloat(nota1.valueOf);
  const b = parseFloat(nota2.valueOf);

  const addAverageCalculator = async () => {
    try {
      const docRef = await addDoc(collection(db, "averages"), {
        nota1,
        nota2,
        result,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getAverageCalculator = async () => {
    const querySnapshot = await getDocs(collection(db, "averages"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
    });
  };

  const calcula = () => {
    const result = (parseFloat(nota1) + parseFloat(nota2)) / 2;

    setResult(result);
  };

  return (
    <View>
      <Text>Primeira nota:</Text>
      <View style={styles.container}>
        <Octicons name="number" size={24} color="black" />
        <TextInput
          keyboardType="numeric"
          placeholder="Digite aqui"
          style={styles.input}
          value={nota1}
          onChange={(e) => setNota1(+e.target.value)}
          onSubmitEditing={addAverageCalculator}
        ></TextInput>
      </View>

      <Text>Segunda nota:</Text>
      <View style={styles.container}>
        <Octicons name="number" size={24} color="black" />
        <TextInput
          keyboardType="numeric"
          placeholder="Digite aqui"
          style={styles.input}
          value={nota2}
          onChange={(e) => setNota2(+e.target.value)}
        ></TextInput>
      </View>
      <View>
        <Pressable onPress={calcula} style={styles.button}>
          <Text>Calcular!</Text>
        </Pressable>
      </View>
      <View>
        <Text style={styles.text}>A média é: {result}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  input: {
    backgroundColor: "#f7e3fa",
    padding: 11,
    fontSize: 17,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
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
  text: {
    alignSelf: "center",
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    padding: 15,
  },
});

export default AverageCalculator;
