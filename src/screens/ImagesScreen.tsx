import { StackScreenProps } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

import { CharacterCard } from "../components";
import { Character } from "../models";
import { StackNavigatorParamList } from "../navigation";

interface Props extends StackScreenProps<StackNavigatorParamList, "Images"> {}

export const ImagesScreen = ({ navigation }: Props) => {
  const [items, setItems] = useState<Character[] | null>(null);

  useEffect(() => {
    fetch("https://api.sampleapis.com/avatar/characters")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch(() => Alert.alert("Error", "Error fetching data"));
  }, []);

  const renderItem = ({ item }: { item: Character }) => (
    <TouchableOpacity onPress={() => navigation.push("Details", item)}>
      <CharacterCard character={item} />
    </TouchableOpacity>
  );

  const Separetor = () => <View style={styles.separetor} />;

  return (
    <View style={styles.container}>
      {items === null ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="deepskyblue" />
        </View>
      ) : (
        <View style={styles.listContainer}>
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={Separetor}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  listContainer: {
    padding: 8,
  },

  separetor: {
    height: 8,
  },

  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
