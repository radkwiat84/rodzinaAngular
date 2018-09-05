import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { CreateFatherComponent } from './components/create-father/create-father.component';


const appRoutes:Routes=[
  {path:'', component:IndexComponent},
  {path:'createFather', component:CreateFatherComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateFatherComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
