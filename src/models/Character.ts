export interface Bio {
  alternativeNames: any;
  nationality: string;
  ethnicity: string;
  ages: any;
  born: string;
  died: any;
}

export interface PhysicalDescription {
  gender: string;
  eyeColor: string;
  hairColor: string;
  skinColor: string;
}

export interface PersonalInformation {
  loveInterst: string;
  allies: string[];
  enemies: any;
  weaponsOfChoice: any;
  fightingStyles: any;
  loveInterest: string;
}

export interface PoliticalInformation {
  profession: any;
  position: any;
  predecessor: string;
  successor: string;
  affiliations: any;
}

export interface ChronologicalInformation {
  firstAppearance: string;
  lastAppearance: any;
  voicedBy: any;
}

export interface Character {
  id: any;
  name: string;
  image: string;
  bio: Bio;
  physicalDescription: PhysicalDescription;
  personalInformation: PersonalInformation;
  politicalInformation: PoliticalInformation;
  chronologicalInformation: ChronologicalInformation;
}
