import { RecipesService } from './recipes.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[];

  constructor(
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
    this.loadAllRecipes();
  }

  loadAllRecipes() {
    this.recipes = this.recipesService.getAllRecipes();
  }

}
