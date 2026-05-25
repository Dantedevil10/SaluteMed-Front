import { Component } from '@angular/core';
import { Headeruser } from '../../components/headeruser/headeruser';
import { PatientForm } from '../../components/patient-form/patient-form';

@Component({
  selector: 'app-frontdesk',
  imports: [Headeruser,PatientForm],
  templateUrl: './frontdesk.html',
  styleUrl: './frontdesk.sass',
})
export class Frontdesk {}
