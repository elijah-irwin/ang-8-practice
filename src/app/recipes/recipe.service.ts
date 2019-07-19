import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'test recipe', 
            'test description', 
            'https://img1.cookinglight.timeinc.net/sites/default/files/styles/medium_2x/public/1542062283/chocolate-and-cream-layer-cake-1812-cover.jpg?itok=rEWL7AIN',
            [
                new Ingredient('Apples', 5),
                new Ingredient('Tomatoes', 10)
            ]
        ),
        
        new Recipe(
            'test recipe 2', 
            'test description 2', 
            'https://img1.cookinglight.timeinc.net/sites/default/files/styles/medium_2x/public/1542062283/chocolate-and-cream-layer-cake-1812-cover.jpg?itok=rEWL7AIN',
            [
                new Ingredient('Apples', 5),
                new Ingredient('Tomatoes', 10)
            ]
        )
    ];

    recipeSelected = new EventEmitter<Recipe>();

    getRecipes() {
        return this.recipes.slice();
    }
}