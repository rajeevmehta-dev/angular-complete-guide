import { RecipeService } from './../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode  = false;
  recipeForm : FormGroup;
  constructor(private route : ActivatedRoute, private recipeService : RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  initForm = (): void => {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';

    if (this.editMode) {
      const recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.path;
      recipeDescription = recipe.desc;
    }
    this.recipeForm = new FormGroup({
      name : new FormControl(recipeName),
      imagePath : new FormControl(recipeImagePath),
      description : new FormControl(recipeDescription),
    });
  }

  onSubmit = (): void => {
    console.log(this.recipeForm.value);
  }
}
