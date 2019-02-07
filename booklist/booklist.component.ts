import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
public bookdetails:any=[
{title:"26", author:"Henel",publisher:"MCA LE",image:"ic_propic3.png",dept:"mca"},
{title:"43",author:"sachin",publisher:"MCA REG",image:"ic_propic2.png",dept:"mca"},
{title:"31",author:"jobin",publisher:"DD",image:"ic_propic4.png",dept:"mca"}];
  
selbook:any;
addbook(data:any){
  this.selbook=data;

  }
constructor() { }

  ngOnInit() {
  }

}
