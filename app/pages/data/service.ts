import {Storage,SqlStorage} from 'ionic-angular';
import {Injectable} from '@angular/core';

@Injectable()
export class ToDoService{
    storage;
    data;
    constructor(){
        this.storage=new Storage(SqlStorage,{name:'todoStorage'});
        this.data=null;

        this.storage.get('todoStorage').then((todos)=>{
            this.data=JSON.parse(todos);

        } );
    }
    getData(){
        return this.storage.get('todoStorage');
    }
    save(item){
        if (!this.data){
            this.data=[item];
             let newData=JSON.stringify(this.data);
             this.storage.set('todoStorage',newData);
        }
        else{
            this.data.push(item);
             let newData=JSON.stringify(this.data);
            this.storage.set('todoStorage',newData);
        }

    }
    remove(item){
        for(var i=0;i<this.data.length;i++){
            if(item==this.data[i]){
                //start from this data and remove just one item
                this.data.splice(i,1);
                break;
            }
        }
        //store new data back to db
        let newData=JSON.stringify(this.data);
        this.storage.set('todoStorage',newData);
        return this.getData();
    }

}
