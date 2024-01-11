import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  providers: [MatDialog],
  bootstrap: [AppComponent],
})
export class AppModule {}
