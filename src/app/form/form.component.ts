import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    obj = {
      name:"",
      dept:"CSE",
      title:"",
      type:"Journal",
      details:"",
      year:"",
      url:""
    }
  constructor( private dsObj:DataService) {  }

  ngOnInit(): void {

  }

  addPublication()
  {
    // this.obj.name=l1;
    //  this.obj.dept=l2;
    //  this.obj.title=l3;
    //  this.obj.type=l4;
    //  this.obj.details=l5;
    //  this.obj.year=l5;
    // this.obj.url=l6;
    console.log(this.obj);
    this.dsObj.publications.push({...this.obj});

    this.obj.name="";
    
    this.obj.title="";
    
    this.obj.details="";
    this.obj.year="";
    this.obj.url="";

  }

}
