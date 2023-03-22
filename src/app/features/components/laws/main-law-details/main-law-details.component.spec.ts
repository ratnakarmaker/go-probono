import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLawDetailsComponent } from './main-law-details.component';

describe('MainLawDetailsComponent', () => {
  let component: MainLawDetailsComponent;
  let fixture: ComponentFixture<MainLawDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLawDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLawDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
