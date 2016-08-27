import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
import {AddItem} from '../addItem/addItem';
import {ToDoService} from '../data/service';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  items=[];
  service;
  
  constructor(public navCtrl: NavController,public navParams:NavParams,service:ToDoService) {
    this.navCtrl=navCtrl;
    this.items=[];
    this.service=service;
    this.service.getData().then((todos)=>{
      this.items=JSON.parse(todos) || [];

    });

    

  }
  addItem(){
   
    this.navCtrl.push(AddItem,{items:this.items});
  }
  deleteItem(item){
  
   this.service.remove(item).then((todos)=>{
      this.items=JSON.parse(todos)||[];

    });
  }
}
