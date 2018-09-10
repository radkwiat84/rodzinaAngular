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
import {ChildService} from './shared_service/child.service';
import { CreateFamilyComponent } from './components/create-family/create-family.component';
import {FamilyService}  from './shared_service/family.service';
import { DecisionComponent } from './components/decision/decision.component';


const appRoutes:Routes=[
  {path:'', component:IndexComponent},
  {path:'createFather', component:CreateFatherComponent},
  {path:'createChild', component:CreateChildComponent},
  {path:'createFamily', component:CreateFamilyComponent},
  {path:'decision' , component:DecisionComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateFatherComponent,
    CreateChildComponent,
    CreateFamilyComponent,
    DecisionComponent
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
