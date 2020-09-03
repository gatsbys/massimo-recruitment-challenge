import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipDetailScreenComponent } from './starship-detail-screen.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StarshipDetailService } from 'src/app/services/starship-detail/starship-detail.service';
import { MOCKED_STARSHIP } from '../../test/mock-store'

describe('StarshipDetailScreenComponent', () => {
  let component: StarshipDetailScreenComponent;
  let fixture: ComponentFixture<StarshipDetailScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [StarshipDetailScreenComponent],
      providers: [
        { provide: StarshipDetailService },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipDetailScreenComponent);
    component = fixture.componentInstance;
    component.starship = MOCKED_STARSHIP;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
