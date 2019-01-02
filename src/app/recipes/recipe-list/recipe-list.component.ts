import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe' , 'this is a test recipe' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGrbIxgsYKbCAAhQy-rH5cC5vFka8wT_n2bEUA1rSgGIa7F47lA')
  ];
  
  
  constructor() { }

  ngOnInit() {
  }

}
