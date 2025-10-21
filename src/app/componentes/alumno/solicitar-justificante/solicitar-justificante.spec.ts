import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarJustificante } from './solicitar-justificante';

describe('SolicitarJustificante', () => {
  let component: SolicitarJustificante;
  let fixture: ComponentFixture<SolicitarJustificante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitarJustificante]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitarJustificante);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
