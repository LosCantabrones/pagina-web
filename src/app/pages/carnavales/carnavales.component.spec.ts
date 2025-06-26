import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnavalesComponent } from './carnavales.component';

describe('CarnavalesComponent', () => {
  let component: CarnavalesComponent;
  let fixture: ComponentFixture<CarnavalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarnavalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarnavalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
