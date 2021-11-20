import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LargeComponentExampleComponent } from './large-component-example/large-component-example.component';
import { MediumComponentExampleComponent } from './medium-component-example/medium-component-example.component';
import { SmallComponentExampleComponent } from './small-component-example/small-component-example.component';
import { MaterialModule } from './material.module';
import { MainPageHeaderComponent } from './main-page-header/main-page-header.component';
import { MainPageComponent } from './main-page-component/main-page-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainPageService } from './common/services/main-page.service';
import { HttpClientModule } from '@angular/common/http';
import { EmailPipe } from './common/pipes/email.pipe';
import { EmailIDPipe } from './common/pipes/email-id.pipe';
import { EmailStringPipe } from './common/pipes/email-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LargeComponentExampleComponent,
    MediumComponentExampleComponent,
    SmallComponentExampleComponent,
    MainPageHeaderComponent,
    MainPageComponent,
    EmailPipe,
    EmailIDPipe,
    EmailStringPipe,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, MaterialModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [MainPageService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
