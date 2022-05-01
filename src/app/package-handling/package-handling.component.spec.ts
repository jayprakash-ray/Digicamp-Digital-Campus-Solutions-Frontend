import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageHandlingComponent } from './package-handling.component';

describe('PackageHandlingComponent', () => {
  let component: PackageHandlingComponent;
  let fixture: ComponentFixture<PackageHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageHandlingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
