import { Octicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { addDoc, collection, db, getDocs } from "../firebase/index";

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
      <Text style={styles.text2}>Primeira nota:</Text>
      <View style={styles.container}>
        <Octicons name="number" size={24} color="black" />
        <TextInput
          keyboardType="numeric"
          placeholder="Digite aqui"
          style={styles.input}
          value={nota1}
          onChange={(e) => setNota1(+e.nativeEvent.text)}
          onSubmitEditing={addAverageCalculator}
        ></TextInput>
      </View>

      <Text style={styles.text2}>Segunda nota:</Text>
      <View style={styles.container}>
        <Octicons name="number" size={24} color="black" />
        <TextInput
          keyboardType="numeric"
          placeholder="Digite aqui"
          style={styles.input}
          value={nota2}
          onChange={(e) => setNota2(+e.nativeEvent.text)}
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
    margin: 20,
  },
  text2: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
    margin: 10,
  },
});

export default AverageCalculator;
