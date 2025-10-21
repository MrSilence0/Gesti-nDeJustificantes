import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTutor } from './menu-tutor';

describe('MenuTutor', () => {
  let component: MenuTutor;
  let fixture: ComponentFixture<MenuTutor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuTutor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuTutor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
