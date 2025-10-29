import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'; 


@Component({
  selector: 'app-datos-personales',
  standalone: true,

  imports: [RouterLink, NgbDropdownModule], 
  templateUrl: './datos-personales.html',
  styleUrls: ['./datos-personales.css']
})
export class DatosPersonalesComponent {
}