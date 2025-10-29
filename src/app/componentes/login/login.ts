import { Component } from '@angular/core';
import { Router} from '@angular/router'; 
import { FormsModule, NgForm } from '@angular/forms'; 
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'; 

interface RegistrationData {
  noControl: string;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  correo: string;
  contrasena: string;
  confirmarContrasena: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgbDropdownModule, FormsModule], 
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  formData: RegistrationData = {
    noControl: '',
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    correo: '',
    contrasena: '',
    confirmarContrasena: ''
  };

  showError: boolean = false;

  constructor(private router: Router) { }

  onRegister(form: NgForm): void {
    this.showError = false; 

 
    if (form.invalid) {
      this.showError = true;
      return;
    }

    if (this.formData.contrasena !== this.formData.confirmarContrasena) {
      this.showError = true;
      alert('Las contraseñas no coinciden.');
      return;
    }

    console.log('Datos de registro válidos:', this.formData);
    
    this.router.navigate(['/inicioSesion']);
  }
}