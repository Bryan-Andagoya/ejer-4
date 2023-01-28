import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { StackNavigatorParamList } from "../navigation";

interface Props extends StackScreenProps<StackNavigatorParamList, "Login"> {}

export const LoginScreen = ({ navigation }: Props) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginPressedHandler = () => {
    Alert.alert("Success", `Your username is ${username}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.hintContainer}>
          <Text style={styles.hintText}>Enter your username</Text>
        </View>
        <View>
          <TextInput
            placeholder="Username"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.hintContainer}>
          <Text style={styles.hintText}>Enter your password</Text>
        </View>
        <View>
          <TextInput
            placeholder="Password"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={loginPressedHandler}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  titleContainer: {
    alignItems: "center",
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  form: {
    padding: 16,
    width: "70%",
    alignSelf: "center",
  },
  hintContainer: {
    paddingBottom: 8,
  },
  hintText: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    width: "100%",
  },
  buttonContainer: {
    paddingTop: 16,
    width: "100%",
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "deepskyblue",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
