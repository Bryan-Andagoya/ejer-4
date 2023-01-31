import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { Character } from "../models";

interface Props {
  character: Character;
}

export const CharacterCard = ({ character }: Props) => {
  return (
    <View style={styles.itemContainer}>
      <View>
        <Image source={{ uri: character.image }} style={styles.image} />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.name}>{character.name}</Text>
        <Text>{character.chronologicalInformation.firstAppearance}</Text>
      </View>
      <View style={styles.iconContainer}>
        {character.physicalDescription.gender === "Male" ? (
          <FontAwesome name="male" size={24} color="deepskyblue" />
        ) : (
          <FontAwesome name="female" size={24} color="deeppink" />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "white",
    // elevation: 2,
    flexDirection: "row",
    borderColor: "gainsboro",
    borderWidth: 1,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 8,
  },
  name: {
    fontWeight: "bold",
    marginBottom: 3,
  },
  descriptionContainer: {
    paddingHorizontal: 16,
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  iconContainer: {
    justifyContent: "center",
    paddingEnd: 8,
  },
});
