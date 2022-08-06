import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  searchTerm:any;

  data:any=[];
  constructor( private dsObj:DataService ) {
      console.log(dsObj.publications)
   }
  ngOnInit() {
    this.data=this.dsObj.publications;
   }

}
