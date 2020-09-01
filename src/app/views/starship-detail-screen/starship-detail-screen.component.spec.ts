import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipDetailScreenComponent } from './starship-detail-screen.component';

describe('StarshipDetailScreenComponent', () => {
  let component: StarshipDetailScreenComponent;
  let fixture: ComponentFixture<StarshipDetailScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipDetailScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipDetailScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
