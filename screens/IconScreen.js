import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, SafeAreaView } from "react-native";

const IconScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { itemId } = route.params;
  return (
    <SafeAreaView>
      <Button title="Go Back" onPress={() => navigation.goBack()}>
        <Text>itemId: {itemId}</Text>
      </Button>
    </SafeAreaView>
  );
};

export default IconScreen;
