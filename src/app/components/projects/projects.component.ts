import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    { title: 'Project 1', description: 'Description of Project 1' },
    { title: 'Project 2', description: 'Description of Project 2' },
    { title: 'Project 3', description: 'Description of Project 3' },
    { title: 'Project 4', description: 'Description of Project 4' },
    { title: 'Project 5', description: 'Description of Project 5' },
    { title: 'Project 6', description: 'Description of Project 6' },
  ];
}
