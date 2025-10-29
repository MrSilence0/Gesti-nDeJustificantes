import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu-alumno',
  standalone: true,
  imports: [RouterLink, NgbDropdownModule],
  templateUrl: './menu-alumno.html',
  styleUrls: ['./menu-alumno.css']
})
export class MenuAlumnoComponent {

}
