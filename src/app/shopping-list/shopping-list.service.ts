import { Ingredient } from '../shared/Ingredient.model';
import { EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

export class ShoppingListService {

    private ingredients: Ingredient[]= [];

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }


}