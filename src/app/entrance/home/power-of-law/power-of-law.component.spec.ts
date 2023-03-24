import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerOfLawComponent } from './power-of-law.component';

describe('PowerOfLawComponent', () => {
  let component: PowerOfLawComponent;
  let fixture: ComponentFixture<PowerOfLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerOfLawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerOfLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
