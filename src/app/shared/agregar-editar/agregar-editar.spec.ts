import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditar } from './agregar-editar';

describe('AgregarEditar', () => {
  let component: AgregarEditar;
  let fixture: ComponentFixture<AgregarEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarEditar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
