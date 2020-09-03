import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsScreenComponent } from './starships-screen.component';
import { StarwarsDataProviderService } from 'src/app/services/data-providers/starwars/starwars-data-provider.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StarshipsScreenComponent', () => {
  let component: StarshipsScreenComponent;
  let fixture: ComponentFixture<StarshipsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [StarshipsScreenComponent],
      providers: [
        { provide: StarwarsDataProviderService }
      ]
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
