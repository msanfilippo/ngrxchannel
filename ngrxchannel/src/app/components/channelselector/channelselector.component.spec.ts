import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelselectorComponent } from './channelselector.component';

describe('ChannelselectorComponent', () => {
  let component: ChannelselectorComponent;
  let fixture: ComponentFixture<ChannelselectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelselectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
