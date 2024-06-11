import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  title: string;
  description: string;
  

  constructor() { 
    this.title = 'About Me';
    this.description = 'I am a passionate software developer with experience in Angular, TypeScript, and various other technologies. I enjoy building user-friendly applications and continually learning new skills.';
   
  }

  ngOnInit(): void {
  }

}