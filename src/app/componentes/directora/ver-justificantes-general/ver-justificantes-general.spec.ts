import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerJustificantesGeneral } from './ver-justificantes-general';

describe('VerJustificantesGeneral', () => {
  let component: VerJustificantesGeneral;
  let fixture: ComponentFixture<VerJustificantesGeneral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerJustificantesGeneral]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerJustificantesGeneral);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
