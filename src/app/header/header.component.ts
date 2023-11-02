import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  responseData: any;

  constructor(private location:Location) { }

  ngOnInit(): void {
  }



  previousPage(){
    this.location.back();
  }
}

