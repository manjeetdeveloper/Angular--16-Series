import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowayBComponent } from './twoway-b.component';

describe('TwowayBComponent', () => {
  let component: TwowayBComponent;
  let fixture: ComponentFixture<TwowayBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwowayBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwowayBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
