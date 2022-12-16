import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from '../../services/project-data.service';
import { ProjectType } from '../../types/projects';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {

  projects: ProjectType[];

  constructor(projetDataService: ProjectDataService) {
    this.projects = projetDataService.getProjects();
  }

  ngOnInit(): void {
  }

}
