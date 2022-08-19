import { Component, Input, OnInit } from '@angular/core';
import { IMultipleWinnerList } from './shared/multiple-winner.model';

@Component({
  selector: 'app-card-winners-multiple',
  templateUrl: './card-winners-multiple.component.html',
  styleUrls: ['./card-winners-multiple.component.css']
})
export class CardWinnersMultipleComponent implements OnInit {

  @Input() winners: IMultipleWinnerList;
  
  constructor() { }

  ngOnInit(): void {
  }

}
