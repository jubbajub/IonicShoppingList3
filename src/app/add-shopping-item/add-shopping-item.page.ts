import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item/item.model';

@Component({
  selector: 'app-add-shopping-item',
  templateUrl: './add-shopping-item.page.html',
  styleUrls: ['./add-shopping-item.page.scss'],
})
export class AddShoppingItemPage implements OnInit {

    item: Item = {
      name: '',
      quantity: undefined,
      price: undefined,
    };

  constructor() { }

  ngOnInit() {
  }

}
