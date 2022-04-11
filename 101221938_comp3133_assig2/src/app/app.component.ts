import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = '101221938_comp3133_assig';
  constructor(private http : HttpClient){

  } 
  ngOnInit(): void {
    
   
  }
}
