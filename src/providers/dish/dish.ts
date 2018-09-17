import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {dbURL} from '../../shared/dburl'
import {Dish} from '../ ../ shared/Dish';


/*
  Generated class for the DishProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DishProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DishProvider Provider');
  }

  getDishes(): Observable<Dish[]>{
    return this.http.get<Dish>(dbURL + 'dishes').map(
      res => res
    );
  }

  getDishes(id:number): Observable<Dish[]>{
    return this.http.get<Dish>(dbURL + 'dish/' + id).map(
      res => res
    );
  }
  getFeaturedDishes(): Observable<Dish[]>{
    return this.http.get<Dish>(dbURL + 'dishes?featured=true').map(
      res => res
    );
  }
 
}
