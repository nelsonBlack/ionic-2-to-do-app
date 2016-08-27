import {Component} from '@angular/core';
import {Page,NavController, NavParams} from 'ionic-angular';
import {ToDoService} from '../data/service';
 
@Component({
  templateUrl: 'build/pages/addItem/addItem.html'
})
export class AddItem {
    createdItem;
    service;

  
  constructor(public navCtrl: NavController,public navParams:NavParams,service:ToDoService) {
     this.navParams=navParams;
     this.navCtrl=navCtrl;
     this.service=service;
  }
  save(){
    this.navParams.data.items.push(this.createdItem);
    this.service.save(this.createdItem);
    
    this.navCtrl.pop();

  }
}
