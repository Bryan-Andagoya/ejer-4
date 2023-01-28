import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, Image } from "react-native";

import { CustomButton, CustomTextInput } from "../common";
import { StackNavigatorParamList } from "../navigation";

interface Props extends StackScreenProps<StackNavigatorParamList, "Login"> {}

export const LoginScreen = ({ navigation }: Props) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string | undefined>();
  const [passwordError, setPasswordError] = useState<string | undefined>();

  const loginPressedHandler = () => {
    if (!username || !password) {
      if (!username) {
        setUsernameError("Username is required");
      }
      if (!password) {
        setPasswordError("Password is required");
      }
    } else {
      setUsername("");
      setPassword("");
      setUsernameError(undefined);
      setPasswordError(undefined);
      Alert.alert("Success", `Your username is ${username}`);
    }
  };

  const goToImages = () => {
    navigation.push("Images");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/login.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <CustomTextInput
            hint="Enter your username"
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            error={usernameError}
          />
        </View>
        <View>
          <CustomTextInput
            hint="Enter your password"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            error={passwordError}
          />
        </View>
        <View style={{ height: 24 }} />
        <View style={styles.buttonContainer}>
          <CustomButton text="Login" onPress={loginPressedHandler} />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton text="Go To Images" onPress={goToImages} />
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
  imageContainer: {
    alignItems: "center",
    paddingTop: 8,
  },
  image: {
    width: 100,
    height: 100,
  },
  form: {
    paddingVertical: 16,
    width: "70%",
    alignSelf: "center",
  },
  inputContainer: {
    paddingVertical: 8,
  },
  buttonContainer: {
    paddingVertical: 8,
    width: "100%",
  },
});
