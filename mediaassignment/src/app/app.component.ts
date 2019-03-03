import { Component, ChangeDetectorRef } from '@angular/core';
import { LiveStockService } from './services/live-stock.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';

 constructor(private liveStockService: LiveStockService, public ref: ChangeDetectorRef) {
    liveStockService.data.subscribe(data => {
      liveStockService.oldStockData = liveStockService.stockData;
      liveStockService.stockData = data;
      ref.detectChanges();
      console.log("Response from websocket: " + liveStockService.oldStockData);
      console.log("Response from websocket: " + liveStockService.stockData);
    });
  }
}
