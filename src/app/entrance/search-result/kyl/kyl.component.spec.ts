import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KylComponent } from './kyl.component';

describe('KylComponent', () => {
  let component: KylComponent;
  let fixture: ComponentFixture<KylComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KylComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KylComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
