export interface IData {
  id: number;
  name: string;
  price: number;
  discount: number;
  introduction: string;
  details: IRecipeDetails;
  ingredients: string[];
  recipe: string[];
}

export type IRecipeDetails = [
  { Cuisine: string },
  { "Recipe Type": string },
  { Difficulty: string },
  { "Preparation Time": string },
  { "Cooking Time": string },
  { Serves: string }
];
