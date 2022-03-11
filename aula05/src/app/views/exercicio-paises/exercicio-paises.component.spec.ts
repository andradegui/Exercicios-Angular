import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioPaisesComponent } from './exercicio-paises.component';

describe('ExercicioPaisesComponent', () => {
  let component: ExercicioPaisesComponent;
  let fixture: ComponentFixture<ExercicioPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioPaisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
