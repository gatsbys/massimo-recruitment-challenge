import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterScreenComponent } from './register-screen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LayoutService } from 'src/app/services/layout/layout.service';
import { MaterialModule } from 'src/app/kernel/material-store/material-store.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


describe('RegisterScreenComponent', () => {
  let component: RegisterScreenComponent;
  let fixture: ComponentFixture<RegisterScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MaterialModule,
        NoopAnimationsModule
      ],
      declarations: [RegisterScreenComponent],
      providers: [
        { provide: AuthService },
        { provide: LayoutService },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
