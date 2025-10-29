import { Routes } from '@angular/router';

import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion';
import { HomeComponent } from './componentes/home/home';
import { LoginComponent } from './componentes/login/login';
import { ActualizarContrasenaComponent } from './componentes/perfil/actualizar-contrasena/actualizar-contrasena';
import { DatosPersonalesComponent } from './componentes/perfil/datos-personales/datos-personales';
import { VistaGeneralComponent } from './componentes/perfil/vista-general/vista-general';
import { ActualizarJustificanteComponent } from './componentes/alumno/actualizar-justificante/actualizar-justificante';
import { CancelarJustificantesComponent } from './componentes/alumno/cancelar-justificantes/cancelar-justificantes';
import { MenuAlumnoComponent } from './componentes/alumno/menu-alumno/menu-alumno';
import { SolicitarJustificanteComponent } from './componentes/alumno/solicitar-justificante/solicitar-justificante';
import { VerJustificantesComponent } from './componentes/alumno/ver-justificantes/ver-justificantes';
import { MenuAsistenteComponent } from './componentes/asistente/menu-asistente/menu-asistente';
import { VerSolicitudesComponent } from './componentes/asistente/ver-solicitudes/ver-solicitudes';
import { AprobarRechazarSolicitudesComponent } from './componentes/directora/aprobar-rechazar-solicitudes/aprobar-rechazar-solicitudes';
import { EstatusTutorComponent } from './componentes/directora/estatus-tutor/estatus-tutor';
import { MenuDirectoraComponent } from './componentes/directora/menu-directora/menu-directora';
import { VerJustificantesGeneralComponent } from './componentes/directora/ver-justificantes-general/ver-justificantes-general';
import { ImagesComponent } from './componentes/images/images';
import { AprobarRechazarSolicitudesTutorComponent } from './componentes/tutor/aprobar-rechazar-solicitudes/aprobar-rechazar-solicitudes';
import { MenuTutorComponent } from './componentes/tutor/menu-tutor/menu-tutor';
import { VerJustificantesTutorComponent } from './componentes/tutor/ver-justificantes/ver-justificantes';

export const routes: Routes = [

    { path: '',  component: InicioSesionComponent, pathMatch: 'full' },
    { path: 'inicioSesion', component: InicioSesionComponent},
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'actualizarContrasena', component: ActualizarContrasenaComponent },
    { path: 'datosPersonales', component: DatosPersonalesComponent },
    { path: 'vistaGeneral', component: VistaGeneralComponent },
    { path: 'actualizarJustificante', component: ActualizarJustificanteComponent },
    { path: 'cancelarJustificantes', component: CancelarJustificantesComponent },
    { path: 'menuAlumno', component: MenuAlumnoComponent },
    { path: 'solicitarJustificante', component: SolicitarJustificanteComponent },
    { path: 'verJustificantes', component: VerJustificantesComponent },
    { path: 'menuAsistente', component: MenuAsistenteComponent },
    { path: 'verSolicitudes', component: VerSolicitudesComponent },
    { path: 'aprobarRechazarSolicitudes', component: AprobarRechazarSolicitudesComponent },
    { path: 'estatusTutor', component: EstatusTutorComponent },
    { path: 'menuDirectora', component: MenuDirectoraComponent },
    { path: 'verJustificantesGeneral', component: VerJustificantesGeneralComponent },
    { path: 'images', component: ImagesComponent },
    { path: 'aprobarRechazarSolicitudesTutor', component: AprobarRechazarSolicitudesTutorComponent },
    { path: 'menuTutor', component: MenuTutorComponent },
    { path: 'verJustificantesTutor', component: VerJustificantesTutorComponent }
];
