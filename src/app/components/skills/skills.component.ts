import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent  implements OnInit{
  title: string;
  description: string;
  

  constructor() { 
    this.title = 'Skills';
    this.description = 'I am a passionate software developer with experience in Angular, TypeScript, and various other technologies. I enjoy building user-friendly applications and continually learning new skills.';
   
  }

  ngOnInit(): void {
  }

}
