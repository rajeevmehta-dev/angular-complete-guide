import { RecipeService } from './recipe.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeModel } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  constructor(private recipeService: RecipeService) { }
  ngOnInit() {
  }
}
