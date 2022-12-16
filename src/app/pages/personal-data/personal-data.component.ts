import { Component, OnInit } from '@angular/core';
import { PersonalDataService } from '../../services/personal-data.service';
import { PersonalData, WorkExperiance } from '../../types/personal-data';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css'],
})
export class PersonalDataComponent {
  personalData: PersonalData;

  constructor(personalDataService: PersonalDataService) {
    this.personalData = personalDataService.getPersonalData();
  }
}
