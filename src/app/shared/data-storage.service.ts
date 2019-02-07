import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { RecipeService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from "rxjs/operators"
import { AuthService } from '../auth/auth.service';
import { auth } from 'firebase';

@Injectable()
export class DataStorageService {
  constructor(private httpClient:HttpClient ,
              private recipeService:RecipeService , 
              private authService:AuthService
              ){}

  storeRecipes(){
    const token =  this.authService.getToken()
    return this.httpClient.put('https://maria-project-presentation.firebaseio.com/recipes.json?auth=' + token , this.recipeService.getRecipes() , {
      observe: 'body',
      params : new HttpParams
    })
  }

  getRecipes(){
    const token =  this.authService.getToken()
    this.httpClient.get<Recipe[]>('https://maria-project-presentation.firebaseio.com/recipes.json?auth=' + token)
    .pipe(
      map(
        (recipes)=>{
          for (let recipe of recipes){
            if(!recipe['ingredients']){
              recipe['ingredients'] = [];
            }
          }
          return recipes 
        }
      )
    )
    .subscribe(
      (response:any) =>{
        const recipes:Recipe[] = response
        this.recipeService.setRecipes(recipes)
      }
    )
  }
}