import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLawsComponent } from './main-laws.component';

describe('MainLawsComponent', () => {
  let component: MainLawsComponent;
  let fixture: ComponentFixture<MainLawsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLawsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
