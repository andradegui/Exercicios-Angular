import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploNgForComponent } from './exemplo-ng-for.component';

describe('ExemploNgForComponent', () => {
  let component: ExemploNgForComponent;
  let fixture: ComponentFixture<ExemploNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploNgForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
