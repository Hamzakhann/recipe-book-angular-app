import {Recipe} from './recipe.model';
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A test recipe' , 'this is a test recipe' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGrbIxgsYKbCAAhQy-rH5cC5vFka8wT_n2bEUA1rSgGIa7F47lA')
    ,
    new Recipe('A test recipe' , 'this is a test recipe' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGrbIxgsYKbCAAhQy-rH5cC5vFka8wT_n2bEUA1rSgGIa7F47lA')
    ,
    new Recipe('A test recipe' , 'this is a test recipe' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGrbIxgsYKbCAAhQy-rH5cC5vFka8wT_n2bEUA1rSgGIa7F47lA')
  ];

  getRecipes(){
    return this.recipes.slice();
  }
  
}