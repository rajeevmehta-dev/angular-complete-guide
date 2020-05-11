import { ShoppingListService } from './../shopping-list.service';
import { IngredientModel } from './../../shared/ingredient.model';
import { Component, OnInit, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputNameShop', { static: false }) inputNameShopRef: ElementRef;
  @ViewChild('inputAmountShop', { static: false }) inputAmountShopRef: ElementRef;
  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient = (): void => {
    const name = this.inputNameShopRef.nativeElement.value;
    const amount = this.inputAmountShopRef.nativeElement.value;
    const shopObj = new IngredientModel(name, amount);
    this.shoppingService.onAddShoppingIngredient(shopObj);
  }
}



