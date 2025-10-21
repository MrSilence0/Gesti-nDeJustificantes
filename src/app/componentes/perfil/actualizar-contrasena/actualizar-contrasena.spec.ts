import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarContrasena } from './actualizar-contrasena';

describe('ActualizarContrasena', () => {
  let component: ActualizarContrasena;
  let fixture: ComponentFixture<ActualizarContrasena>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarContrasena]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarContrasena);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
