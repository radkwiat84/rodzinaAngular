import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { CreateFatherComponent } from './components/create-father/create-father.component';
import { FatherService } from './shared_service/father.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CreateChildComponent } from './components/create-child/create-child.component';
import { ChildService } from './shared_service/child.service';
import { CreateFamilyComponent } from './components/create-family/create-family.component';
import { FamilyService } from './shared_service/family.service';
import { DecisionComponent } from './components/decision/decision.component';
import { CreateDecisionComponent } from './components/create-decision/create-decision.component';
import { AddChildToFamilyComponent } from './components/add-child-to-family/add-child-to-family.component';
import { AddChildDecisionComponent } from './components/add-child-decision/add-child-decision.component';
import { ReadFamilyComponent } from './components/read-family/read-family.component';
import { SearchEngineComponent } from './components/search-engine/search-engine.component';
import { GetFamilyComponent } from './components/get-family/get-family.component';
import { MenuComponent } from './components/menu/menu.component';



const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'createFather', component: CreateFatherComponent },
  { path: 'createChild', component: CreateChildComponent },
  { path: 'addFatherToFamily', component: CreateFamilyComponent },
  { path: 'decision', component: DecisionComponent },
  // { path: 'creatingDecision', component: CreateDecisionComponent },
  { path: 'addChildToFamily', component: AddChildToFamilyComponent },
  // { path: 'addChildDecision', component: AddChildDecisionComponent },
  { path: 'readFamily', component: ReadFamilyComponent },
  { path: 'searchEngine', component: SearchEngineComponent },
  { path: 'getFamily', component: GetFamilyComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateFatherComponent,
    CreateChildComponent,
    CreateFamilyComponent,
    DecisionComponent,
    CreateDecisionComponent,
    AddChildToFamilyComponent,
    AddChildDecisionComponent,
    ReadFamilyComponent,
    SearchEngineComponent,
    GetFamilyComponent,
    MenuComponent
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
