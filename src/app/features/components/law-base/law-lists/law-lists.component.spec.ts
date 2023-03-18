import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawListsComponent } from './law-lists.component';

describe('LawListsComponent', () => {
  let component: LawListsComponent;
  let fixture: ComponentFixture<LawListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
