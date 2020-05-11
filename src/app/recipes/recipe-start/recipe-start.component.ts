import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.scss']
})
export class RecipeStartComponent implements OnInit, OnDestroy {
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  ngOnDestroy(): void {
  }
}
