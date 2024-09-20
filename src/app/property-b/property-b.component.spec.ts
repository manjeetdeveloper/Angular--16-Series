import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBComponent } from './property-b.component';

describe('PropertyBComponent', () => {
  let component: PropertyBComponent;
  let fixture: ComponentFixture<PropertyBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertyBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
