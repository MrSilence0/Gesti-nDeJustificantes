import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatusTutor } from './estatus-tutor';

describe('EstatusTutor', () => {
  let component: EstatusTutor;
  let fixture: ComponentFixture<EstatusTutor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstatusTutor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstatusTutor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
