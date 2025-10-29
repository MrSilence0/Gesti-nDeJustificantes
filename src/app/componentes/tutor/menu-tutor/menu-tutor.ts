import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu-tutor',
  standalone: true,
  imports: [RouterLink, NgbDropdownModule],
  templateUrl: './menu-tutor.html',
  styleUrls: ['./menu-tutor.css']
})
export class MenuTutorComponent {

}
