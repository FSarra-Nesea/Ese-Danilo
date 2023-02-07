import { Component, OnInit } from '@angular/core';
import { RecipeService } from './../../shared/recipe.service';
import { Recipe } from './../../shared/recipe.model';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
 export class RecipesListComponent implements OnInit{

  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService){ }

 ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();

  }
}
