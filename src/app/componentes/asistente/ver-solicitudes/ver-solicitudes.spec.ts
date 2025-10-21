import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerSolicitudes } from './ver-solicitudes';

describe('VerSolicitudes', () => {
  let component: VerSolicitudes;
  let fixture: ComponentFixture<VerSolicitudes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerSolicitudes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerSolicitudes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
