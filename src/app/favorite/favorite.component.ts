import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  isFavorite: boolean;

    // tslint:disable-next-line:typedef
    onClick(){
      this.isFavorite = !this.isFavorite;
    }

}
