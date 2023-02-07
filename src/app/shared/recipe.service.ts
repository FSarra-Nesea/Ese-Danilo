import { Recipe } from "./recipe.model";

export class RecipeService {


private recipes: Recipe[] = [
  new Recipe(
  "Pizza margherita",
  "la più buona che ci sia",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpljiurvDfwzkfRozO110Hv7R22wn9QlmhQeKWbnarZ4fg6OKj2t_A3HgYgMN9Ce9FvkY&usqp=CAU"
),
  new Recipe(
  "Hamburger",
  "panino squisito",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpljiurvDfwzkfRozO110Hv7R22wn9QlmhQeKWbnarZ4fg6OKj2t_A3HgYgMN9Ce9FvkY&usqp=CAU"
  ),

  new Recipe(
    "Gelato",
    "panna e cioccolato",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpljiurvDfwzkfRozO110Hv7R22wn9QlmhQeKWbnarZ4fg6OKj2t_A3HgYgMN9Ce9FvkY&usqp=CAU"
  )

];

  getRecipes(){
        return this.recipes.slice();
  }


}
