import { Component, OnInit } from '@angular/core';
import { FooddataService } from 'src/app/service/data/fooddata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit
{
  logout: void;


  constructor(public Service:FooddataService){}
  ngOnInit(): void {

    this.logout=this.Service.logout();
  }

}
