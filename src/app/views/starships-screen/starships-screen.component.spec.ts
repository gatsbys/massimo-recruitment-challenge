import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsScreenComponent } from './starships-screen.component';

describe('StarshipsScreenComponent', () => {
  let component: StarshipsScreenComponent;
  let fixture: ComponentFixture<StarshipsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
