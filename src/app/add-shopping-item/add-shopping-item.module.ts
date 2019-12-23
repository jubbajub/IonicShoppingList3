import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddShoppingItemPageRoutingModule } from './add-shopping-item-routing.module';

import { AddShoppingItemPage } from './add-shopping-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddShoppingItemPageRoutingModule
  ],
  declarations: [AddShoppingItemPage]
})
export class AddShoppingItemPageModule {}
