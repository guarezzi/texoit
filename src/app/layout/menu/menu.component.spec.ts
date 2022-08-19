import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render menu Dashboard', () => {
    const fixture = TestBed.createComponent(MenuComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a#menu-dashboard')?.textContent).toContain('Dashboard');
  });

  it('should has link Dashboard', () => {
    const fixture = TestBed.createComponent(MenuComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const dashboardAnchor = compiled.querySelector('a#menu-dashboard') as HTMLAnchorElement;
    expect(dashboardAnchor?.pathname).toEqual('/dashboard');
  });

  it('should render menu List', () => {
    const fixture = TestBed.createComponent(MenuComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a#menu-list')?.textContent).toContain('List');
  });

  it('should has link List', () => {
    const fixture = TestBed.createComponent(MenuComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const dashboardAnchor = compiled.querySelector('a#menu-list') as HTMLAnchorElement;
    expect(dashboardAnchor?.pathname).toEqual('/list');
  });

});
