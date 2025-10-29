import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgbDropdownModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

}