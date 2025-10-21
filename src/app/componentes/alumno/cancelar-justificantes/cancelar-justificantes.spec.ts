import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarJustificantes } from './cancelar-justificantes';

describe('CancelarJustificantes', () => {
  let component: CancelarJustificantes;
  let fixture: ComponentFixture<CancelarJustificantes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelarJustificantes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelarJustificantes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
