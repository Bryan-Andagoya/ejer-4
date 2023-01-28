import { StackScreenProps } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Alert,
  Image,
  ActivityIndicator,
} from "react-native";

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
    <View style={styles.itemContainer}>
      <View>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text>{item.chronologicalInformation.firstAppearance}</Text>
      </View>
    </View>
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
  itemContainer: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 2,
    flexDirection: "row",
    borderColor: "whitesmoke",
    borderWidth: 1,
  },
  separetor: {
    height: 8,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 8,
  },
  name: {
    fontWeight: "bold",
    color: "deepskyblue",
    marginBottom: 3,
  },
  descriptionContainer: {
    paddingHorizontal: 16,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
