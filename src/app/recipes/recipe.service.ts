
import { RecipeModel } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { IngredientModel } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
@Injectable()
export class RecipeService {
    public recipeSelected = new Subject<RecipeModel>();
    private recipes: RecipeModel[] = [
        new RecipeModel('Tasty Schnitzel', 'A super tasty Schnitzel- just awesome!',
            `https://assets.bonappetit.com/photos/57ae1afd53e63daf11a4e26f/16:9/w_940,c_limit/chicken-schnitzel.jpg 1x,https://assets.bonappetit.com/photos/57ae1afd53e63daf11a4e26f/16:9/w_1880,c_limit/chicken-schnitzel.jpg 2x`,
            [new IngredientModel('Meat', 1),
            new IngredientModel('French Fries', 20)
            ])
        ,
        new RecipeModel('Big Fat Burger', 'What else you need to say?',
            `https://c7.alamy.com/comp/DBEC9F/big-and-juicy-cheese-burger-on-a-white-background-DBEC9F.jpg`,
            [new IngredientModel('Buns', 2),
            new IngredientModel('Meat', 20)])
    ];

    constructor(private shoppingService: ShoppingListService) {

    }

    getRecipe = (): RecipeModel[] => {
        return this.recipes.slice();
    }

    addIngredientToShoppingList = (ingredients: IngredientModel[]): void => {
        this.shoppingService.onAddIngredients(ingredients);
    }

    getRecipeById = (index: number): RecipeModel => {
        return this.recipes[index];
    }

}