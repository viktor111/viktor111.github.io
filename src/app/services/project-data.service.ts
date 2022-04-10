import { Injectable } from '@angular/core';
import projectsFile from '../data/projects.json';
import { ProjectsType, ProjectType } from '../types/projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectDataService {
  constructor() {
    
  }

  getProjects() : ProjectType[]{
    let projects = projectsFile as ProjectsType;
    let newProjects: ProjectType[] = [];

    for (let i = 0; i < projects.projects.length; i++) {
      let project: ProjectType = projects.projects[i];
      
      if(project.websiteLink === ""){
        project.hasWebLink = false;
      }
      else{
        project.hasWebLink = true;
      }
      newProjects.push(project);
    }

    return newProjects;
  }
}
