
import {Component, OnInit} from '@angular/core';
import { Restaurant } from './restaurant';

@Component({
  selector: 'restaurant-directory',
  templateUrl: './restaurantDirectory.component.html',
  styleUrls: ['./restaurantDirectory.component.scss']
})
export class RestaurantDirectory implements OnInit {

  model: any = {};

  restaurants = [];

  ngOnInit() {

  }

  onSubmit(restaurant) {
    const _restaurant: Restaurant = {
      name: restaurant.name,
      city: restaurant.city
    };
    this.restaurants.push(_restaurant);
    this.model.name = '';
    this.model.city = '';
  }
}