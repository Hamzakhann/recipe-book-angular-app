import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RecipeService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from "rxjs/operators"
import { AuthService } from '../auth/auth.service';
import { auth } from 'firebase';

@Injectable()
export class DataStorageService {
  constructor(private http:HttpClient ,
              private recipeService:RecipeService , 
              private authService:AuthService
              ){}

  storeRecipes(){
    const token =  this.authService.getToken()
    return this.http.put('https://maria-project-presentation.firebaseio.com/recipes.json?auth=' + token , this.recipeService.getRecipes())
  }

  getRecipes(){
    const token =  this.authService.getToken()
    this.http.get('https://maria-project-presentation.firebaseio.com/recipes.json?auth=' + token)
    .subscribe(
      (response:any) =>{
        const recipes:Recipe[] = response
        this.recipeService.setRecipes(recipes)
      }
    )
  }
}