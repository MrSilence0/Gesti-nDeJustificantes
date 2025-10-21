import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarJustificante } from './actualizar-justificante';

describe('ActualizarJustificante', () => {
  let component: ActualizarJustificante;
  let fixture: ComponentFixture<ActualizarJustificante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarJustificante]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarJustificante);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
