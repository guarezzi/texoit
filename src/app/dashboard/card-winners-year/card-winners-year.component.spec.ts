import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { IMovieList } from 'src/app/list/shared/movie-list.model';
import { MovieService } from 'src/app/shared/movie.service';

import { CardWinnersYearComponent } from './card-winners-year.component';

describe('CardWinnersYearComponent', () => {
  let component: CardWinnersYearComponent;
  let fixture: ComponentFixture<CardWinnersYearComponent>;

  const data: IMovieList[] = [
    {
      id: 1,
      producers: [],
      studios: [],
      title: 'Test',
      winner: true,
      year: 1990
    }
  ];

  const movieServiceSpy = jasmine.createSpyObj('movieServiceSpy', ['getWinnerByYear']);
  movieServiceSpy.getWinnerByYear.and.returnValue(of(data));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardWinnersYearComponent ],
      imports: [CommonModule, FormsModule, HttpClientModule],
      providers: [
        { provide: MovieService, useValue: movieServiceSpy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWinnersYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title List movie winners by year', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('h5') as HTMLHeadElement;
    expect(title?.textContent).toEqual('List movie winners by year');
  });

  it('should button disable', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button') as HTMLHeadElement;
    expect(button.hasAttribute('disabled')).toBeTruthy();
  });

  it('should button disabled when year is undefined', () => {
    component.year = undefined;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button') as HTMLHeadElement;
    expect(button.hasAttribute('disabled')).toBeTruthy();
  });

  it('should button disabled when year is null', () => {
    component.year = null;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button') as HTMLHeadElement;
    expect(button.hasAttribute('disabled')).toBeTruthy();
  });

  it('should button enabled when year is defined', () => {
    component.year = 1234;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button') as HTMLHeadElement;
    expect(button.hasAttribute('disabled')).toBeFalsy();
  });

  it('should render input value when year is defined', fakeAsync(() => {
    component.year = 1234;
    fixture.detectChanges();
    tick();
    const compiled = fixture.nativeElement as HTMLElement;
    const input = compiled.querySelector('input') as HTMLInputElement;
    expect(input.value).toEqual(component.year.toString());
  }));

  it('should search data on button click', () => {
    component.year = 1234;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button') as HTMLButtonElement;
    button.click();
    expect(movieServiceSpy.getWinnerByYear.calls.count()).toBe(1);
    expect(component.result).toEqual(data);
  });

  it('should render table header', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const th = compiled.querySelectorAll('th');
    expect(th).toBeDefined();
    expect(th.length).toBe(3);
    expect(th[0].textContent.trim()).toEqual('Id');
    expect(th[1].textContent.trim()).toEqual('Year');
    expect(th[2].textContent.trim()).toEqual('Title');
  });

  it('should render table body', () => {
    component.result = data;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const td = compiled.querySelectorAll('td');
    expect(td).toBeDefined();
    expect(td.length).toBe(3);
    expect(td[0].textContent.trim()).toEqual(data[0].id.toString());
    expect(td[1].textContent.trim()).toEqual(data[0].year.toString());
    expect(td[2].textContent.trim()).toEqual(data[0].title);
  });

});
