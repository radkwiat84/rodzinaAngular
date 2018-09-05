import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { CreateFatherComponent } from './components/create-father/create-father.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateFatherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
