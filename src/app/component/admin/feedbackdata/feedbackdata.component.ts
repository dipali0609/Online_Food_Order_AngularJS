import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooddataService } from 'src/app/service/data/fooddata.service';

@Component({
  selector: 'app-feedbackdata',
  templateUrl: './feedbackdata.component.html',
  styleUrls: ['./feedbackdata.component.css']
})
export class FeedbackdataComponent implements OnInit
{

  
  feedbacks:feedback[] = [];
 
  constructor(private foodSerivice:FooddataService,private router:Router)
  {
  
  }
  ngOnInit(): void 
  {
    this.retriveAllFeedback();
  }
  
 

  retriveAllFeedback()
{
  this.foodSerivice.retriveAllFeedback().subscribe(
    response=>{
      console.log(response);
      this.feedbacks=response;
    }
  )
}
}

  export class feedback
  {
            constructor(
              public  feedbackname:string,
            public feedbackemail:string,
            public feedbacksubject:string,
            public feedbackmessage:string
        
            ){}
   }

