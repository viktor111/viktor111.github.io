import { Injectable } from '@angular/core';
import { PersonalData, WorkExperiance } from '../types/personal-data';
import personalDataFile from "../data/personal-data.json";

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {

  constructor() { }

  getPersonalData(): PersonalData{
    const personalData = personalDataFile as PersonalData; 
    return personalData;
  }
}
