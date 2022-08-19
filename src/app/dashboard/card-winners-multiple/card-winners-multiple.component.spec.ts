import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWinnersMultipleComponent } from './card-winners-multiple.component';
import { IMultipleWinner, IMultipleWinnerList } from './shared/multiple-winner.model';

describe('CardWinnersMultipleComponent', () => {
  let component: CardWinnersMultipleComponent;
  let fixture: ComponentFixture<CardWinnersMultipleComponent>;

  const data: IMultipleWinner = {
    year: 1986,
    winnerCount: 2
  };

  const winners: IMultipleWinnerList = {} as IMultipleWinnerList;
  winners.years = [data];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardWinnersMultipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWinnersMultipleComponent);
    component = fixture.componentInstance;
    component.winners = winners;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title List Years with multiple winners', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('h5#card-winner-multiple') as HTMLHeadElement;
    expect(title?.textContent).toEqual('List Years with multiple winners');
  });

  it('should render table header', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const th = compiled.querySelectorAll('th');
    expect(th).toBeDefined();
    expect(th.length).toBe(2);
    expect(th[0].textContent.trim()).toEqual('Year');
    expect(th[1].textContent.trim()).toEqual('Win Count');
  });

  it('should render table body', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const td = compiled.querySelectorAll('td');
    expect(td).toBeDefined();
    expect(td.length).toBe(2);
    expect(td[0].textContent.trim()).toEqual(data.year.toString());
    expect(td[1].textContent.trim()).toEqual(data.winnerCount.toString());
  });

});
