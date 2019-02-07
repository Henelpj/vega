
import { Component, OnInit } from '@angular/core';
import { student } from '../student';
import {NgForm} from '@angular/forms'; 
import {NewsService} from '../news.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  student= new student();
  isRegistered=false;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }
 registration(f: NgForm){
   this.newsService.store(this.student).subscribe(
     data => {
       this.isRegistered =true;
       console.log("Success fully");
       f.reset();
     },
     (err) => {
       this.isRegistered = false;
     }
       );
 }
}
