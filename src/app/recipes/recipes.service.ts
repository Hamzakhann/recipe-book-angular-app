import {Recipe} from './recipe.model';
import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject <Recipe[]>();
  // recipeSelected = new EventEmitter<Recipe>();
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

  getRecipe(index:number){
    return this.recipes[index]
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients)
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number , newRecipe:Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  
  }

  deleteRecipe(index:number){
    this.recipes.splice(index , 1);
    this.recipesChanged.next(this.recipes.slice());  
  }

}