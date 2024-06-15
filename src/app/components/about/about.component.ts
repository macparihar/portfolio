import { Component, OnInit } from '@angular/core';

interface Education {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
}

interface WorkExperience {
  company: string;
  role: string;
  responsibilities: string[];
  startDate: string;
  endDate: string;
}

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

  // education on about page
  education: Education[] = [
    {
      institution: 'Grant MacEwan University ',
      degree: 'Diploma in computer Science',
      fieldOfStudy: 'Website Development',
      startDate: 'January 2024',
      endDate: 'December 2024'
    },
    {
      institution: 'Punjab University',
      degree: 'Bachelor of Science',
      fieldOfStudy: 'Computer Science',
      startDate: 'March 2019',
      endDate: 'May 2022'
    }
  ];
  

  // work on about page
  workExperience: WorkExperience[] = [
    {
      company: 'Tech Solutions Inc.',
      role: 'Software Developer',
      responsibilities: [
        'Developed web applications using Angular and TypeScript',
        'Collaborated with cross-functional teams to define project requirements',
        'Maintained and improved existing codebase'
      ],
      startDate: 'July 2017',
      endDate: 'December 2019'
    },
    {
      company: 'Innovative Tech Corp.',
      role: 'Senior Software Engineer',
      responsibilities: [
        'Led a team of developers in building scalable web applications',
        'Designed and implemented new features based on user feedback',
        'Mentored junior developers'
      ],
      startDate: 'January 2020',
      endDate: 'Present'
    }
  ];



  ngOnInit(): void {
  }

}