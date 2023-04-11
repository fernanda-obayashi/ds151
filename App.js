import { StyleSheet, SafeAreaView } from "react-native";
import AverageCalculator from "./components/AverageCalculator";
import HomeHeader from "./components/HomeHeader";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader></HomeHeader>
      <AverageCalculator></AverageCalculator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //margin: 20,
    marginTop: 20,
  },
});
