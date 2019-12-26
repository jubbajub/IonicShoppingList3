import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item/item.model';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { Router } from '@angular/router';

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

  constructor(private shopping: ShoppingListService, private router: Router) { }


 /*  ionViewDidLoad(){
    console.log('ionViewDidLoad AddShoppingItemPage');
  } */

  addItem(item: Item) {
    this.shopping.addItem(item).then(ref => {
      console.log('ReferenzSchlüssel:', ref.key);
      this.router.navigate(['home'], {queryParams: {key: ref.key, item_name: item.name}});

    });
  }
  ngOnInit() {
  }

}
