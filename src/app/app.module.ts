import { ModalModule } from './shared/components/modal/modal.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@Angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { YesNoButtonGroupModule } from './shared/components/yes-no-button-group/yes-no-button-group.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisabledControlModule } from './shared/directives/disable-control/disable-control.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    YesNoButtonGroupModule,
    ReactiveFormsModule,
    DisabledControlModule,
    FormsModule,
    ModalModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
