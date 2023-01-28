import React from "react";
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
}

const CustomTextInput = ({
  placeholder,
  hint,
  value,
  onChangeText,
  secureTextEntry,
}: Props) => {
  return (
    <>
      <View style={styles.hintContainer}>
        <Text style={styles.hintText}>{hint}</Text>
      </View>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </>
  );
};

export default CustomTextInput;

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
    marginBottom: 16,
    width: "100%",
  },
});
