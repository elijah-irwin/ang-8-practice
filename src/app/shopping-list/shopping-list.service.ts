import { Ingredient } from '../shared/Ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {

    private ingredients: Ingredient[]= [
        {name: 'apples', amount: 10},
        {name: 'flour', amount: 5},
        {name: 'sugar', amount: 100},
    ];

    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    reloadList() {
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.reloadList();
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.reloadList();
    }

    getIngredientFromList(index: number) {
        return this.ingredients[index];
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.reloadList();
    }

    deleteFromList(index: number) {
        this.ingredients.splice(index, 1);
        this.reloadList();
    }
}