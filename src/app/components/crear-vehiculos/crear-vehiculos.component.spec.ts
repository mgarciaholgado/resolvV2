import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearVehiculosComponent } from './crear-vehiculos.component';

describe('CrearVehiculosComponent', () => {
  let component: CrearVehiculosComponent;
  let fixture: ComponentFixture<CrearVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearVehiculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
