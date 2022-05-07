import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCourierComponent } from './update-courier.component';

describe('UpdateCourierComponent', () => {
  let component: UpdateCourierComponent;
  let fixture: ComponentFixture<UpdateCourierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCourierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
