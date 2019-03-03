import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveStockSingleItemComponent } from './live-stock-single-item.component';

describe('LiveStockSingleItemComponent', () => {
  let component: LiveStockSingleItemComponent;
  let fixture: ComponentFixture<LiveStockSingleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveStockSingleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveStockSingleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
