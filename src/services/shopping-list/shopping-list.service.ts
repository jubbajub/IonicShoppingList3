import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Item } from 'src/models/item/item.model';

@Injectable()
export class  ShoppingListService {

    private shoppingListRef = this.db.list<Item>('shopping-list');

    constructor(private db: AngularFireDatabase) {
    }

    
}
