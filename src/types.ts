export type DinosaurType = 
  | "T-Rex" 
  | "Pinacosaurus" 
  | "Zavacephale" 
  | "Triceratops" 
  | "Stegosaurus" 
  | "Brachiosaurus" 
  | "Velociraptor" 
  | "Pteranodon";

export interface Answer {
  text: string;
  scores: Partial<Record<DinosaurType, number>>;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export interface DinosaurProfile {
  type: DinosaurType;
  name: string;
  scientificName: string;
  description: string;
  traits: string[];
  imageUrl: string;
  color: string;
}
