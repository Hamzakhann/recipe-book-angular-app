import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RecipeService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private http:HttpClient , private recipeService:RecipeService){}

  storeRecipes(){
    return this.http.put('https://maria-project-presentation.firebaseio.com/recipes.json' , this.recipeService.getRecipes())
  }

  getRecipes(){
    this.http.get('https://maria-project-presentation.firebaseio.com/recipes.json')
    .subscribe(
      (response:any) =>{
        const recipes:Recipe[] = response
        this.recipeService.setRecipes(recipes)
      }
    )
  }
}