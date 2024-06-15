import { Component, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
title:string;
description:string;
  


constructor( private renderer : Renderer2 ){
  this.title="Welcome to My Portfolio"
  this.description="Hi, I'm Milan Parihar, a passionate developer and designer."
}


DownloadFile(){
  const link = this.renderer.createElement('a');
  link.setAttribute('target', '_blank');
  link.setAttribute('href','../../../assets/Milan_Security.pdf');
  link.setAttribute('download', 'Milan_Security.pdf')
  link.click();
  link.remove();

}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
