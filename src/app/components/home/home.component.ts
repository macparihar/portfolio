import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
title:string;
description:string;

constructor(){
  this.title="Welcome to My Portfolio"
  this.description="Hi, I'm Milan Parihar, a passionate developer and designer."
}


pdfUrl: string = '';

// resume preview
loadPdf(): void {
  this.pdfUrl = '../../../assets/Milan_Security.pdf';
}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
