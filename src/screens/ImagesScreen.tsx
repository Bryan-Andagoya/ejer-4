import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { StackNavigatorParamList } from "../navigation";

interface Props extends StackScreenProps<StackNavigatorParamList, "Images"> {}

export const ImagesScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>ImagesScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
