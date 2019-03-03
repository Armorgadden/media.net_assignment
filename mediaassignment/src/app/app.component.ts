import { Component, ChangeDetectorRef } from '@angular/core';
import { LiveStockService } from './services/live-stock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(public liveStockService: LiveStockService, public ref: ChangeDetectorRef) {
    this.initializeStockFeed();
  }

  initializeStockFeed() {
    this.liveStockService.data.subscribe(data => {
      let formattedData = data.map(stockArray => {
        return {
          ticker: stockArray[0],
          price: stockArray[1],
          change: 0,
          time: Date.now()
        };
      });

      for(let i = 0; i < formattedData.length; i++) {
        let index: any = this.checkIfDataPresentInStock(formattedData[i].ticker);
        if(index >= 0) {
          this.liveStockService.stockData[index].change = this.getChangeValue(this.liveStockService.stockData[index].price, formattedData[i].price, this.liveStockService.stockData[index].change);
          this.liveStockService.stockData[index].price = formattedData[i].price;
          this.liveStockService.stockData[index].time = Date.now();
        } else {
          this.liveStockService.stockData.push(formattedData[i]);
        }
      }
      console.log(this.liveStockService.stockData);
      this.ref.detectChanges();
    });
  }

  checkIfDataPresentInStock(data) {
    for (let i = 0; i < this.liveStockService.stockData.length; i++) {
      if (this.liveStockService.stockData[i].ticker === data) {
        return i;
      }
    }
    return -1;
  }

  getChangeValue(oldPrice, newPrice, change) {
    if(oldPrice > newPrice) {
      return -1;
    } else if(newPrice > oldPrice) {
      return 1;
    } else {
      return change? change: 0;
    }
  }
}
