import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CardWinnersTopComponent } from './card-winners-top.component';
import { ITopWinner, ITopWinnerList } from './shared/top-winner.model';

describe('CardWinnersTopComponent', () => {
  let component: CardWinnersTopComponent;
  let fixture: ComponentFixture<CardWinnersTopComponent>;

  const data: ITopWinner = {
    name: 'Columbia Pictures',
    winCount: 7
  };

  const winners: ITopWinnerList = {} as ITopWinnerList;
  winners.studios = [data];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardWinnersTopComponent ]      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWinnersTopComponent);
    component = fixture.componentInstance;
    component.winners = winners;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title Top 3 studios with winners', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('h5') as HTMLHeadElement;
    expect(title?.textContent).toEqual('Top 3 studios with winners');
  });

  it('should render table header', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const th = compiled.querySelectorAll('th');
    expect(th).toBeDefined();
    expect(th.length).toBe(2);
    expect(th[0].textContent.trim()).toEqual('Name');
    expect(th[1].textContent.trim()).toEqual('Win Count');
  });

  it('should render table body', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const td = compiled.querySelectorAll('td');
    expect(td).toBeDefined();
    expect(td.length).toBe(2);
    expect(td[0].textContent.trim()).toEqual(data.name);
    expect(td[1].textContent.trim()).toEqual(data.winCount.toString());
  });

});
