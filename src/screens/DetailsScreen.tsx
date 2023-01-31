import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

import { StackNavigatorParamList } from "../navigation";

interface Props extends StackScreenProps<StackNavigatorParamList, "Details"> {}

export const DetailsScreen = ({ route }: Props) => {
  const {
    name,
    image,
    physicalDescription,
    personalInformation,
    politicalInformation,
    chronologicalInformation,
    bio,
  } = route.params;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {name !== undefined && (
        <View>
          <Text style={styles.name}>{name}</Text>
        </View>
      )}

      {image && (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: image }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      )}

      <View style={styles.dataContainer}>
        <Text style={styles.title}>Bio</Text>
        <View style={{ height: 8 }} />

        {bio.alternativeNames && (
          <Text style={styles.dataText}>
            Alternative names:{" "}
            <Text style={styles.dataValue}>
              {typeof bio.alternativeNames === "string"
                ? bio.alternativeNames
                : bio.alternativeNames.join(", ")}
            </Text>
          </Text>
        )}

        {bio.nationality && (
          <Text style={styles.dataText}>
            Nationality: <Text style={styles.dataValue}>{bio.nationality}</Text>
          </Text>
        )}

        {bio.ethnicity && (
          <Text style={styles.dataText}>
            Ethnicity: <Text style={styles.dataValue}>{bio.ethnicity}</Text>
          </Text>
        )}

        {bio.ages && (
          <Text style={styles.dataText}>
            Ages:{" "}
            <Text style={styles.dataValue}>
              {typeof bio.ages === "string" ? bio.ages : bio.ages.join(", ")}
            </Text>
          </Text>
        )}

        {bio.born && (
          <Text style={styles.dataText}>
            Born: <Text style={styles.dataValue}>{bio.born}</Text>
          </Text>
        )}

        {bio.died && (
          <Text style={styles.dataText}>
            Died:{" "}
            <Text style={styles.dataValue}>
              {typeof bio.died === "string" ? bio.died : bio.died.join(", ")}
            </Text>
          </Text>
        )}

        <View style={{ height: 16 }} />
        <Text style={styles.title}>Physical Description</Text>
        <View style={{ height: 8 }} />

        {physicalDescription.gender && (
          <Text style={styles.dataText}>
            Gender:{" "}
            <Text style={styles.dataValue}>{physicalDescription.gender}</Text>
          </Text>
        )}

        {physicalDescription.eyeColor && (
          <Text style={styles.dataText}>
            Eye color:{" "}
            <Text style={styles.dataValue}>{physicalDescription.eyeColor}</Text>
          </Text>
        )}

        {physicalDescription.hairColor && (
          <Text style={styles.dataText}>
            Hair color:{" "}
            <Text style={styles.dataValue}>
              {physicalDescription.hairColor}
            </Text>
          </Text>
        )}

        {physicalDescription.skinColor && (
          <Text style={styles.dataText}>
            Skin color:{" "}
            <Text style={styles.dataValue}>
              {physicalDescription.skinColor}
            </Text>
          </Text>
        )}

        <View style={{ height: 16 }} />
        <Text style={styles.title}>Personal Information</Text>
        <View style={{ height: 8 }} />

        {personalInformation.loveInterst && (
          <Text style={styles.dataText}>
            Love interest:{" "}
            <Text style={styles.dataValue}>
              {personalInformation.loveInterst}
            </Text>
          </Text>
        )}

        {personalInformation.allies && (
          <Text style={styles.dataText}>
            Alies:{" "}
            <Text style={styles.dataValue}>
              {typeof personalInformation.allies === "string"
                ? personalInformation.allies
                : personalInformation.allies.join(", ")}
            </Text>
          </Text>
        )}

        {personalInformation.enemies && (
          <Text style={styles.dataText}>
            Enemies:{" "}
            <Text style={styles.dataValue}>
              {typeof personalInformation.enemies === "string"
                ? personalInformation.enemies
                : personalInformation.enemies.join(", ")}
            </Text>
          </Text>
        )}

        {personalInformation.weaponsOfChoice && (
          <Text style={styles.dataText}>
            Weapons of choice:{" "}
            <Text style={styles.dataValue}>
              {typeof personalInformation.weaponsOfChoice === "string"
                ? personalInformation.weaponsOfChoice
                : personalInformation.weaponsOfChoice.join(", ")}
            </Text>
          </Text>
        )}

        {personalInformation.fightingStyles && (
          <Text style={styles.dataText}>
            Fighting styles:{" "}
            <Text style={styles.dataValue}>
              {typeof personalInformation.fightingStyles === "string"
                ? personalInformation.fightingStyles
                : personalInformation.fightingStyles.join(", ")}
            </Text>
          </Text>
        )}

        <View style={{ height: 16 }} />
        <Text style={styles.title}>Political Information</Text>
        <View style={{ height: 8 }} />

        {politicalInformation.profession && (
          <Text style={styles.dataText}>
            Profession:{" "}
            <Text style={styles.dataValue}>
              {typeof politicalInformation.profession === "string"
                ? politicalInformation.profession
                : politicalInformation.profession.join(", ")}
            </Text>
          </Text>
        )}

        {politicalInformation.position && (
          <Text style={styles.dataText}>
            Position:{" "}
            <Text style={styles.dataValue}>
              {typeof politicalInformation.position === "string"
                ? politicalInformation.position
                : politicalInformation.position.join(", ")}
            </Text>
          </Text>
        )}

        {politicalInformation.predecessor && (
          <Text style={styles.dataText}>
            Predecessor:{" "}
            <Text style={styles.dataValue}>
              {politicalInformation.predecessor}
            </Text>
          </Text>
        )}

        {politicalInformation.successor && (
          <Text style={styles.dataText}>
            Successor:{" "}
            <Text style={styles.dataValue}>
              {politicalInformation.successor}
            </Text>
          </Text>
        )}

        {politicalInformation.affiliations && (
          <Text style={styles.dataText}>
            Affiliations:{" "}
            <Text style={styles.dataValue}>
              {typeof politicalInformation.affiliations === "string"
                ? politicalInformation.affiliations
                : politicalInformation.affiliations.join(", ")}
            </Text>
          </Text>
        )}

        <View style={{ height: 16 }} />
        <Text style={styles.title}>Chronological Information</Text>
        <View style={{ height: 8 }} />

        {chronologicalInformation.firstAppearance && (
          <Text style={styles.dataText}>
            First Appearance:{" "}
            <Text style={styles.dataValue}>
              {chronologicalInformation.firstAppearance}
            </Text>
          </Text>
        )}

        {chronologicalInformation.lastAppearance && (
          <Text style={styles.dataText}>
            Last Appearance:{" "}
            <Text style={styles.dataValue}>
              {typeof chronologicalInformation.lastAppearance === "string"
                ? chronologicalInformation.lastAppearance
                : chronologicalInformation.lastAppearance.join(", ")}
            </Text>
          </Text>
        )}

        {chronologicalInformation.voicedBy && (
          <Text style={styles.dataText}>
            Void By:{" "}
            <Text style={styles.dataValue}>
              {typeof chronologicalInformation.voicedBy === "string"
                ? chronologicalInformation.voicedBy
                : chronologicalInformation.voicedBy.join(", ")}
            </Text>
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingBottom: 16,
  },
  name: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  imageContainer: {
    width: "100%",
    padding: 16,
  },
  image: {
    height: 300,
    width: "100%",
    borderRadius: 8,
  },
  dataContainer: {
    width: "100%",
    paddingHorizontal: 16,
  },
  dataText: {
    fontSize: 16,
    fontWeight: "500",
  },
  dataValue: {
    fontWeight: "300",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
});
