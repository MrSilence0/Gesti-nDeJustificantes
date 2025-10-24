import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerJustificantes } from './ver-justificantes';

describe('VerJustificantes', () => {
  let component: VerJustificantes;
  let fixture: ComponentFixture<VerJustificantes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerJustificantes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerJustificantes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
