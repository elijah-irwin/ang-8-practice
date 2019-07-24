import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editItemIndex = index;
      this.editMode = true;
      this.editItem = this.shoppingListService.getIngredientFromList(index);
      this.slForm.setValue({
        name: this.editItem.name,
        amount: this.editItem.amount
      })
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addToList(form: NgForm) {
    const ingredient = new Ingredient(form.value.name, form.value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editItemIndex, ingredient);
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }

    this.editMode = false;
    form.reset();
  }
  
  onDelete() {
    this.shoppingListService.deleteFromList(this.editItemIndex);
    this.editMode = false;
    this.slForm.reset();
  }

  clearForm(form: NgForm) {
    this.editMode = false;
    form.reset();
  }

}
