import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ActionBarComponent } from './actionBar/action.bar.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent, ActionBarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
