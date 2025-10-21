import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDirectora } from './menu-directora';

describe('MenuDirectora', () => {
  let component: MenuDirectora;
  let fixture: ComponentFixture<MenuDirectora>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuDirectora]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDirectora);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
