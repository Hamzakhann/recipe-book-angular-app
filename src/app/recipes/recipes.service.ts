import {Recipe} from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A test recipe' , 
    'this is a test recipe' , 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGrbIxgsYKbCAAhQy-rH5cC5vFka8wT_n2bEUA1rSgGIa7F47lA'
    ,[
      new Ingredient('Meat' , 1),
      new Ingredient('Fries' , 10)
    ]
    )
    ,
    new Recipe('A test recipe' , 
    'this is a test recipe' , 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGrbIxgsYKbCAAhQy-rH5cC5vFka8wT_n2bEUA1rSgGIa7F47lA',
    [
      new Ingredient('Meater' , 1),
      new Ingredient('FriesIngre' , 10)
    ]
    )
    ,
    new Recipe('A test recipe' ,
     'this is a test recipe' , 
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGrbIxgsYKbCAAhQy-rH5cC5vFka8wT_n2bEUA1rSgGIa7F47lA',
     [
      new Ingredient('Meat' , 1),
      new Ingredient('Fries' , 10)
     ]
     )
  ];
 constructor(private slService:ShoppingListService){

  }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients)
  }
  
}