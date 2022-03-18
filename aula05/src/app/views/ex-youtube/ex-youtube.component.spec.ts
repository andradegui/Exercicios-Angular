import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExYoutubeComponent } from './ex-youtube.component';

describe('ExYoutubeComponent', () => {
  let component: ExYoutubeComponent;
  let fixture: ComponentFixture<ExYoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExYoutubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
