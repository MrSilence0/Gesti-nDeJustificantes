import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAsistente } from './menu-asistente';

describe('MenuAsistente', () => {
  let component: MenuAsistente;
  let fixture: ComponentFixture<MenuAsistente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuAsistente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuAsistente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
