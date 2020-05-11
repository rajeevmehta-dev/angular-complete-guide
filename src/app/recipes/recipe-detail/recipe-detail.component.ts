import { RecipeService } from './../recipe.service';
import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipeDetails: RecipeModel;
  id: number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipeDetails = this.recipeService.getRecipeById(this.id);
    });
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipeDetails.ingredient);
  }

  onEditRecipe = (): void => {
    this.router.navigate(['edit'], { relativeTo: this.route });
   // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }
}




