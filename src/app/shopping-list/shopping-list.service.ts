import { IngredientModel } from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';
import {Subject} from 'rxjs';
export class ShoppingListService {
    ingredientChanged = new Subject<IngredientModel[]>();
    startEditing = new Subject<number>();
    private ingredients: IngredientModel[] = [
        new IngredientModel('Apples', 5),
        new IngredientModel('Tomatoes', 5)
    ];

    getIngredients = (): IngredientModel[] => {
        return this.ingredients.slice();
    }

    onAddShoppingIngredient = (ingredient: IngredientModel): void => {
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    
    onAddIngredients = (ingredients: IngredientModel[]): void => {
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    onUpdateIngredient = (index : number, ingredient: IngredientModel): void => {
        this.ingredients[index] = ingredient;
        this.ingredientChanged.next(this.ingredients.slice());
    }

    onDeleteIngredient = (index: number): void => {
        this.ingredients.splice(index, 1);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    getIngredient = (index: number): IngredientModel =>  {
        return  this.ingredients[index];
      }
}