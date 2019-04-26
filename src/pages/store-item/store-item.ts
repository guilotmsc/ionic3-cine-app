import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PaymentPage } from '../payment/payment';

@IonicPage()
@Component({
  selector: 'page-store-item',
  templateUrl: 'store-item.html',
})
export class StoreItemPage {

	segment = "combos";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreItemPage');
  }

  toPayment(){
    this.navCtrl.push(PaymentPage);
  }

}
