import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddShoppingItemPage } from './add-shopping-item.page';

describe('AddShoppingItemPage', () => {
  let component: AddShoppingItemPage;
  let fixture: ComponentFixture<AddShoppingItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShoppingItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddShoppingItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
