import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreItemPage } from './store-item';

@NgModule({
  declarations: [
    StoreItemPage,
  ],
  imports: [
    IonicPageModule.forChild(StoreItemPage),
  ],
})
export class StoreItemPageModule {}
