import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobarRechazarSolicitudes } from './aprobar-rechazar-solicitudes';

describe('AprobarRechazarSolicitudes', () => {
  let component: AprobarRechazarSolicitudes;
  let fixture: ComponentFixture<AprobarRechazarSolicitudes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AprobarRechazarSolicitudes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprobarRechazarSolicitudes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
