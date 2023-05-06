import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorialLawComponent } from './factorial-law.component';

describe('FactorialLawComponent', () => {
  let component: FactorialLawComponent;
  let fixture: ComponentFixture<FactorialLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactorialLawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactorialLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
