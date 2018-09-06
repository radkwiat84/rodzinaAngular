import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { CreateFatherComponent } from './components/create-father/create-father.component';
import { FatherService} from './shared_service/father.service';
import {HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { CreateChildComponent } from './components/create-child/create-child.component';


const appRoutes:Routes=[
  {path:'', component:IndexComponent},
  {path:'createFather', component:CreateFatherComponent}
  {path:'createChild', component:CreateChildComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateFatherComponent,
    CreateChildComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    HttpModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
