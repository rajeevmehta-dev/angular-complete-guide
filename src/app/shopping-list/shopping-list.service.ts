import { IngredientModel } from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';
import {Subject} from 'rxjs';
export class ShoppingListService {
    ingredientChanged = new Subject<IngredientModel[]>();
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
}