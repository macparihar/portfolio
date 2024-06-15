import { Component, OnInit } from '@angular/core';
import { Certificate, Skill } from '../models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent  implements OnInit{
  title: string;
  description: string
  constructor() { 
    this.title = 'Skills';
    this.description = 'I am a passionate software developer with experience in Angular, TypeScript, and various other technologies. I enjoy building user-friendly applications and continually learning new skills.';
  }

  // skill section on skillPage
  skills: Skill[] = [
    { name: 'Angular', level: 'Advanced' },
    { name: 'TypeScript', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Advanced' },
  ]

  // certificate section on skillPage
  certificates: Certificate[] = [
    { title: 'Angular Certification', institution: 'Udemy', date: 'January 2023' },
    { title: 'TypeScript Mastery', institution: 'Coursera', date: 'March 2023' },
    // Add more certificates as needed
  ];

  ngOnInit(): void {
  }

}
