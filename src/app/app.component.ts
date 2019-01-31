import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'recipe-books';
  loadedFeature = 'recipe';
ngOnInit(){
firebase.initializeApp({
  apiKey: "AIzaSyCq7P9MegvmKcZUFRFcEanW6I9JlaiZ630",
  authDomain: "maria-project-presentation.firebaseapp.com"
})
}
  onNavigate(feature:string){
    this.loadedFeature = feature;
  }
}
