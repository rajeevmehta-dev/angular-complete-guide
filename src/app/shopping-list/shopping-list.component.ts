import { ShoppingListService } from './shopping-list.service';
import { IngredientModel } from './../shared/ingredient.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: IngredientModel[];
  private isChangeSub: Subscription;
  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.isChangeSub = this.shoppingService.ingredientChanged.subscribe((ingredient: IngredientModel[]) => {
      this.ingredients = ingredient;
    });
  }
  ngOnDestroy(): void {
    this.isChangeSub.unsubscribe();
  }

  onEditItem = (index: number) => {
   this.shoppingService.startEditing.next(index);
  }
}
