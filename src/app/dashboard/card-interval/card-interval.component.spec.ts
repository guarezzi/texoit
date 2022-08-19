import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIntervalComponent } from './card-interval.component';
import { IIntervalWinner, IIntervalWinnerList } from './shared/interval-winner.model';

describe('CardIntervalComponent', () => {
  let component: CardIntervalComponent;
  let fixture: ComponentFixture<CardIntervalComponent>;

  const max: IIntervalWinner = {
    producer: 'Matthew Vaughn',
    interval: 13,
    previousWin: 2002,
    followingWin: 2015
  };

  const min: IIntervalWinner = {
    producer: 'Joel Silver',
    interval: 1,
    previousWin: 1990,
    followingWin: 1991
  };

  const winners: IIntervalWinnerList = {} as IIntervalWinnerList;
  winners.max = [max];
  winners.min = [min]; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardIntervalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardIntervalComponent);
    component = fixture.componentInstance;
    component.winners = winners;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title Producers with long...', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('h5') as HTMLHeadElement;
    expect(title?.textContent).toEqual('Producers with longest and shortest interval between wins');
  });

  it('should render maximum title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('h4#maximum-title') as HTMLHeadElement;
    expect(title?.textContent).toEqual('Maximum');
  });

  it('should render maximum table header', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const th = compiled.querySelector('#maximum-table').querySelectorAll('th');
    expect(th).toBeDefined();
    expect(th.length).toBe(4);
    expect(th[0].textContent.trim()).toEqual('Producer');
    expect(th[1].textContent.trim()).toEqual('Interval');
    expect(th[2].textContent.trim()).toEqual('Previous Year');
    expect(th[3].textContent.trim()).toEqual('Following Year');
  });

  it('should render maximum table header', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const td = compiled.querySelector('#maximum-table').querySelectorAll('td');
    expect(td).toBeDefined();
    expect(td.length).toBe(4);
    expect(td[0].textContent.trim()).toEqual(max.producer);
    expect(td[1].textContent.trim()).toEqual(max.interval.toString());
    expect(td[2].textContent.trim()).toEqual(max.previousWin.toString());
    expect(td[3].textContent.trim()).toEqual(max.followingWin.toString());
  });

  it('should render minimum title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('h4#minimum-title') as HTMLHeadElement;
    expect(title?.textContent).toEqual('Minimum');
  });

  it('should render minimum table header', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const th = compiled.querySelector('#minimum-table').querySelectorAll('th');
    expect(th).toBeDefined();
    expect(th.length).toBe(4);
    expect(th[0].textContent.trim()).toEqual('Producer');
    expect(th[1].textContent.trim()).toEqual('Interval');
    expect(th[2].textContent.trim()).toEqual('Previous Year');
    expect(th[3].textContent.trim()).toEqual('Following Year');
  });

  it('should render minimum table header', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const td = compiled.querySelector('#minimum-table').querySelectorAll('td');
    expect(td).toBeDefined();
    expect(td.length).toBe(4);
    expect(td[0].textContent.trim()).toEqual(min.producer);
    expect(td[1].textContent.trim()).toEqual(min.interval.toString());
    expect(td[2].textContent.trim()).toEqual(min.previousWin.toString());
    expect(td[3].textContent.trim()).toEqual(min.followingWin.toString());
  });

});
