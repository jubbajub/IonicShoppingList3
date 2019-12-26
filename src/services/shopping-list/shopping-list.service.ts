import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Item } from 'src/models/item/item.model';

@Injectable()
export class  ShoppingListService {

    private shoppingListRef = this.db.list<Item>('shopping-list');

    constructor(private db: AngularFireDatabase) {
    }

    getShoppingList() {
        console.log('SEFER: getShoppingList');
        return this.shoppingListRef;
    }

    addItem(item: Item) {
        console.log('SEFER: addItem');
        console.log('Falls ein FormularElement (name, price, quantity) nicht mit einem Wert belegt ist, dann erscheint ein Fehler');
        return this.shoppingListRef.push(item);
    }
}
