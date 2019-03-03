import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveStockListComponent } from './live-stock-list.component';

describe('LiveStockListComponent', () => {
  let component: LiveStockListComponent;
  let fixture: ComponentFixture<LiveStockListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveStockListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveStockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
