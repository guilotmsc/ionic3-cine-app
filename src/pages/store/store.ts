import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { StoreItemPage } from '../store-item/store-item'; 
 
@IonicPage()
@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
})
export class StorePage {

  pet = "puppies";

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorePage');
  }

  toItem(){
  	this.navCtrl.push(StoreItemPage);
  }

  openModal() {
    let myModal = this.modalCtrl.create(StoreItemPage);
    myModal.present();
  }


}
