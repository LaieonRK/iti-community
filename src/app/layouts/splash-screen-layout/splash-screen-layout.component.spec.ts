import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashScreenLayoutComponent } from './splash-screen-layout.component';

describe('SplashScreenLayoutComponent', () => {
  let component: SplashScreenLayoutComponent;
  let fixture: ComponentFixture<SplashScreenLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplashScreenLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashScreenLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
