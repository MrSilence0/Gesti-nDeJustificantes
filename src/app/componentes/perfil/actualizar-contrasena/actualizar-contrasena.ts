import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; // Importamos Router
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'; 
// Asumiendo que has instalado y configurado Bootstrap de la forma tradicional,
// si no, podrías necesitar NgbModal para manejar el modal, pero usaremos JS nativo.

// Declaramos la variable 'bootstrap' para evitar errores de TypeScript.
declare var bootstrap: any;


@Component({
  selector: 'app-actualizar-contrasena',
  standalone: true,
  // Agregamos RouterLink en imports, aunque ya estaba.
  imports: [RouterLink, NgbDropdownModule], 
  templateUrl: './actualizar-contrasena.html',
  styleUrls: ['./actualizar-contrasena.css']
})
export class ActualizarContrasenaComponent {

  // Inyectamos el servicio Router en el constructor
  constructor(private router: Router) { }

  // Función que se llama cuando se hace clic en el botón "Actualizar Contraseña"
  onSubmit(): void {
    const current = (document.getElementById('currentPassword') as HTMLInputElement).value.trim();
    const newPass = (document.getElementById('newPassword') as HTMLInputElement).value.trim();
    const confirm = (document.getElementById('confirmPassword') as HTMLInputElement).value.trim();

    // 1. Lógica de Validación (Similar a tu script JS)
    if (!current || !newPass || !confirm) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    if (newPass !== confirm) {
        alert('Las contraseñas nuevas no coinciden.');
        return;
    }

    // 2. Simulación de envío y éxito (Aquí iría la lógica de API real)
    console.log("Contraseña actualizada con éxito (simulado).");

    // 3. Mostrar el Modal de éxito
    // Usamos el objeto 'bootstrap' declarado globalmente
    const modalElement = document.getElementById('passwordUpdatedModal');
    if (modalElement && typeof bootstrap !== 'undefined') {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
    } else {
        // En caso de que el Modal JS de Bootstrap no funcione, navegamos directamente
        this.router.navigate(['/datosPersonales']);
    }

    // Opcional: Limpiar el formulario
    (document.getElementById('updatePasswordForm') as HTMLFormElement).reset();
  }
}