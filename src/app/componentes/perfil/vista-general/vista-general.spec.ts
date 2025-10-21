import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaGeneral } from './vista-general';

describe('VistaGeneral', () => {
  let component: VistaGeneral;
  let fixture: ComponentFixture<VistaGeneral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaGeneral]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaGeneral);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
