import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHolderComponent } from './menu-holder.component';

describe('MenuHolderComponent', () => {
  let component: MenuHolderComponent;
  let fixture: ComponentFixture<MenuHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuHolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
