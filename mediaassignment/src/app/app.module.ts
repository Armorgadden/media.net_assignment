import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routes';
import { CustErrorHandler } from './app.error.handler';

//Components
import { AppComponent } from './app.component';
import { LiveStockListComponent } from './components/live-stock-list/live-stock-list.component';
import { LiveStockSingleItemComponent } from './components/live-stock-single-item/live-stock-single-item.component';

//Services
import { WebsocketService } from './services/websocket.service';
import { LiveStockService } from './services/live-stock.service';


@NgModule({
  declarations: [
    AppComponent,
    LiveStockListComponent,
    LiveStockSingleItemComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    WebsocketService,
    LiveStockService,
    appRoutingProviders,
    { provide: ErrorHandler, useClass: CustErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
