import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooddataService } from 'src/app/service/data/fooddata.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit
{
 

  constructor(private service:FooddataService, private router:Router){

  }
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
   this.service.logout();
   this.router.navigate(['home']);
  }
}
