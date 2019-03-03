import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { routing, appRoutingProviders } from './app.routes';
import { CustErrorHandler } from './app.custErrorHandler';
import { MomentModule } from 'angular2-moment';

//Components
import { AppComponent } from './app.component';
import { LiveStockListComponent } from './components/live-stock-list/live-stock-list.component';

//Services
import { WebsocketService } from './services/websocket.service';
import { LiveStockService } from './services/live-stock.service';


@NgModule({
  declarations: [
    AppComponent,
    LiveStockListComponent
  ],
  imports: [
    BrowserModule,
    routing,
    MomentModule
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
