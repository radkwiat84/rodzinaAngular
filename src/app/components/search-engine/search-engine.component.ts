import { Component, OnInit } from '@angular/core';
import { Child } from '../../child';
import { ChildService } from '../../shared_service/child.service';
import { Father } from '../../father';
import { FatherService } from '../../shared_service/father.service';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.css']
})
export class SearchEngineComponent implements OnInit {
  private child: Child;
  private fathers: Father[] = [];

  constructor(private _childService: ChildService, private _fatherService: FatherService) { }

  ngOnInit() {
    this.child = this._childService.getter();
  }

  startSearching() {
    console.log(this.child.firstName)
    this._childService.findChildrenFromSearchEngine(this.child.firstName, this.child.secondName, this.child.pesel, this.child.birthDate, this.child.sex
    ).subscribe((children) => {
      console.log(children);
      for (let child of children) {
        this._fatherService.getFatherByFamilyId(child.family.id).subscribe((father) => {
          this.fathers.push(father);
        })
      }
    }, (error) => {
      console.log(error);
    })
  }



  getDetailOfFamily() {

  }


}
