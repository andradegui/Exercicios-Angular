import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploNgSwitchComponent } from './exemplo-ng-switch.component';

describe('ExemploNgSwitchComponent', () => {
  let component: ExemploNgSwitchComponent;
  let fixture: ComponentFixture<ExemploNgSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploNgSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
