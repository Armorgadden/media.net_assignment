import { Component, OnInit } from '@angular/core';
import { LiveStockService } from '../../services/live-stock.service';

@Component({
  selector: 'app-live-stock-list',
  templateUrl: './live-stock-list.component.html',
  styleUrls: ['./live-stock-list.component.less']
})
export class LiveStockListComponent implements OnInit {

  constructor(public liveStockService: LiveStockService) { }

  ngOnInit() {
  }

}
