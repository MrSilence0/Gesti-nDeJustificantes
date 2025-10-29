import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'; 

declare var bootstrap: any; 

interface UserData {
    fullName: string;
    email: string;
    pais: string;
    ciudad: string;
    zonaHoraria: string;
    primerAcceso: string;
    ultimoAcceso: string;
}

@Component({
    selector: 'app-vista-general',
    standalone: true,
    // Router y NgbDropdownModule importados para la funcionalidad completa del template
    imports: [RouterLink, CommonModule, NgbDropdownModule], 
    templateUrl: './vista-general.html',
    styleUrls: ['./vista-general.css']
})
export class VistaGeneralComponent implements OnInit, AfterViewInit {

    userName: string = 'Profesor UTNG'; 
    
    userData: UserData = {
        fullName: 'Prof. Juan Pérez',
        email: 'juan.perez@utng.edu.mx',
        pais: 'México',
        ciudad: 'Dolores Hidalgo, Guanajuato',
        zonaHoraria: 'México City',
        primerAcceso: 'martes, 4 de marzo de 2025, 08:08 (233 días 5 horas)',
        ultimoAcceso: 'jueves, 23 de octubre de 2025, 13:38 (hace 4 segundos)'
    };

    // ✅ Inyectamos el servicio Router en el constructor para la navegación
    constructor(private elementRef: ElementRef, private router: Router) {}

    ngOnInit(): void {
        // Lógica de inicialización de datos
    }

    /**
     * Método para manejar la navegación programática al formulario de edición.
     */
    navegarADatosPersonales(): void {
        // Asegúrate de que '/datosPersonales' esté configurada en app.routes.ts
        this.router.navigate(['/datosPersonales']);
    }

    /**
     * Inicializa los dropdowns de Bootstrap 5 (si se usa Bootstrap JS en lugar de ng-bootstrap).
     * Se mantiene la lógica que tenías por si es necesaria.
     */
    ngAfterViewInit(): void {
        const dropdownElements = this.elementRef.nativeElement.querySelectorAll('[data-bs-toggle="dropdown"]');
        
        dropdownElements.forEach((element: HTMLElement) => {
            if (typeof bootstrap !== 'undefined' && bootstrap.Dropdown) {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                new bootstrap.Dropdown(element);
            } else {
                // console.warn("Bootstrap JS no está disponible para inicializar los dropdowns.");
            }
        });
    }

    getCuatrimestreActual(): string {
        return 'Enero - Abril 2025';
    }
}