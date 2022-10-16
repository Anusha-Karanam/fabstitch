import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TermsofservicesComponent } from './termsofservices/termsofservices.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    TermsofservicesComponent,
    PrivacypolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
