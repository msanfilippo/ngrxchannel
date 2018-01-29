import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChannelviewComponent } from './components/channelview/channelview.component';
import { ChannelselectorComponent } from './components/channelselector/channelselector.component';
import {uiState} from "./store/reducers/uiStateReducer";
import {storeData} from "./store/reducers/uiStoreDataReducer";
import {INITIAL_APPLICATION_STATE} from "./store/application-state";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {LoadChannelsEffectService} from "./store/effects/load-channels-effect-service";
import {ChannelService} from "./services/channel.service";
import {HttpModule} from "@angular/http";
import { ChannelListComponent } from './components/channel-list/channel-list.component';
import { ChannelMessagesComponent } from './components/channel-messages/channel-messages.component';


const reducers = {
  uiState,
  storeData
};


@NgModule({
  declarations: [
    AppComponent,
    ChannelviewComponent,
    ChannelselectorComponent,
    ChannelListComponent,
    ChannelMessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.forRoot(reducers, {initialState: INITIAL_APPLICATION_STATE}),
    EffectsModule.forRoot([LoadChannelsEffectService])
  ],
  providers: [ChannelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
