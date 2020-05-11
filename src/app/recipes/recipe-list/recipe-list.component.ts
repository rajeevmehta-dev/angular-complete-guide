import { RecipeService } from './../recipe.service';
import { RecipeModel } from './../recipe.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[];
  constructor(private recipeService : RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }
  onNewRecipe = (): void => {
    console.log(this.route);
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
