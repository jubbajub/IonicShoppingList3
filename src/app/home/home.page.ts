import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    console.log('SEFER:Home Page geladen!');
  }

  // sobald die Home Page aufgerufen wird, wird diese Methode ausgeführt
  ionViewWillEnter() {
    console.log('SEFER:ionViewWillEnter!');
/*     Der folgende Aufruf von Homepage (von einer anderne Seite) schickt die PAramter:
    this.router.navigate(['home'], {queryParams: {key: ref.key, item_name: item.name}}); */

/*     console.log(NavParams.item.name); */
  }

}
