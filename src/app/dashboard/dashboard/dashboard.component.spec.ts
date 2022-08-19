import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CardIntervalComponent } from '../card-interval/card-interval.component';
import { IIntervalWinnerList } from '../card-interval/shared/interval-winner.model';
import { CardWinnersMultipleComponent } from '../card-winners-multiple/card-winners-multiple.component';
import { IMultipleWinnerList } from '../card-winners-multiple/shared/multiple-winner.model';
import { CardWinnersTopComponent } from '../card-winners-top/card-winners-top.component';
import { ITopWinnerList } from '../card-winners-top/shared/top-winner.model';
import { CardWinnersYearComponent } from '../card-winners-year/card-winners-year.component';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  const multipleWinners: IMultipleWinnerList = {} as IMultipleWinnerList;
  multipleWinners.years = [];

  const topWinners: ITopWinnerList = {} as ITopWinnerList;
  topWinners.studios = [];

  const IntervalWinners: IIntervalWinnerList = {} as IIntervalWinnerList;
  IntervalWinners.max = [];
  IntervalWinners.min = [];

  const snapshot = {
    snapshot: {
      data: {
        multipleWinners, topWinners, IntervalWinners
      }
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent, CardIntervalComponent, CardWinnersMultipleComponent, CardWinnersTopComponent, CardWinnersYearComponent ],
      imports: [CommonModule, FormsModule, RouterTestingModule, HttpClientModule ],
      providers: [
        { provide: ActivatedRoute, useValue: snapshot }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
