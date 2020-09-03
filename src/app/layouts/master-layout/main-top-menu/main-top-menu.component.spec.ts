import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTopMenuComponent } from './main-top-menu.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LayoutService } from 'src/app/services/layout/layout.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MainTopMenuComponent', () => {
  let component: MainTopMenuComponent;
  let fixture: ComponentFixture<MainTopMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [MainTopMenuComponent],
      providers: [
        { provide: AuthService },
        { provide: LayoutService },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
