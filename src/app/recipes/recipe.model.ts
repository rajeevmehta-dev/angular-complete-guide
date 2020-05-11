import { IngredientModel } from './../shared/ingredient.model';
export class RecipeModel {
    constructor(public name: string, public desc: string, public path: string, public ingredient: IngredientModel[]) {
    }
}
