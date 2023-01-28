import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { StackNavigatorParamList } from "../navigation";

interface Props extends StackScreenProps<StackNavigatorParamList, "Welcome"> {}

export const WelcomeScreen = ({ navigation }: Props) => {
  const loginPressedHandler = () => {
    navigation.push("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.bodyText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
          quisquam labore, dolorem harum, nobis veniam aliquam dolore ex vero
          nam deserunt suscipit sit dolor cumque saepe nesciunt et provident
          quos aliquid. A quae sed reprehenderit nobis pariatur omnis
          praesentium laborum officia minima doloribus, odio rerum error facilis
          aliquam? Sit, delectus?
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={loginPressedHandler}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    padding: 8,
  },
  titleContainer: {
    paddingBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  bodyContainer: {
    paddingVertical: 8,
    width: "70%",
  },
  bodyText: {
    fontSize: 16,
    textAlign: "justify",
  },
  buttonContainer: {
    paddingVertical: 16,
    width: "100%",
    alignItems: "center",
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "deepskyblue",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    width: "70%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
