import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';

import {DishProvider} from '../../providers/dish/dish';
import {LeaderProvider} from '../../providers/leader/leader';
import {PromotionProvider} from '../../providers/promotion/promotion';

import {Dish} from '../../Shared/dish';
import {Leader} from '../../Shared/leader';
import {Promotion} from '../../Shared/promotion';
import { OnInit } from '@angular/core';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  dish: Dish; 
  leader: Leader;
  promotion: Promotion;

  constructor(
    public navCtrl: NavController,
    private dishService: DishProvider,
    private leaderService: LeaderProvider,
    private promotionService: PromotionProvider,
    @inject ('DbURL') private dbURL
    ) {

  }
  
  getFeaturedDish(){
    this.dishService
    .getFeaturedDish()

  }

}
