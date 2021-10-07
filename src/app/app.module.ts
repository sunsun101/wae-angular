import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GreetingComponent } from './greeting/greeting.component';
import { AboutComponent } from './about/about.component';
import { LazyLoadedModule } from './lazy-loaded/lazy-loaded.module';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LazyLoadedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
