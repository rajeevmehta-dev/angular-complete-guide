import { NgForm } from '@angular/forms';
import { ShoppingListService } from './../shopping-list.service';
import { IngredientModel } from './../../shared/ingredient.model';
import { Component, OnInit, ElementRef, EventEmitter, Output, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editItem: IngredientModel;
  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingService.startEditing.subscribe((index: number) => {
      this.editItemIndex = index;
      this.editMode = true;
      this.editItem = this.shoppingService.getIngredient(index);
      this.slForm.setValue({
        name: this.editItem.name,
        amount: this.editItem.amount
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  addIngredient = (): void => {

  }

  onSubmit = (form: NgForm): void => {
    const name = form.value.name;
    const amount = form.value.amount;
    const shopObj = new IngredientModel(name, amount);
    if (this.editMode) {
      this.shoppingService.onUpdateIngredient(this.editItemIndex, shopObj);
    } else {
      this.shoppingService.onAddShoppingIngredient(shopObj);
    }
    this.editMode = false;
    this.slForm.reset();
  }

  onClear = (): void => {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete = (): void => {
    this.shoppingService.onDeleteIngredient(this.editItemIndex);
    this.onClear();
  }
}



