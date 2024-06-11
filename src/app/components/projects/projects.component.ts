import { Component } from '@angular/core';
import { projects } from '../models/Project';
import { Tag } from '../models/Tag';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: projects[] = [
    {
      id: 1,
      name: "Project Alpha",
      summary: "A groundbreaking AI project",
      description: "This project aims to develop an AI system capable of natural language understanding.",
      projectLink: "https://example.com/project-alpha",
      pictures: ["alpha1.jpg", "alpha2.jpg"],
      tag: [Tag.ANGULAR, Tag.ASPNET, Tag.CSHARP]
    },
    {
      id: 2,
      name: "Project Beta",
      summary: "A blockchain-based financial solution",
      description: "This project focuses on creating a secure and transparent blockchain financial system.",
      projectLink: "https://example.com/project-beta",
      pictures: ["beta1.jpg", "beta2.jpg"],
      tag: [Tag.ANGULAR, Tag.ASPNET, Tag.CSHARP]
    },
    {
      id: 3,
      name: "Project Gamma",
      summary: "A revolutionary health tech innovation",
      description: "The project is developing a wearable device that monitors vital signs in real-time.",
      projectLink: "https://example.com/project-gamma",
      pictures: ["gamma1.jpg", "gamma2.jpg"],
      tag: [Tag.ANGULAR, Tag.ASPNET, Tag.CSHARP]
    },
    {
      id: 4,
      name: "Project Delta",
      summary: "An eco-friendly energy project",
      description: "This project is working on a new type of renewable energy source.",
      projectLink: "https://example.com/project-delta",
      pictures: ["delta1.jpg", "delta2.jpg"],
      tag: [Tag.ANGULAR, Tag.ASPNET, Tag.CSHARP]
    },
    {
      id: 5,
      name: "Project Epsilon",
      summary: "An innovative education platform",
      description: "The project aims to create an online learning platform with interactive content.",
      projectLink: "https://example.com/project-epsilon",
      pictures: ["epsilon1.jpg", "epsilon2.jpg"],
      tag: [Tag.ANGULAR, Tag.ASPNET, Tag.CSHARP]
    },
    {
      id: 6,
      name: "Project Zeta",
      summary: "A new social media application",
      description: "This project is developing a social media app with unique features for enhanced connectivity.",
      projectLink: "https://example.com/project-zeta",
      pictures: ["zeta1.jpg", "zeta2.jpg"],
      tag: [Tag.ANGULAR, Tag.ASPNET, Tag.CSHARP]
    },
    {
      id: 7,
      name: "Project Eta",
      summary: "A smart home automation system",
      description: "The project focuses on creating a system that integrates all smart home devices.",
      projectLink: "https://example.com/project-eta",
      pictures: ["eta1.jpg", "eta2.jpg"],
      tag: [Tag.ANGULAR, Tag.ASPNET, Tag.CSHARP]
    },
    {
      id: 8,
      name: "Project Theta",
      summary: "An advanced robotics project",
      description: "This project is developing a versatile robotic assistant for home and office use.",
      projectLink: "https://example.com/project-theta",
      pictures: ["theta1.jpg", "theta2.jpg"],
      tag: [Tag.ANGULAR, Tag.ASPNET, Tag.CSHARP]
    },
    {
      id: 9,
      name: "Project Iota",
      summary: "A next-gen transportation system",
      description: "The project aims to develop a high-speed, eco-friendly public transportation system.",
      projectLink: "https://example.com/project-iota",
      pictures: ["iota1.jpg", "iota2.jpg"],
      tag: [Tag.ANGULAR, Tag.ASPNET, Tag.CSHARP]
  
    }
  ]
   
}