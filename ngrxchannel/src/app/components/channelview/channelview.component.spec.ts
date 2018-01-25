import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelviewComponent } from './channelview.component';

describe('ChannelviewComponent', () => {
  let component: ChannelviewComponent;
  let fixture: ComponentFixture<ChannelviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
