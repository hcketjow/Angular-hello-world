import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
    // tslint:disable-next-line:typedef
    getAuthors(){
      return ['author1', 'author2', 'author3'];
    }
}
