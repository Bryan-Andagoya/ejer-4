import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

interface Props {
  placeholder: TextInputProps["placeholder"];
  hint: string;
  value: TextInputProps["value"];
  onChangeText: TextInputProps["onChangeText"];
  secureTextEntry?: TextInputProps["secureTextEntry"];
  error?: string;
}

export const CustomTextInput = ({
  placeholder,
  hint,
  value,
  onChangeText,
  secureTextEntry,
  error,
}: Props) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <>
      <View style={styles.hintContainer}>
        <Text style={styles.hintText}>{hint}</Text>
      </View>
      <TextInput
        placeholder={placeholder}
        style={[styles.input, isFocus && { borderColor: "deepskyblue" }]}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{error}</Text>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
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
    width: "100%",
  },
  errorContainer: {
    paddingTop: 2,
  },
  error: {
    color: "red",
  },
});
