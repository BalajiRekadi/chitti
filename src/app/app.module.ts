import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/modules/material.module';
import { ChitlistComponent } from './components/chitlist/chitlist.component';
import { ChitComponent } from './components/chit/chit.component';
import { DetailsComponent } from './components/chit/details/details.component';
import { RecordsComponent } from './components/chit/records/records.component';
import { TextfieldComponent } from './shared/components/textfield/textfield.component';
import { RecordFormComponent } from './components/record-form/record-form.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './core/components/modal/modal.component';
import { ChitFormComponent } from './components/chit-form/chit-form.component';
import { chitReducer } from './store/chits.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ChitsEffectService } from './store/chits.effect';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ToolbarComponent,
    ChitlistComponent,
    ChitComponent,
    DetailsComponent,
    RecordsComponent,
    TextfieldComponent,
    RecordFormComponent,
    ModalComponent,
    ChitFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      chit: chitReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    EffectsModule.forRoot([ChitsEffectService]),
  ],
  providers: [MatDialog],
  bootstrap: [AppComponent],
})
export class AppModule {}
