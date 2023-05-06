import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvocateDetailsComponent } from './advocate-details.component';

describe('AdvocateDetailsComponent', () => {
  let component: AdvocateDetailsComponent;
  let fixture: ComponentFixture<AdvocateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvocateDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvocateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
